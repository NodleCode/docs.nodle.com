---
sidebar_position: 2
---

# Nodle token usage

## A Utility Token

NODL is a utility token. NODL represents a quantification of the utility provided by edge nodes to network users. This utility will be an evolving notion as both technical capabilities are shared by the edge nodes (for example, in case of a smartphone: sharing bandwidth and computation capability) and the nature of devices connected through those edge nodes. 

At inception, the main utility shared through the network is connectivity for smart devices. As such, NODL can be seen as first as a quantification of the value of the bandwidth, and the value of renting the computing, storage, and bluetooth capability of the smartphone.

The NODL token is then used to reward Nodle network participants, to allow consumers to use the services provided by the network, and to exchange value between users through transfer.

In the first phase, participants are mainly rewarded through minting of the token. This minting or issuance phase is detailed in “The Token Issuance” section of this document. In a second phase, participants will be directly rewarded for reaping bounties attached to smart missions ordered by entities intending to leverage the network for their own use cases. The rewards collected through bounties will gradually outstrip rewards from the issuance, as demand for services built on top of the network strengthen.

In the mid-term, i.e. before the end of 2023, it is expected that the NODL token will take two new roles: governance and staking.

## A Governance Token

NODL token holders will be able to use their tokens to vote on significant changes to the Nodle Parachain, such as system-wide upgrades, protocol changes, or new features. The voting protocols and overall governance system are still to be defined.

## A Staking Token

The Nodle Parachain is secured through a delegated Proof of Stake consensus mechanism on Polkadot’s shared security model. Good actors are rewarded by this mechanism with yield, while bad actors lose some of their stake through slashing.

Third parties such as token holders or businesses will be able to run a “collator node” (sometimes mistakenly called a validator node), provided they satisfy minimum staking requirements. The Nodle Parachain will then choose the top collators and allow them to produce blocks for it. Collators will share a pool of rewards sourced from protocol and transaction fees; rewards will be dispatched based on how valuable each collator has been (i.e. how many blocks they produce). If a collator misbehaves or does not satisfy its minimum service requirements (for instance, it was offline when it was supposed to be producing blocks), it will be slashed and lose some of its staked NODL.

Token holders will also be able to delegate their tokens to support other collators. In such cases, rewards and slashes will be applied to the delegators on the pro-rata of their stake.
