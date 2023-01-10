---
sidebar_position: 3
---

# Use a Ledger with Polkadot JS

## Before you start
Ensure you have the latest version of the Nodle (NODL) app [installed on your ledger](../ledger/introduction) device. Ensure that Ledger Live is closed as it may cause conflicts with Polkadot JS.

> You must use Chrome or a Chromium based browser such as Brave to use Polkadot JS with a Ledger Device.

## Navigate to Polkadot Substrate Portal or Nodle Portal
Use one of the links below to interact with the Nodle blockchain:
- [Polkadot Substrate Portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fnodle-parachain.api.onfinality.io%2Fpublic-ws#/explorer)
- [Nodle Portal](https://nodleprotocol.io/?rpc=wss%3A%2F%2Fnodle-parachain.api.onfinality.io%2Fpublic-ws#/explorer)

## Connect your Ledger
Assuming that you have the application opened and your Ledger is unlocked, navigate to `Settings`, then select `manage hardware connections` and choose one of the options presented to you. Click `Save`.

## Add your account
1. In the top header, go to `Accounts`.
2. In the drop-down menu, click `Accounts`.
3. Select `Add via Ledger` on the page that opens.
4. In the subsequent menu, enter a name in the `name` field, then leave `account type` and `address index` as they are. Click `Save`.
5. A pop-up window may appear. To confirm the connection with your Ledger device, select your device then click `Connect`.
6. Your account appears.

## Add additional accounts
If you own multiple accounts, follow the steps below to add them manually:
1. Select `Add via Ledger`.
3. In the `name` field, choose a different name for your second account.
3. In the `account type` field, choose Account type 1. The `address index` field can stay on the default 0 value. Click `Save`.
4. Your second account should now show up next to your first account. If you own a third account, follow the same steps but this time choose `account type` 2, and so on so forth.