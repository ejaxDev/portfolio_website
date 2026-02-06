// GET /api/account-activities
// Query params: activity_types, category, date, until, after, direction, page_size, page_token
import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

const router = express.Router();
dotenv.config();

const ALPACA_API_KEY = process.env.ALPACA_API_KEY;
const ALPACA_SECRET_KEY = process.env.ALPACA_SECRET_KEY;
const ALPACA_BASE_URL = process.env.ALPACA_BASE_URL || 'https://paper-api.alpaca.markets';

async function alpacaActivitiesRequest(query) {
  const params = new URLSearchParams();
  for (const key in query) {
    if (query[key]) {
      params.set(key, query[key]);
    }
  }
  const url = `${ALPACA_BASE_URL}/v2/account/activities?${params.toString()}`;
  const response = await fetch(url, {
    headers: {
      'APCA-API-KEY-ID': ALPACA_API_KEY,
      'APCA-API-SECRET-KEY': ALPACA_SECRET_KEY,
    },
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Alpaca API error: ${response.status} - ${error}`);
  }
  return response.json();
}

router.get('/', async (req, res) => {
  try {
    const activities = await alpacaActivitiesRequest(req.query);
    res.json(activities);
  } catch (error) {
    console.error('Error fetching account activities:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
