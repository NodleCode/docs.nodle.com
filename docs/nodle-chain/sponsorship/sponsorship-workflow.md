---
sidebar_position: 6
---

# Sponsoring Transactions - Workflow
Our solution is based on a system called Free Signed Transactions. In this method, sponsors register user accounts they're willing to sponsor.
Each user gets their unique proxy account created in a "pot," and they can have different proxy accounts in different pots. 
If users aren't registered, they can't create NFTs or use other applications. Each user account has set limits on how much they can spend and the transaction fees they can incur, preventing any misuse.
Once their accounts are registered, these users can connect directly to the blockchain, ensuring security and avoiding censorship. 
A validity check is built in to catch invalid transactions early, like actions from unregistered users or users who've used up their sponsorship quota, before any fees are incurred.

**Note: Transactions are free for registered users in a pot, but sponsors cover the transaction fees.
 
## What types of funds can be sponsored?
A sponsor can define the following types of funds to be allocated to each user:
- Transaction fee: Fees for all transactions done on the chain
- Reservation fee: Tokens reserved for creating NFTs or other apps on the chain, which require a deposit. 

In both cases, the limits defined cannot be exceeded by users. 

## What types of transactions can be sponsored?
Sponsors can decide on the types or categories of transactions they permit. This can be broad, like `AnySafe`, or more specific, such as `NFTs`, or even narrower, like `NFTMinting`. A "safe" transaction means it doesn't go beyond the allowed sponsorship parameters.
For instance, if a user is allowed to make NFT and Utility calls but not Balances transactions, they could potentially conceal a Balances "transfer" within a Utility call. 
That's why it's important to define "AnySafe" properly during runtime. That is, Utility or Proxy calls must be excluded from the “AnySafe” transaction type. 

The transaction categories that are currently supported include:
- AnySafe: For any safe transaction on the Nodle Network
- Unique: For creating or minting NFTs
If required, more transaction categories can be added by creating pull requests on the Nodle chain repositories on GitHub.  

**Note: Different categories of  transactions that the sponsor can select for their pot are not configurable at runtime. Instead, they are predefined so that the sponsors can select them during configuration. 
