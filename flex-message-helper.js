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

function getMotsuFlexMessage() {
  return {
    "type": "flex",
    "altText": "motsu foods",
    "contents": {
      "type": "carousel",
      "contents": [{
          "type": "bubble",
          "size": "micro",
          "hero": {
            "type": "image",
            "url": "https://user-images.githubusercontent.com/44544276/67616445-d568e800-f813-11e9-8865-a12bffcac4e5.jpg",
            "size": "full",
            "aspectMode": "cover",
            "aspectRatio": "320:213"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
                "type": "text",
                "text": "Motsunabe LINE",
                "weight": "bold",
                "size": "sm",
                "wrap": true
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [{
                    "type": "icon",
                    "size": "xs",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                  },
                  {
                    "type": "icon",
                    "size": "xs",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                  },
                  {
                    "type": "icon",
                    "size": "xs",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                  },
                  {
                    "type": "icon",
                    "size": "xs",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                  },
                  {
                    "type": "icon",
                    "size": "xs",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                  },
                  {
                    "type": "text",
                    "text": "4.1",
                    "size": "xs",
                    "color": "#8c8c8c",
                    "margin": "md",
                    "flex": 0
                  }
                ]
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
                      "text": "Time",
                      "color": "#aaaaaa",
                      "size": "xs",
                      "flex": 2
                    },
                    {
                      "type": "text",
                      "text": "16:00 - 24:00",
                      "wrap": true,
                      "color": "#666666",
                      "size": "xs",
                      "flex": 4
                    }
                  ]
                }]
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
                      "text": "budget",
                      "color": "#aaaaaa",
                      "size": "xs",
                      "flex": 2
                    },
                    {
                      "type": "text",
                      "text": "5,000yen",
                      "wrap": true,
                      "color": "#666666",
                      "size": "xs",
                      "flex": 4
                    }
                  ]
                }]
              }
            ],
            "spacing": "sm",
            "paddingAll": "13px"
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "xs",
            "contents": [{
                "type": "button",
                "style": "link",
                "height": "xs",
                "action": {
                  "type": "uri",
                  "label": "MAP",
                  "uri": "https://goo.gl/maps/1V6251KAbHFP6CqC8"
                }
              },
              {
                "type": "button",
                "style": "link",
                "height": "xs",
                "action": {
                  "type": "uri",
                  "label": "WEB SITE",
                  "uri": "https://linecorp.com"
                }
              }
            ],
            "flex": 0,
            "paddingAll": "0px"
          }
        },
        {
          "type": "bubble",
          "size": "micro",
          "hero": {
            "type": "image",
            "url": "https://user-images.githubusercontent.com/44544276/67616461-0e08c180-f814-11e9-9712-2b9486f6a16b.jpg",
            "size": "full",
            "aspectMode": "cover",
            "aspectRatio": "320:213"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [{
                "type": "text",
                "text": "MOTSU",
                "weight": "bold",
                "size": "sm",
                "wrap": true
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [{
                    "type": "icon",
                    "size": "xs",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                  },
                  {
                    "type": "icon",
                    "size": "xs",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                  },
                  {
                    "type": "icon",
                    "size": "xs",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                  },
                  {
                    "type": "icon",
                    "size": "xs",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                  },
                  {
                    "type": "icon",
                    "size": "xs",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                  },
                  {
                    "type": "text",
                    "text": "4.0",
                    "size": "xs",
                    "color": "#8c8c8c",
                    "margin": "md",
                    "flex": 0
                  }
                ]
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
                      "text": "Time",
                      "color": "#aaaaaa",
                      "size": "xs",
                      "flex": 2
                    },
                    {
                      "type": "text",
                      "text": "17:30 - 23:00",
                      "wrap": true,
                      "color": "#666666",
                      "size": "xs",
                      "flex": 4
                    }
                  ]
                }]
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
                      "text": "budget",
                      "color": "#aaaaaa",
                      "size": "xs",
                      "flex": 2
                    },
                    {
                      "type": "text",
                      "text": "3,500yen",
                      "wrap": true,
                      "color": "#666666",
                      "size": "xs",
                      "flex": 4
                    }
                  ]
                }]
              }
            ],
            "spacing": "sm",
            "paddingAll": "13px"
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "xs",
            "contents": [{
                "type": "button",
                "style": "link",
                "height": "xs",
                "action": {
                  "type": "uri",
                  "label": "MAP",
                  "uri": "https://goo.gl/maps/NGZ9QXXwrfXpcULC9"
                }
              },
              {
                "type": "button",
                "style": "link",
                "height": "xs",
                "action": {
                  "type": "uri",
                  "label": "WEB SITE",
                  "uri": "https://linecorp.com"
                }
              }
            ],
            "flex": 0,
            "paddingAll": "0px"
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
                "text": "hotpot Motsu",
                "weight": "bold",
                "size": "sm",
                "wrap": true
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [{
                    "type": "icon",
                    "size": "xs",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                  },
                  {
                    "type": "icon",
                    "size": "xs",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                  },
                  {
                    "type": "icon",
                    "size": "xs",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                  },
                  {
                    "type": "icon",
                    "size": "xs",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                  },
                  {
                    "type": "icon",
                    "size": "xs",
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                  },
                  {
                    "type": "text",
                    "text": "4.1",
                    "size": "xs",
                    "color": "#8c8c8c",
                    "margin": "md",
                    "flex": 0
                  }
                ]
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
                      "text": "Time",
                      "color": "#aaaaaa",
                      "size": "xs",
                      "flex": 2
                    },
                    {
                      "type": "text",
                      "text": "18:00 - 24:00",
                      "wrap": true,
                      "color": "#666666",
                      "size": "xs",
                      "flex": 4
                    }
                  ]
                }]
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
                      "text": "budget",
                      "color": "#aaaaaa",
                      "size": "xs",
                      "flex": 2
                    },
                    {
                      "type": "text",
                      "text": "4,000yen",
                      "wrap": true,
                      "color": "#666666",
                      "size": "xs",
                      "flex": 4
                    }
                  ]
                }]
              }
            ],
            "spacing": "sm",
            "paddingAll": "13px"
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "xs",
            "contents": [{
                "type": "button",
                "style": "link",
                "height": "xs",
                "action": {
                  "type": "uri",
                  "label": "MAP",
                  "uri": "https://goo.gl/maps/p85QNYwoVGd4XiUg6"
                }
              },
              {
                "type": "button",
                "style": "link",
                "height": "xs",
                "action": {
                  "type": "uri",
                  "label": "WEB SITE",
                  "uri": "https://linecorp.com"
                }
              }
            ],
            "flex": 0,
            "paddingAll": "0px"
          }
        }
      ]
    }
  }
}

module.exports = { getExampleFlexMessage, getRecommendFoodsFlexMessage, getMotsuFlexMessage }
