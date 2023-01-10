---
sidebar_position: 2
---

# Exporting/Importing your coins to another wallet
If you have coins on a Ledger wallet and somehow need to export them to another wallet (for instance, because you have lost your Ledger or because the integration isn't up to date), you can do so by following the steps below.

This process will involve re-importing your **Ledger mnemonics** inside Polkadot JS, which we will then use to generate a file importable in other wallets like Talisman or the Polkadot JS extension.

<iframe src="//www.youtube.com/embed/37FXes6XSxI" frameBorder="0" allowFullScreen width="100%"></iframe>

1. Open [nodleprotocol.io](https://nodleprotocol.io/?rpc=wss%3A%2F%2Fnodle-parachain.api.onfinality.io%2Fpublic-ws#/explorer) and ensure the Nodle mainnet is selected.
2. Navigate to the `Settings` page in the upper top navigation bar.
3. In the `MANAGE HARDWARE CONNECTIONS` dropdown, select `Attach Ledger via WebUSB (Chrome, recommended)`. Click `Save`.
4. Navigate to the `Accounts` page.
5. Click the `+ Account` button.
6. Enter your seed in the `MNEMONIC SEED` text field.
7. Open the `Advanced creation options` dropdown.
8. In `KEYPAIR CRYPTO TYPE` select `Ledger (ed25519, BIP32 derivation)`.
9. In the `LEDGER APP TYPE (ORIGINATED FROM)` field, select `Nodle Chain`.
10. Tick `I HAVE SAVED MY MNEMONIC SEED SAFELY` and click `Next`
11. Select a name and password for your account and click `Next`.
12. Verify your account details and click `Save`.
13. At this step, a backup file in with a `.json` extension will be downloaded. You can use it to import your Nodle Ledger account with any wallet of your choice that support a restoratiion from a JSON or Keystore file. Alternatively, you can now use your account as a normal account in Polkadot JS / Nodle Protocol.