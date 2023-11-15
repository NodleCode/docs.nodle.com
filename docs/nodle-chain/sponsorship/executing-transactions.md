---
sidebar_position: 14
---

# Executing Transactions on the Network

When you execute the sponsorFor() function, the:

- Transaction is sent to the chain
- Fee is deducted from the sponsor's account 
- User's proxy account is set as the source of the transaction before the transaction actually happens 

Ensure you are a registered user of the selected pot before using the sponsor’s funds and also make sure you are using the funds for the specified transaction type only. 

You can execute your transactions on the network by following these steps:


## Step 1: Go to [https://nodleprotocol.io/#/accounts](https://nodleprotocol.io/#/accounts)
Select Nodle Mainnet.

![nodleprotocol.io](/img/docs/nodle-cash/nodle-mainnet.png)

## Step 2: Navigate to the Developer tab
Click Extrinsics from the pull-down menu. 
   
## Step 3: Select the *sponsorship* pallet
Select *sponsorship* from the *submit the following extrinsic* menu. 

## Step 4: Then, select users  
Select users() function from the drop-down menu. 

## Step 5: Select the pot
Enter the pot ID. By default, it is 0. This is the pot that the sponsor signed you up for.

 ![Sponsorship](/img/docs/nodle-chain/registeruser1.png)

## Step 6: Next, select the required function 
From the system menu, select the function you want. For example, *remark* from the system pallet.

## Step 7: Enter the remark as required
Enter the remark you want for the transaction in the box below (highlighted in red).

![Sponsorship](/img/docs/nodle-chain/registeruser2b.png)

## Step 8: Click Submit Transaction 
Authorize the transaction by entering your account password. 

## Step 9: Click Sign and Submit 
Once done, the transaction is successfully submitted.

