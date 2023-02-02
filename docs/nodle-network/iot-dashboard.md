---
sidebar_position: 3
---

# Using the IoT dashboard

## Getting started

### Login

Go to [IoT Website](https://iot.nodle.com/) and sign in using your email. Right after, you should receive an email containing a magic link that will redirect you to your dashboard : _(Don't forget to check your spam folder)_

![LoginEmail](/img/docs/nodle-dashboard/sdk_login_email.jpg)

**Note**: Please note that the magic link's URL will always look like `https://iot.nodle.com/?token=******` or `https://sdk.nodle.com/?token=******`, every other link format should be considered as phishing.

### Create your organization

After clicking the magic link, you will be redirected to a page where you have to select your **organization** (aka **team**). Unless you have been invited by a team member, this list will be empty if you log in for the first time. Please create a new team.

You are able to create multiple teams in order to organize your BLE devices oversight in a way that suits you. (this shouldn’t be necessary unless you have separate teams managing separate fleets of devices ; otherwise you will be able to handle several fleets within the same team)

## Using dashboard

Once you are fully setup, you will be able to start using your dashboard. You have to use it in order to provide information about devices your want to get data from. Obviously, you also need to go through our KYC process in order to validate that the devices you want to track are yours.

The whole working of this dashboard is articulated around two main objects :

- `Devices` that are the devices registred that you want us to get data from.
- `Fleets` that are "groups" or "bundles" of `Devices`.

**Note**: A `Device` is always linked to a fleet and cannot be created without one.

## Fleets

**Definition**: a `Fleet` is a **set of BLE devices** you want to track using the Nodle network

#### 1. **Types of `Fleets`**

There is currently three different kind of **fleets**:

- `iBeacon` : for beacon devices that share the same identifier.
- `SDATA` : for devices with a specific service data advertised.
- `CID` : for devices with a specific company ID advertised.
- `CSV` : for devices that are unrelated to each other and does not belong to previously enumerated types of **fleets**.

### 2.** How to create a `Fleet`**

Go to the [**fleets** page](https://iot.nodle.com/dashboard/fleets) and click the `Add fleet` button.

**Fields description** :
- `Name`: Describe your fleet with a short name.
- `Identifier`: Describe how to find devices related to this **fleet**. Here are an example for each **fleet** type:
    - `iBeacon` : `ibeacon:{uuid-identifier}` → `ibeacon:1e4f57de-4ac4-47ce-a785-82c57a8781c9`
    - `SDATA` : `sdata:{service-data}` → `sdata:abcd`
    - `CID` : `cid:{company-id}` -> `cid:004c`
    - `CSV` : `csv:{short-name}` → `csv:my-custom-fleet`
- `Protocol` / `Endpoint` define an optional webhook if you want data related to this **fleet** to be directly forwarded to an endpoint of yours. _Please note that this feature requires some updates on our side so please contact us directly if you want to implement it._

**Fleets** are created with `Pending` status. This means that your fleet is not currently enabled and will not gather any data from our network until KYC process is completed. When everything has been validated on our side, your **fleet** should now appear as `Live`.

### 3. **How is this working?**

a. _iBeacon_ fleets

If you have **active iBeacon fleets** on your dashboard, our network will search for any devices matching identifiers of these **fleets**. When a device is found, it is automatically created and added to the related **fleet**. Everytime this device is found again, we will update its data (geoloc, payload,...).

b. _Service data / Company ID fleets_

Contrary to **iBeacon fleets**, because we don't have clear information about singularity of the devices that emit payloads we are receiving, `SDATA` and `CID` **fleets** does not register any devices. The only way to consult data related to this **fleets** is to use the API.

c. _CSV fleets_

You should use this if you want to track various **iBeacon devices** that are not related to each other (not sharing the same UUID identifier).

Once the fleet is created, you will need to go to [**devices** page](https://iot.nodle.com/dashboard/fleets) and manually create devices you want to track.


## Devices

### 1. Types of `Device`

As mentionned before, there is currently only one type of device, `iBeacon` devices.

### 2. How to create a `Device`

Go to [**devices** page](https://iot.nodle.com/dashboard/fleets) and click `Add Device` button.

**Fields description** :
- `Name`: Describe your **device** with a short name.
- `Identifier`: Describe how to find this **device**.
    - `iBeacon` : `ibeacon:{uuid-identifier}#{major}#{minor}` → `ibeacon:1e4f57de-4ac4-47ce-a785-82c57a8781c9#123#456`
- `Protocol` / `Endpoint` define an optional webhook if you want data related to this **fleet** to be directly forwarded to an endpoint of yours. _Please note that this feature requires some updates on our side so please contact us directly if you want to implement it._

Note that the identifier of an **iBeacon device** also contains its minor and major.

## Map

There is also a [**map**](https://iot.nodle.com/dashboard/map) showing all your devices in live time. If you track more than 200 devices, only the 200 most recent will be displayed.