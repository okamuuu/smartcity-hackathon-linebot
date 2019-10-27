## specify url

```
now alias set https://linebot-b5pc3u011.now.sh okamuuu-linebot
```

- https://linebot.okamuuu.now.sh

## enviroments

.env for development

```
CHANNEL_ACCESS_TOKEN=xxxx-xxxx-xxxx-xxxx
CHANNEL_SECRET=xxxxxxxxxxxx
```

now secret for production

```
now secret add okamuuu-linebot-prod-token xxxx-xxxx-xxxx-xxxx
now secret add okamuuu-linebot-prod-secret xxxxxxxxxxxx
now secret add okamuuu-clova-prod-extension-id xxxxxxxxxxxx
```

## development

```
npm start
ngrok http 3000
```

