function getExampleFlexMessage () {
  return {
      "type": "flex",
      "altText": "This is a Flex Message",
      "contents": {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Do you like noodle?"
            },
            {
              "type": "button",
              "style": "link",
              "action": {
                "type":"message",
                "label":"Yes",
                "text":"I want noodle"
              }
            }
          ]
        }
      }
    }
}

module.exports = { getExampleFlexMessage }
