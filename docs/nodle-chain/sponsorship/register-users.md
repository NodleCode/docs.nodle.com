---
sidebar_position: 8
---

# Register Users for the Pot

Once the sponsors create a pot with the quotas, they can go ahead and register users for the pot. So, only these registered users will be able to use the sponsor’s reserve funds for carrying out their transactions on the chain. Any non-registered user will not be able to use the sponsorship quota. 
Note that these users need not have any funds of their own as they are going to borrow from the sponsor’s funds. 
 

To register these users, follow these steps. 

## Step 1: Go to [https://nodleprotocol.io/#/accounts](https://nodleprotocol.io/#/accounts)
Select Nodle Mainnet.

![nodleprotocol.io](/img/docs/nodle-cash/nodle-mainnet.png)

## Step 2: Navigate to the Developer tab
Click Extrinsics from the pull-down menu. 
   
## Step 3: Select the *sponsorship* pallet
Select *sponsorship* from the *submit the following extrinsic* menu. 

## Step 4: Then, select *registerUsers* function 
Select *registerUsers* function from the drop-down menu. Under the pot section, enter the pot ID for which you want to register users. By default, it is 0. 

 ![Sponsorship](/img/docs/nodle-chain/registeruser1.png)

## Step 5: Click Add item
Select a user account to register from the AccountId box by clicking on it. Alternatively, if you know the account IDs, enter those in the box. 

![nodleprotocol.io](/img/docs/nodle-cash/registeruser2a.png)

![nodleprotocol.io](/img/docs/nodle-cash/registeruser2b.png)

## Step 6: Enter the common fee quota and reserve quota limits
Enter whole numbers only. 

*Note: These will be applicable to all the users of the pot.*

## Step 7: Add other users as required
To add multiple users for the selected pot, repeat steps 5-6.  

## Step 8: Click Submit Transaction 
Authorize the transaction as shown below.  

## Step 9: Enter your account password 

 ![Sponsorship](/img/docs/nodle-chain/registeruser-submit.png)

## Step 10: Click Sign and Submit. 
Your users are now registered and ready for carrying out transactions on the chain.
