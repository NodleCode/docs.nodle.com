---
sidebar_position: 3
---

# Using the IoT Dashboard

## Introduction

If you plan to use our **dashboard**, first thing first, be sure that we have whitelisted your email in order to be able to use it.

In case you are not yet in touch with us, you can contact us [here](https://iot.nodle.com/) using the **sign up** form.

### Log in

The only way to access the dashboard is by requesting a **magic link** with the **sign in** form. Note that our magic links are valid for a week.

### Fleets

To track your BLE devices, you will need to create **fleets**, they are simply a bundle of **devices**. Currently, there is four types of **fleets**:

- **iBeacon** (`ibeacon`) : automatically provisioned using proximity beacon identifier
- **Service Data** (`sdata`) : automatically provisioned using service data
- **Company ID** (`cid`) : automatically provisioned using company id
- **Custom** (`csv`) : only manually provisioned devices

You can find more information about each fleets right after :

#### Creating a fleet

After using the "_Add fleet_" button, fill the form:

- `name` - name of the fleet
- `identifier` - check each fleet specifications
- `protocol` - webhook query type
- `endpoint` - webhook endpoint
  - **webhook** implementation is in progress, if you need this feature, please reach us for more information

Once your **fleet** is created, its status will be `Waiting`. Please contact us so we check on our side that the resources your are trying to track belongs to you and put **fleet**'s status to `Live`.

When **fleet**'s status changes to `Live`, we instanlty start to gather data, from the **Nodle Network**, for devices matching the **fleet**'s identifier.

<sub>Note: that you will not be able to get any information related to fleets with `Waiting` status.</sub>

#### iBeacon Fleets

When if you need to track proximity beacon **devices** based on its identifier.

- `identifier` field should start with `ibeacon:` followed by the identifier. (eg. `ibeacon:2fe0b942-e851-4a6b-8e39-942259fef210`)

#### Service data Fleets

When you need to track **devices** based its on service data.

- `identifier` field should start with `sdata:` followed by the service data. (eg. `sdata:bddf`)

#### Company ID Fleets

When you need to track **devices** based its on company ID.

- `identifier` field should start with `cid:` followed by the company ID. (eg. `cid:004C`)
