---
sidebar_position: 7
---

# Appendix

## Appendix 1: NODL Denominations
Much like how the US penny represents a fraction of a US dollar, there are many ways to represent value using Filecoin.  Most fiat currencies have different denominations to be able to be used in small commercial transactions. For instance, the British pound (£) has a smaller denomination, called pence or pennies. There are 100 pence (p) to the pound (£).

In crypto, micro transactions are common and there can be numerous denominations of each token. With NODL, the different denominations follow the International System of Units, which gives us:

| Name | Decimal |
| ----------- | ----------- |
| NODL | 1       |
| milliNODL | 1000        |
| microNODL | 1000000        |
| nanoNODL | 1000000000        |



## Appendix 2: The NODL Token Story

The NODL token has an interesting story as it didn’t start on the Nodle Parachain itself. 
At first, the token was issued on [the Stellar network](http://stellar.org). Stellar is a payment-focused network and was a good way to launch the Nodle Network and start experimenting quickly. Stellar’s unique value proposition was its extremely low fees and inherent simplicity. However, this became a disadvantage when the need to develop advanced on-chain features arose. It was also not the ideal chain to decentralize the Nodle network. Finally the large number of transactions on the Nodle network saturated the Stellar blockchain with about a third of its daily transactions.

It was necessary to find another solution, and this is when the Nodle Chain was created. After countless iterations and prototypes on competing platforms and stacks, the Nodle team decided in 2019 to adopt [the Substrate framework](https://docs.substrate.io/), which arose from Polkadot itself. It took the Nodle team about a year to create its first version of the Nodle Chain: one of the first production blockchains built with Substrate.
 
[The team launched the chain on June 19, 2020](https://nodle.medium.com/nodle-chain-is-live-on-mainnet-dbef8365053f) and migrated the balances of the NODL token holders from Stellar to the solo-chain. Over the following year, the team became more active in the Polkadot ecosystem and continued to iterate on the Nodle Chain itself. Being among the first adopters was not easy, and the team faced various challenges as Substrate was still in its infancy. 

[On October 13, 2021, Polkadot delivered its initial vision](https://polkadot.network/blog/polkadot-is-ready-for-parachains/) and released support for Parachains. Parachains are a unique way to scale, secure, and connect blockchains via the Polkadot network. As early adopters of the ecosystem, the Nodle team wanted the Nodle Chain to become one of the very first parachains to benefit from the high-security provided by the Polkadot chain. However, the fact that there was already a solochain in production made the transition nontrivial.

The team devised a new plan to execute yet another migration. In December 2021 the Nodle team announced the Nodle Crowdloan.
After three months and a competition with the Equilibrium project, the Nodle network won [Polkadot’s 11th Parachain slot](https://medium.com/nodle-io/nodle-wins-the-11th-polkadot-parachain-slot-a906f9906c6f). 

On March 16, 2022, the Nodle Parachain was boarded to the Polkadot network. However, it would have to continue cohabiting with the Nodle Chain in parallel. Indeed, both would be different chains until one migrates to the other. [The transition happened on May 23, 2022](https://medium.com/nodle-io/nodle-parachain-is-live-on-polkadot-e6c53e416b0f), when the migration was executed, and the Nodle Chain deprecated in favor of the Nodle Parachain.

# Appendix 3: Chain Explorer#

You can double check and monitor the evolution of the token supply on [Subscan](https://nodle.subscan.io/tools/charts?type=token_supply), one of the block explorers supporting the Nodle Parachain.

# Appendix 4: Locked tokens#
The locking of tokens (as explained in the section Market Capitalization & Token Supply) has been implemented using the Substrate pallet, the code for which can be accessed here:
https://github.com/NodleCode/chain/tree/master/pallets/grants.

## Appendix 5: Nodle Wallets

Nodle Cash allocations can be tracked on the special well-known account modlpy/alloc. Every newly issued reward is first minted to this account before being sent to the recipient of the reward.
Additionally, reserves held by the protocol and the Nodle company can be found inthe following wallets:
- [5EYCAe5ijiYfha9GzQDgPVtUCYDY9B8ZgcyiANL2L34crMoR](https://nodle.subscan.io/account/5EYCAe5ijiYfha9GzQDgPVtUCYDY9B8ZgcyiANL2L34crMoR)
- [5EYCAe5ijiYfi6GQAEPSHYDwvw4CkyGtPTS52BjLh42GygSv](https://nodle.subscan.io/account/5EYCAe5ijiYfi6GQAEPSHYDwvw4CkyGtPTS52BjLh42GygSv)
- [5EYCAe5ijiYfi6MEfWpZC3nJ38KFZ9EQSFpsj9mgYgTtVNri](https://nodle.subscan.io/account/5EYCAe5ijiYfi6MEfWpZC3nJ38KFZ9EQSFpsj9mgYgTtVNri)

These wallets can be tracked on Subscan.

The reserves are used to sponsor third parties and team members to work on and support the Nodle Network. As detailed in the paper, control of the reserves will be hand-over to the protocol itself once the NODL token is usable for governance purposes. See [Nodle’s public roadmap](https://www.nodle.com/Nodle-Roadmap-2022.pdf) for more details about timelines.
