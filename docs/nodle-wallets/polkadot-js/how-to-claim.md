---
sidebar_position: 3
---

# How to Claim your Coins

In some cases, you might have a grant of vested coins attached to your account. For instance, this would be the case if you bought some Nodle Cash or particpated to the Nodle Crowdloan.

:::tip Nodle has built a more user friendly UI
We know how cumbersome it is to use Polkadot.JS to claim your coins or even view your balance, that's why we created the [Nodle Client](../nodle-client/intro.mdx).
:::

## Step 1: Go to the nodleprotocol.io (Nodle Portal)
:::danger You must already have a wallet
The instructions below assume that you have either imported or created a wallet already. If not, please refer to the other pages in this wiki.
:::

Simply navigate to [https://nodleprotocol.io/#/accounts](https://nodleprotocol.io/#/accounts).

*Note: We recommend using a Chrome based browser like Chrome or Brave. If you are using Brave (which you should be) please turn off ‘shields’ as it can cause errors.*

### Step 2: Make Sure You are Connecting to The Nodle Chain Mainnet
Sometimes the Wallet will default to another blockchain (As we interoperate with the Polkadot Ecosystem. If So Go to the top left and select the Nodle Network".

![Change Network](/img/docs/nodle-cash/change-network.png)


## Step 3: Go to the extrinsic page
You will have to select `Developer > Extrinsics` in the top bar.
![Extrinsics](/img/docs/nodle-cash/extrinsics.png)

## Step 4: Send the claim transaction
1. Under “submit the following extrinsic” select: `vesting`:
   ![Select Vesting](/img/docs/nodle-cash/select-vesting.png)
2. Under `addVestingSchedule(dest, schedule)` select `claim()`:
   ![Select Claim](/img/docs/nodle-cash/select-claim.png)
3. Click `Submit Transaction` at the bottom right: at this stage you may need to have a bit more Nodle Cash in your account in order to pay for the transaction fee. In order to do this, you could send some Nodle Cash from your Nodle Cash app to your account claiming the tokens, we recommend sending at least 0.01 $NODL.
4. Sign the transaction (for this you will need your password). Now your tokens are unlocked. Please note that only the tokens that have completed the vesting will unlock.
