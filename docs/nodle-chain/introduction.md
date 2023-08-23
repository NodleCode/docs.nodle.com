---
sidebar_position: 1
---

# The Nodle Parachain
The Nodle Chain is [Polkadot's 11th Parachain](https://wiki.polkadot.network/docs/learn-parachains) powering the Nodle Network. It is used to settle network incentives and contracts in the form of [Nodle Cash ($NODL)](nodl), as well as run some upcoming decentralized applications building atop the Network. It is built with the [Parity Substrate](https://substrate.io/) framework is available under an [open source license](https://github.com/NodleCode/chain).

Due to its permissionless nature, anybody can [run a Nodle Chain full-node](run-a-node) in order to help make it available and distribute its state. In order to further increase its decentralization and security, it will soon be possible to [run a collator node](become-a-collator). Token holders of Nodle Cash will also be able to use their holdings in order to participate in the governance of the Nodle Chain, and thus assume its decentralized ownership.

## Useful Links
- [Block Explorer](https://nodle.subscan.io/)
- [Polkadot JS](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fnodle-parachain.api.onfinality.io%2Fpublic-ws#/explorer)

## Update on the Nodle Parachain Upgrade Issue

On August 21st, 2023 at approximately 4pm PDT, the Nodle Parachain Governance approved and released a previously tested upgrade on the Network. This upgrade was thoroughly tested for over a month without major failures on the Nodle testnet on Rococo. An hour later, when the upgrade was scheduled to be executed, the block production halted.

Despite multiple attempts at recovery with Parity’s support, it is not possible to resume the block production without assistance from the relay-chain. As a result, we have no other option but to request Polkadot Governance’s assistance in helping restore the Nodle Parachain’s services to Nodle users, token holders and the Polkadot ecosystem.

### Identified Issues
We quickly identified the core issue related to the migration code of the upgrade in deployment. Migrations are used to adjust runtime configurations on the fly during upgrades. In this case, the migration was set to prepare the Nodle Parachain for the upcoming Intrinsic NFTs feature.

The move_pallet function in the migration code is used to move the state from one pallet to another. The implementation of the move_pallet function relies on looping over all storage items, which means the migration takes more time if there is more data to migrate over, which means the migration may take longer than what is allowed for Parachains on Polkadot.
If we check the current state to be migrated on the Nodle Parachain, we can see that there are 47,499 NFTs spread across 5,757 NFT Collections registered on the Nodle Parachain!

This lead to the collators needing over 5 seconds to produce a block, which is an order of magnitude over the 750 milli-seconds enforced by the Polkadot relay-chain. The team tried various patches with the assistance of Parity and used the fastest server available on Google Cloud Platform, unfortunately this only reduced the time to produce a block from 5 seconds to 1.5 seconds, which is still too long.
Furthermore, the Proof of Validity size for the block containing the necessary migration steps is approximately 6MB. This size exceeds the relay-chain’s 5MB limit, making it impossible for the Nodle Parachain to execute its upgrade.

### How Upgrades are Tested at Nodle
There are frequent updates to the Nodle parachain and to ensure their smooth deployment, a thorough process is followed before their proposal on the Nodle Parachain. This process includes the steps below:
1. We run every upgrade through try-runtime as part of our CI/CD process (try-runtime tests the runtime upgrades on a snapshot of the production parachain). For this particular upgrade, no errors or particular warnings were triggered and as such we assumed our migration would work just fine.
2. Upgrades are then deployed on our testnet running on the Rococo relay-chain which is another way we test migrations and potential block production issues.
3. Once an upgrade is deployed on the testnet, a serie of both manual and automated tests are performed to ensure full compatibility with the Nodle App, Nodle SDK, and Web Client.
As seen above, it is clear some additional tooling is necessary to detect potentially problematic migrations when doing runtime upgrades. We will investigate whether it is possible to develop such tooling and open source it to the Polkadot community to further support the ecosystem.

### The Solution
The Nodle team is preparing a proposal for the Polkadot relay chain to ensure block production can be resumed. This proposal may take up to 28 days to be fully executed and take action, however it is our understanding it can be expedited with sufficient support from the community.
We will share additional details as they become available.

### What’s Next ?
Going forward, the Nodle team is focused on:
1. Communicating regularly: to its partners, exchanges, builders and its active community about the evolution of the situation.
2. Future proofing: by open sourcing new tooling to detect such issues or looking for existing solutions.
3. Educating the ecosystem: we will suggest some changes to the Substrate documentation to clarify the risks of using move_pallet. If possible, we would like to investigate whether try-runtime can be extended to provide higher level guarantees as to the safety of runtime upgrades.
4. Brainstorming with the community: it would be interesting to investigate whether better failsafe and fallback systems could be contributed to Polkadot. For instance, it could have been better for all the implicated parties to auto-cancel the runtime upgrade after its failure.
