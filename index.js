'use strict';

require('dotenv').config()

const line = require('@line/bot-sdk');
const clova = require('@line/clova-cek-sdk-nodejs');
const express = require('express');

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

// create LINE SDK client
const client = new line.Client(config);

// clova
const clovaSkillHandler = require('./clova');
const clovaMiddleware = clova.Middleware({ applicationId: process.env.EXTENSION_ID });

const { 
  getExampleFlexMessage, 
  getRecommendFoodsFlexMessage,
  getMotsuFlexMessage
} = require('./flex-message-helper');

// create Express app
// about Express itself: https://expressjs.com/
const app = express();

app.get('/api/ping', (req, res) => {
  res.json({ping: 'pong'})
})

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/api/linebot', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

app.post('/api/clova', clovaMiddleware, clovaSkillHandler);

function _msg(text) {
  return { type: 'text', text }
}

// event handler
async function handleEvent(event) {
  if (event.replyToken && event.replyToken.match(/^(.)\1*$/)) {
      return console.log("Test hook recieved: " + JSON.stringify(event.message));
  }

  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }
  
  if (event.message.text.match("もつ")) {
    console.log(getMotsuFlexMessage())
    return client.replyMessage(event.replyToken, [
      getMotsuFlexMessage()
    ])
  }

  if (event.message.text.match("とんこつ")) {
 
    return client.replyMessage(event.replyToken, [
      _msg("とんこつラーメンが美味しいお店はこちらです"), 
    {
      "type": "location",
      "title": "博多ビル",
      "address": "〒812-0012 福岡県福岡市博多区博多駅中央街８−１",
      "latitude": 33.5881935,
      "longitude": 130.4191479
    }, {
      "type": "location",
      "title": "HAKATA MEGUSTA×峠の玄氣屋(ハカタメグスタ)",
      "address": "〒812-0012 福岡県福岡市博多区博多駅中央街６−２",
      "latitude": 33.586299,
      "longitude": 130.421892
    },
    _msg("LINE PAY で支払いできるお店だよ!!")
    ])
  }
 
  if (event.message.text.match("はらへり")) {
    return client.replyMessage(event.replyToken, [
      getRecommendFoodsFlexMessage(),
      {
        type: 'text',
        text: "博多でオススメの食べ物だよ"
      }
    ])
  } else {
    return client.replyMessage(event.replyToken, [{
      type: 'text',
      text: "お腹すいたんでしょ？美味しいご飯あるよ!"
    },
      getExampleFlexMessage() 
    ])
  }

  return client.replyMessage(event.replyToken, event.message);
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

function sleep(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
