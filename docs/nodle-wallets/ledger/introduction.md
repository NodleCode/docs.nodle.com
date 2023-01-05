---
sidebar_position: 1
---

# Introduction

:::caution Ledger Upgrades
The Ledger integration may sometime be out of date with the Nodle Chain depending on when upgrades are released by the Ledger team. If you have any issues, please reach out to the [Ledger support](https://support.ledger.com/hc/en-us/categories/4404369571601?support=true) or raise an issue on [GitHub](https://github.com/Zondax/ledger-nodle).

Alternatively, you could install the application manually (instructions below). However, please note that this is not recommended and you should only proceed if you know what you are doing.
:::


<iframe src="//www.youtube.com/embed/589MVRZSADU" frameBorder="0" allowFullScreen width="100%"></iframe>


## Hardware Support

|Ledger model|Supported|Note|
|-|-|-|
|Nano X|yes|Recommended device.|
|Nano S Plus|yes|Recommended device.|
|Nano S|yes (with limitations)|Due to restricted hardware capabilities the application's feature may be limited.|

## Install the application
Installing the Ledger application on your Ledger hardware wallet is pretty straightforward. Simply navigate to the manager tab of Ledger Live and search for "Nodle". Click "Install" and you are good to go.

![Ledger Installing](/img/docs/ledger.png)

## Installing from source
:::danger This is not recommended, proceed at your own risks
If you'd like to install the application from source, you can find the instructions [here](https://github.com/Zondax/ledger-nodle/blob/main/docs/build.md#download-and-install). Please note that this is not recommended and you should only proceed if you know what you are doing. Installing a version of the integration without going through Ledger Live may lead to unexpected behaviors.

**Nodle and Zondax will not be responsible for any issues that may arise from installing the application from source. You are on your own.**
:::

## Wallet Support
No ledger application is standalone. You need to use a wallet that supports it. You can find below the list of support wallets:
- [Nodle Client](../nodle-client/connection) (recommended)
- [Polkadot JS](../polkadot-js/ledger) (experienced users)