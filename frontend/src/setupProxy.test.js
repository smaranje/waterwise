// src/setupProxy.test.js

const request = require('supertest');
const express = require('express');
const nock = require('nock');

// Mock environment variables
process.env.BACKEND_PROXY = 'http://localhost:8080';
process.env.PYTHONAPI_PROXY = 'http://localhost:5000';

// Import your middleware setup
const setupProxy = require('./setupProxy');

describe('Proxy Middleware Tests', () => {
  let app;

  beforeEach(() => {
    app = express();
    setupProxy(app);

    // Clean up any previous nock interceptors
    nock.cleanAll();
  });

  afterEach(() => {
    // Ensure all nock interceptors were used
    if (!nock.isDone()) {
      console.error('Not all nock interceptors were used!');
      nock.cleanAll();
    }
  });

  test('Proxies /api requests to BACKEND_PROXY', async () => {
    // Mock the target server response
    nock(process.env.BACKEND_PROXY)
      .get('/api/test-endpoint')
      .reply(200, { message: 'Backend response' });

    const res = await request(app).get('/api/test-endpoint');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Backend response' });
  });

  test('Proxies /pythonapi requests to PYTHONAPI_PROXY', async () => {
    // Mock the target server response
    nock(process.env.PYTHONAPI_PROXY)
      .get('/pythonapi/test-endpoint')
      .reply(200, { message: 'Python API response' });

    const res = await request(app).get('/pythonapi/test-endpoint');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Python API response' });
  });

  test('Handles HTTP 500 error responses from the target server', async () => {
    // Simulate a 500 error response from the target server
    nock(process.env.BACKEND_PROXY)
      .get('/api/error-endpoint')
      .reply(500, 'Internal Server Error');

    const res = await request(app).get('/api/error-endpoint');

    expect(res.status).toBe(500);
    expect(res.text).toBe('Internal Server Error');
  });
});

