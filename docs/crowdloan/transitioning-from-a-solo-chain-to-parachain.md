---
sidebar_position: 5
---

# Transition from Solochain to Parachain

Once Nodle gets a parachain slot, the network will need to migrate from the current solo-chain to the para-chain. The process will assume that the Nodle team is trusted to migrate the data between both chains, although it is completely verifiable by any third party.

## Timeline
1. Nodle wins a parachain slot
2. Nodle Parachain is onboarded by the relay chain
3. Validators pre-sync their collator nodes on the new parachain
4. Token transfers and rewards are halted
5. Accounts, balances and miscellaneous data is copied from the solo-chain to the parachain by a script developed by the Nodle team, Nodle holds a "sudo" key on the parachain to perform this action
6. Token transfers and rewards are restarted on the parachain
7. Staking is restarted on the parachain
8. Third-party collators start producing blocks
9. Nodle uses a sudo operation to deploy a new chain upgrade that disables the sudo key