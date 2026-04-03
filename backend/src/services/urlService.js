import { connectToDb } from "../db/db.js";
import redis from "../lib/redis.js";
import { generateCode } from "../utils/generateCode.js";

export async function createShortUrl(originalUrl) {
  let code;
  const db = await connectToDb();

  // collision handling
  while (true) {
    code = generateCode();
    try {
      await db.collection("urls").insertOne({
        shortId: code,
        originalUrl,
        createdAt: new Date(),
        clicks: 0,
      });

      return code;

    } catch (err) {
      if (err.code === 11000) {
        // collision happened → retry
        continue;
      }
      throw err;
    }
  }
} 

export async function getOriginalUrl(code) {
  const cached = await redis.get(code);
  if (cached) {
    return cached;
  }
  const db = await connectToDb();

  const doc = await db.collection("urls").findOne(
    {shortId: code},
    { projection: { originalUrl: 1 } }
  );

  if (!doc) return null;

  // cache the result for future requests
  await redis.set(code, doc.originalUrl);

  // update click count
  db.collection("urls").updateOne(
    { shortId: code },
    { $inc: { clicks: 1 } }
  );

  return doc.originalUrl;
}