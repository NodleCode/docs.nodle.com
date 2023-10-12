---
sidebar_position: 11
---

# Remove Users From a Pot

Sponsors can remove users who have fulfilled all their obligations on the network. For instance, if a user has created an NFT collection, the funds set aside for that collection should stay reserved. Such a user cannot be removed until they delete the collection. 

To remove users from a pot, follow these steps. 

## Step 1: Go to [https://nodleprotocol.io/#/accounts](https://nodleprotocol.io/#/accounts)
Select Nodle Mainnet.

![nodleprotocol.io](/img/docs/nodle-cash/nodle-mainnet.png)

## Step 2: Navigate to the Developer tab
Click Extrinsics from the pull-down menu. 
   
## Step 3: Select the *sponsorship* pallet
Select *sponsorship* from the *submit the following extrinsic* menu. 

## Step 4: Then, select the *removeUsers* function 
Select *removeUsers* from the drop-down menu. Under the pot section, enter the pot ID under which you want to delete users. By default, it is 0. 

## Step 5: Click Add item
Click inside the *AccountId* box to select a user account for deletion. Alternatively, if you know the account IDs, enter those in the box.  

*Repeat this step to select multiple users for batch deletion.*  

![Sponsorship](/img/docs/nodle-chain/removeuser.png)

## Step 6: Click Submit Transaction 
Authorize the transaction by entering your password.  

## Step 7: Click Sign and Submit
Once the transaction is successful, the users are removed from the selected pot. 
