import { createShortUrl, getOriginalUrl } from "../services/urlService.js";

export async function shortenUrl(req, res) {
  const { url } = req.body;
  if(!url) {
    return res.status(400).json({error: 'Url is required'});
  }

  const code = await createShortUrl(url);
  res.status(200).json({
    shortID: `${code}`
  });
}

export async function redirectUrl(req, res) {
  const { code } = req.params;

  const originalUrl = await getOriginalUrl(code);

  if (!originalUrl) {
    return res.status(404).send("Not found");
  }

  return res.redirect(originalUrl);
}