require('dotenv').config();
const express = require('express');
const { OpenAI } = require('openai'); 
const { parseFile } = require('../utils/fileParser');

const router = express.Router();

// initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

let previousMessages = {}; 

router.post('/query', async (req, res) => {
  try {
    const { userId, query, threadId, data } = req.body;

    // format conversation thread
    const thread = previousMessages[userId] || [];
    thread.push({ role: 'user', content: query });

    // send query to OpenAI
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: thread,
      stream: true,
    });
    

    const assistantReply = response.choices[0].message.content;
    thread.push({ role: 'assistant', content: assistantReply });

    // save conversation thread
    previousMessages[userId] = thread.slice(-25);

    res.json({ reply: assistantReply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

router.get('/data', (req, res) => {
  const profitLoss = require('../data/profit_loss.json');
  const balanceSheet = require('../data/balance_sheet.json');
  const executeSummary=require('../data/execute_summary.json');
  res.json({ profitLoss, balanceSheet,executeSummary });
});

module.exports = router;
