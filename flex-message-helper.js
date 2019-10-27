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

function getRecommendFoodsFlexMessage() {
  return {
      "type": "flex",
      "altText": "recommend foods",
      "contents": {
 
    "type": "carousel",
    "contents": [{
        "type": "bubble",
        "size": "micro",
        "hero": {
          "type": "image",
          "url": "https://user-images.githubusercontent.com/35923250/67615907-04c82680-f80d-11e9-8000-dea01703d8b4.jpg",
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "320:213"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [{
              "type": "text",
              "text": "chicken",
              "weight": "bold",
              "size": "lg",
              "wrap": true
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [{
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [{
                  "type": "text",
                  "text": "Yakitori: Japanese style Grilled Chicken Yakitori refers to bit-sized pieces of chicken meat and giblets, charcoal-grilled on a bamboo skewer.",
                  "wrap": true,
                  "color": "#8c8c8c",
                  "size": "xs",
                  "flex": 5
                }]
              }]
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        }
      },
      {
        "type": "bubble",
        "size": "micro",
        "hero": {
          "type": "image",
          "url": "https://user-images.githubusercontent.com/35923250/67615908-0560bd00-f80d-11e9-966d-f68d2f491794.jpg",
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "320:213"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [{
              "type": "text",
              "text": "Motsunabe",
              "weight": "bold",
              "size": "lg",
              "wrap": true
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [{
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [{
                  "type": "text",
                  "text": "Motsunabe originally was a local dish around the Fukuoka City area.Motsunabe is a nabe dish made from Motsu (offal).",
                  "wrap": true,
                  "color": "#8c8c8c",
                  "size": "xs",
                  "flex": 5
                }]
              }]
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        }
      },
      {
        "type": "bubble",
        "size": "micro",
        "hero": {
          "type": "image",
          "url": "https://user-images.githubusercontent.com/35923250/67615909-0560bd00-f80d-11e9-9ab6-fcb318fa4e8b.jpg",
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "320:213"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [{
              "type": "text",
              "text": "Fishes",
              "weight": "bold",
              "size": "lg"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [{
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [{
                  "type": "text",
                  "text": "Sashimi is sliced raw fish such as tuna, shirimp　and cuttlefish. It is eaten after being dipped soy　sauce miｘed with Wasabi horseradish.",
                  "wrap": true,
                  "color": "#8c8c8c",
                  "size": "xs",
                  "flex": 5
                }]
              }]
            }
          ],
          "spacing": "sm",
          "paddingAll": "13px"
        }
      }
    ]
    }
  }
}

module.exports = { getExampleFlexMessage, getRecommendFoodsFlexMessage }
