---
sidebar_position: 13
---

# Conducting Transactions Using Sponsorship Funds
You can use your own wallet (even if you don’t have enough tokens in it) to interact with the blockchain, and there's no need for a middleman. How is this possible? Through the concept of sponsorship. 

Sponsors provide the necessary tokens and decide what transactions they want to support for you, as a user. They also register users so that they can interact directly with the blockchain. You, as a user, can use these tokens to perform the transactions that the sponsor has specified. 

However, they can't control what you do. This is crucial for applications that need proof of actions on the blockchain, such as owning digital assets with rights. Even if a sponsor stops, there's always a record showing which proxy account belongs to which user, and users can prove it by showing they own their wallet.


## What actions can you perform using the sponsorship feature?
The sponsorship feature uses a function called “sponsorFor()”  to enable users to interact with the network. This function draws the tokens from the sponsor’s fund to run transactions. Through this, you can perform any safe transaction that the sponsor has specified for you.

However, you cannot execute transactions that allow funds to leak from your proxy account. For example, you cannot transfer funds to other accounts even if the sponsorship type enables “balances” transactions. 

:::note

Remember, you must be a registered user of the fund pot, created by the sponsor.  


:::
