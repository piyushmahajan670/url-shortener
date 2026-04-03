import Redis from "ioredis";

const redis = new Redis({
  url: process.env.REDIS_REST_URL,
});
export default redis;