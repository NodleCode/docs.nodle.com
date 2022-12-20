---
sidebar_position: 4
---

# IoT Dashboard API - Getting started

## Getting started

We consider that at this point, you are already onboarded on the **IoT dashboard** and that you have organizations created.

### APIs

Please note that there is two different APIs :

- **[SDK API](https://api.sdk.nodle.io/swagger/index.html)**: manage your account, your organizations, your API keys,...
    - Base URL : `https://api.sdk.nodle.io/api/v1/`
- **[IoT API](https://iot.nodle.com/swagger/index.html)**: retrieve data from your **fleets** and **devices**. 
    - Base URL : `https://iot.nodle.com/api/v1/`

In order to use the **IoT API**, you will have to create an **API key** directly from **SDK API**. _Everything is described in the following steps._

### SDK API authentication

Go to [IoT dashboard](https://iot.nodle.com/) or [SDK dashboard](https://sdk.nodle.com/) and sign in using your email. Right after, you should receive an email containing a magic link that should looks like `https://iot.nodle.com/?token={token}`. Please copy this `token`, we will need it to authenticate requests later.

**Note**: Please note that the magic link's URL will always look like `https://iot.nodle.com/?token=******` or `https://sdk.nodle.com/?token=******`, every other link format should be considered as fishing.

### Create your API key

Once you have your `token`, you will be able to create your API key with `/api/v1/currentuser/apikeys` **SDK API** endpoint:

```bash
curl -X 'POST' \
  'https://api.sdk.nodle.io/api/v1/currentuser/apikeys' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer {YOUR_TOKEN}' \
  -H 'Content-Type: application/json' \
  -d '{
  "displayName": "My First API Key!"
}'
```

If your request is valid, you will receive your newly created API key:

```json
{
    "id": 1234567,
    "display_name": "My First API Key!",
    "apikey": "{YOUR_API_KEY}",
    "created_on": "2022-12-20T07:58:26.198146239Z",
    "updated_on": "2022-12-20T07:58:26.198146239Z"
}
```

**Note**: API key are very sensitive information and let anybody access your data if leaked, please take great care of it.

### Find you organization ID

For most **IoT API calls**, you will need to know what's your organization ID. To find it out, please use `api/v1/currentuser/organizations` **SDK API** endpoint :

```bash
curl -X 'GET' \
  'https://api.sdk.nodle.io/api/v1/currentuser/organizations' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer {YOUR_TOKEN}'
```

```json
[
    {
        "id": 123456,
        "display_name": "Umbrella Corp.",
        "data_addendum": true,
        "verification_status": true,
        "roles": [
            "admin"
        ],
        "created_on": "1968-07-22T09:57:17.497291Z",
        "updated_on": "2022-08-15T14:58:51.627868Z"
    }
]
```

### Start using IoT API

With **API key** and **organization ID** in our hands, we are now able to use the **IoT API** :

```bash
curl -X 'GET' \
  'https://iot.nodle.com/api/v1/organizations/{YOUR_ORGANIZATION_ID}' \
  -H 'accept: application/json' \
  -H 'x-api-key: {YOUR_API_KEY}'
```

```json
{
    "data": [
        {
            "bearer": null,
            "enabled": false,
            "id": "1e5677de-002e-4278-9b1c-909881b33962",
            "identifier": "ibeacon:ace34cb9-d541-473e-8d77-a8e07a1df7dc",
            "inserted_at": "2021-09-21T16:40:03",
            "name": "Umbrella Corp. Fleet #1",
            "organization_id": 123456,
            "routing_target": null,
            "routing_type": null,
            "updated_at": "2022-11-21T18:41:17"
        }
    ]
}
```