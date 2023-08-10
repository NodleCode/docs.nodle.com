---
sidebar_position: 2
---

# Create a wallet account

:::info
If you check your newly created account on [Subscan](https://nodle.subscan.io), it won't show up until you deposit some Nodle Cash tokens.
:::

## TL;DR
Go to [https://nodleprotocol.io/#/accounts](https://nodleprotocol.io/#/accounts), select Nodle Mainnet, and install the [Polkadot chrome extension](https://polkadot.js.org/extension/) to create an account. 

<iframe src="//www.youtube.com/embed/vlwD0UCiM3E" frameBorder="0" allowFullScreen width="100%"></iframe>

## Background
Nodle has migrated from the Stellar blockchain to our own, native Nodle Chain. Nodle is built upon Parity Substrate, and if you’re interested you can read a lot more about how it works [here](https://www.parity.io/blog/iot-on-substrate-nodle-io/). We decided to migrate for a couple of reasons; primarily being that with a native blockchain, we can enable the features outlined in our Nodle [white paper](https://nodle.docsend.com/view/gjtn4jc) (like proof of connectivity, and our own decentralized PKI), while maintaining control over our own destiny.
Stellar enabled us to build a powerful MVP (Minimum Viable Product) and prove that we could build a business around incentivized IoT connectivity. It’s time for the next step. It is our pleasure to introduce the Nodle Chain. The Nodle chain is faster, more decentralized, and add more utility to your Nodle Cash Cryptocurrency (Like built in, decentralized certificates).

## How to Create a Native Nodle Wallet
Nodle is built upon Polkadot Substrate, making it compatible with most Polkadot wallets. For this tutorial, we will use the official wallet.
Ledger support is coming soon, and we will update accordingly.

### Step 1: Go to the nodleprotocol.io (Nodle Portal)
[https://nodleprotocol.io/#/accounts](https://nodleprotocol.io/#/accounts)

![nodleprotocol.io](/img/docs/nodle-cash/web-wallet.png)

*Note: We recommend using a Chrome based browser like Chrome or Brave. If you are using Brave (which you should be) please turn off ‘shields’ as it can cause errors.*

### Step 2: Make Sure You are Connecting to The Nodle Chain Mainnet
Sometimes the Wallet will default to another blockchain (As we interoperate with the Polkadot Ecosystem. If So Go to the top left and select the Nodle Network".

![Change Network](/img/docs/nodle-cash/change-network.png)


## Step 3: Set Up the Polkadot.js Extension:
1. There are a few ways to create an account; we are going to recommend the most user-friendly way.
2. Install the Polkadot-js extension, which is similar to Ethereum’s Metamask, except it doesn't do [this](https://www.youtube.com/watch?v=Ms7Tsyo95J0).
3. Install the chrome extension:
   ![Install Extension](/img/docs/nodle-cash/install-extension.png)

## Step 4: Create an Account
Now, go back to the wallet and reload. There may be a popup asking for your permission to connect. 

If the Polkadot Add on is not showing, Simply click Extensions, and pin to your browser (Then click the extension to open)

![Pin Extension](/img/docs/nodle-cash/pin-extension.png)

1. Follow the directions to generate your account, by clicking "+":
   ![Create Wallet](/img/docs/nodle-cash/create-wallet.png)
   :::danger Make sure to backup your mnemonics
   You have generated 12 words. Keep them extremely safe. If you lose these words, all of your funds will be lost. If someone else gets them, they can steal all of your cryptos.

   ![Backup Your Mnemonics](/img/docs/nodle-cash/backup_mnemonics.png)
   :::
2. Now that you’ve saved your seed words securely, give your account a name. 
3. Select an appropriate network from the drop-down list. For example, Polkadot Relay Chain or Nodle Parachain. 
4. Add a strong password. You must use a long, randomly generated password (greater than 11 characters). **Important**: Enure you use a password generator or password manager to generate a lengthy password. Manual entry of passwords may not work.
   ![Password](/img/docs/nodle-cash/create_acc.png)
4. Now you have an account! Finish up:
   ![Add Account](/img/docs/nodle-cash/create_pw.png)
   ![Account Added](/img/docs/nodle-cash/Nodlaccsetup.png)
5. Close the window by clicking outside it, and reload the page:
   ![Reload](/img/docs/nodle-cash/reload.png)
   You’ll be asked to give permission for the webpage to access the Polkadot-js chrome app. Please allow. If you have closed the webpage, you will be asked to give your password.
6. You're all set!
   ![Account Loaded](/img/docs/nodle-cash/acc_reload.png)
7. Nice work! You’re all ready to go. Bookmark this page and keep your seed words very safe.
