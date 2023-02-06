---
sidebar_position: 10
---

# The Nodle SDK dashboard

## Getting started

### Login

Go to [SDK Website](https://sdk.nodle.com/) and sign in using your email. Right after, you should receive an email containing a magic link that will redirect you to your dashboard : _(Don't forget to check your spam folder)_

![LoginEmail](/img/docs/nodle-dashboard/sdk_login_email.jpg)

**Note**: Please note that the magic link's URL will always look like `https://iot.nodle.com/?token=******` or `https://sdk.nodle.com/?token=******`, every other link format should be considered as phishing.

### Create your organization

After clicking the magic link, you will be redirected to a page where you have to select your **organization** (aka **team**). Unless you have been invited by a team member, this list will be empty if you log in for the first time. Please create a new team.

You are able to create multiple teams in order to organize your SDK/Nodle Cash application oversight in a way that suits you. (this shouldn’t be necessary unless you have separate teams managing separate fleets of devices ; otherwise you will be able to handle several fleets within the same team)

### Data addendum and GDPR

The Nodle network is fully compliant with the GDPR. As a future partner in the Nodle network, you must add the proper regulatory warnings and informations for your users. The data addendum explains these requirements and shares examples of elements for you to add to your own privacy policy. You need to acknowlede these terms before moving forward. As part of the onboarding process, members of the Nodle team will manually review your mobile application as it relates to privacy requirements

### Create a wallet

Once your team has been created and that you agreed to the data addendum, you will be able to use the dasboard.

If this is your first time using it, a pop-up window will appear asking you to link a [**Polkadot** wallet](https://wiki.polkadot.network/docs/build-wallets) to your account. You can either follow the instructions displayed in the modal or refresh the page and do it later. 

![LinkWallet](/img/docs/nodle-dashboard/sdk_link_wallet_popup.jpg)

**Note**: Currently, the **only way** to link a wallet to your Nodle account is by using the official [**Polkadot** JS extension](https://polkadot.js.org/extension/), so please be sure to have it installed.

There should be three differents cases :

1. **You don't have any Polkadot wallet at the moment**

First, you will need to [create a wallet](https://docs.nodle.com/docs/nodle-wallets/polkadot-js/how-to-create-a-nodle-cash-wallet) and right after, either follow the instructions in the first login modal or go the [wallets page](https://sdk.nodle.com/dashboard/wallet) and use the `Add new wallet` button.

2. **You already have a Polkadot wallet linked to the Polkadot extenstion**

Go the [wallets page](https://sdk.nodle.com/dashboard/wallet) and use the `Add new wallet` button.

3. **You already have a Polkadot wallet that is not yet linked to the extension**

For example, if you want to use your Nodle Cash's wallet, you will need to add it to the **Polkadot** extenstion using its [restore feature](https://support.polkadot.network/support/solutions/articles/65000169952-how-to-restore-your-account-in-polkadot-js-and-the-polkadot-js-browser-plugin). You can find your mnemonic phrase directly inside the settings of your Nodle Cash application.

Once this is done, go the [wallets page](https://sdk.nodle.com/dashboard/wallet) and use the `Add new wallet` button.

### Link your wallet

If you managed to add your wallet, you should something like this (with your own wallets name and addresses) :

![SelectWallet](/img/docs/nodle-dashboard/sdk_select_wallet.jpg)

Pick the wallet you want to link to your Nodle account and click `Done`.

![SdkVerify1](/img/docs/nodle-dashboard/sdk_verify.jpg)

You will now have to sign a test transaction in order to validate that you are the owner of the wallet. Once you click the `Verify` button, the status of the signing change to `waiting for verification`.

![SdkVerify2](/img/docs/nodle-dashboard/sdk_verify_2.jpg)

During this time, a pop-up from **Polkadot** JS extension will be shown, asking you to sign a transaction.

![SdkSigning](/img/docs/nodle-dashboard/sdk_sign.jpg)

After doing it, the pop up will disappear and a success message should be displayed :

![SdkVerify3](/img/docs/nodle-dashboard/sdk_verify_3.jpg)

**Congratulations**! You are now all set to use the SDK dashboard.