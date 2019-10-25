'use strict';

require('dotenv').config()

const line = require('@line/bot-sdk');
const express = require('express');

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

console.log(config)

// create LINE SDK client
const client = new line.Client(config);

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

// event handler
function handleEvent(event) {
  if (event.replyToken && event.replyToken.match(/^(.)\1*$/)) {
      return console.log("Test hook recieved: " + JSON.stringify(event.message));
  }

  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }
  //メッセージの内容にアイデアという文字があれば歌詞を返す
  if(event.message.text.match("アイデア")){
    const echo =  {type: 'text', text: "つづく日々の道の先を塞ぐ影にアイデアを~"};
    // use reply API
    return client.replyMessage(event.replyToken, echo);
  }
  else {
    return client.replyMessage(event.replyToken, event.message);
  }
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
