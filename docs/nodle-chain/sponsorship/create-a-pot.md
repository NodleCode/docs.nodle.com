---
sidebar_position: 7
---

# Create a Pot With Funds

Sponsors can create pots with funds and register users to use the funds in the pot. Here, the pot is virtual and only represents usage limits. These funds remain liquid and usable at all times. However, the transactions may fail if a sponsor’s wallet doesn’t have the actual funds. 

To create a pot with funds, follow these steps. 

## Step 1: Go to [https://nodleprotocol.io/#/accounts](https://nodleprotocol.io/#/accounts)
Select Nodle Mainnet.

![nodleprotocol.io](/img/docs/nodle-cash/nodle-mainnet.png)

## Step 2: Navigate to the Developer tab
Click Extrinsics from the pull-down menu. 
   
## Step 3: Select the sponsorship pallet
Select *sponsorship* from the *submit the following extrinsic* menu. The createPot option is displayed at the top. 

 ![Sponsorship](/img/docs/nodle-chain/sponsor1.png)

## Step 4: Enter a unique pot ID
The default is 0. Enter whole numbers only. 

## Step 5: Select the sponsorship type
For example, AnySafe for any safe transactions on the chain, Unique for NFTs. Some categories can be further broken down into specific ones, such as NFTMinting. 

## Step 6: Set the limit for the fee quota 
Set the limit for the fee quota as shown in the above image. This fee quota is for any transaction fee incurred. Enter a big number (preferably, greater than or equal to 11 digits) in integers, no fractions. 

## Step 7: Next, set the reserve quota
Again enter a whole number without fractions or decimals (11 digits or more). This amount is used for any reserves or deposits (such as the ones required by NFTs). 

## Step 8: Click Submit Transaction 
Enter your accoount password and authorize the transaction as shown below.  

   ![Sponsorship](/img/docs/nodle-chain/sponsor2.png)

## Step 9: Click Sign and Submit 
Once the transaction is successful, the pot is created with the defined reservation and fee limits.
