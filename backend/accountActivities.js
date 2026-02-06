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
  // Use the exact URL as requested, only changing after/until (and page_token)
  const baseUrl = `${ALPACA_BASE_URL}/v2/account/activities`;
  const params = new URLSearchParams({
    activity_types: '',
    category: 'trade_activity',
    direction: 'asc',
    page_size: '100',
  });
  if (query.after) params.set('after', query.after);
  if (query.until) params.set('until', query.until);
  if (query.page_token) params.set('page_token', query.page_token);
  const url = `${baseUrl}?${params.toString()}`;
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
    let allActivities = [];
    let pageToken = undefined;
    let first = true;
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    do {
      const query = { ...req.query };
      query.page_size = '100';
      if (!first && pageToken) {
        query.page_token = pageToken;
      }
      const response = await alpacaActivitiesRequest(query);
      // Alpaca returns an array or an object with next_page_token
      if (Array.isArray(response)) {
        allActivities = allActivities.concat(response);
        break;
      } else {
        if (response.activities) {
          allActivities = allActivities.concat(response.activities);
        }
        pageToken = response.next_page_token;
        first = false;
        if (pageToken) {
          await sleep(2000); // Wait 2 seconds between requests
        }
      }
    } while (pageToken);
    res.json(allActivities);
  } catch (error) {
    console.error('Error fetching account activities:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
