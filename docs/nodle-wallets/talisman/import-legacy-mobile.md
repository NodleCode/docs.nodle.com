---
sidebar_position: 2
---

# Importing your Mobile Wallet

The Nodle Cash App might be using one of two wallet systems: Legacy or not Legacy. If you navigate to the screen with your public key by clicking the "Receive" button, the application will indicate whether you are using a Legacy wallet or not. If it does not say anything, you are not using a Legacy wallet.

## Non Legacy Wallets (default)

Importing your wallet is as easy as grabbing your mnemonics, and clicking "Add Account", then "Import from Secret Phase" in Talisman. You can then simply follow along, enter a name and your mnemonics and click "Restore". Simple, right?
![Import](/img/docs/talisman/import.png)


## Legacy Wallets

Legacy Wallets are a bit more complex to import. This is actually why we deprecated them.

In order to do this, you have to first go through Polkadot JS. You can follow our instructions [here](../nodle-cash/reimport-your-account.md).

Once this is done, you can use Polkadot JS to re-export your account, to do this, select the three dots on the right, and click the "Create a backup file for this account" button. It will make you download a file in the form of `your_address.json`.
![Export](/img/docs/talisman/pjs-export.png)

Once this is done, simply go to Talisman, click "Add Account" and then "Import from Polkadot.Js". Then simply follow Talisman's instructions.
![Import](/img/docs/talisman/import.png)
