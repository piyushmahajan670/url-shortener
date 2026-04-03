import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import '../src/config/env.js';
import clientPromise from '../src/lib/mongodb.js';
import app from '../src/app.js';

beforeAll(async () => {
  const client = await clientPromise;
  await client.db().collection('urls');
});
describe('URL Shortener API', () => {

  it('should create a short URL', async () => {
    const response = await request(app)
      .post('/shorten')
      .send({ url: 'https://www.example.com' });
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('shortID');
  });

  it('should redirect to the original URL', async () => {
    // First, create a short URL
    const shortenResponse = await request(app)
      .post('/shorten')
      .send({ url: 'https://www.example.com' });
    
    const { shortID } = shortenResponse.body;

    // Then, test the redirection
    const redirectResponse = await request(app)
      .get(`/${shortID}`)
      .expect(302); // Expect a redirect status

    expect(redirectResponse.headers.location).toBe('https://www.example.com');
  });


  it('should return 404 for non-existent short ID', async () => {
    await request(app)
      .get('/nonexistent')
      .expect(404);
  });

  it('should return 400 for missing URL in request body', async () => {
    await request(app)
      .post('/shorten')
      .send({})
      .expect(400);
  });
});