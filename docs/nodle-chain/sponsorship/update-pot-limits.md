---
sidebar_position: 9
---

# Update Pot Limits

Only sponsors can change the spending limits for their funds and users, but they can't go below the amount their users have already spent (let's call it X). So if a user has used up X amount of their limit (L) for transaction fees, the sponsor can't set the limit lower than X. At that point, the user will have L - X left to spend. 
The sponsor can reduce the limit all the way down to X, in which case the user won't have any funds left. This same rule applies to borrowed funds given to the user for the reserve. 

:::note

If the sponsor wants to reduce their support, it's only possible if there is enough available margin in the corresponding fee or reserve balance.

:::

To update the pot limits, follow these steps. 

## Step 1: Go to [https://nodleprotocol.io/#/accounts](https://nodleprotocol.io/#/accounts)
Select Nodle Mainnet.

![nodleprotocol.io](/img/docs/nodle-cash/nodle-mainnet.png)

## Step 2: Navigate to the Developer tab
Click Extrinsics from the pull-down menu. 
   
## Step 3: Select the *sponsorship* pallet
Select *sponsorship* from the *submit the following extrinsic* menu. 

## Step 4: Then, select the *updatePotLimits* function 
Select *updatePotLimits* from the drop-down menu. The pot limits are applicable for the entire pot and across users of the pot. 

## Step 5: Enter the pot ID
Under the pot section, enter the pot ID for which you want to update or modify the limits. By default, it is 0. 

## Step 6: Update the fee limit
Enter the new value under *newFeeQuota*. This is for modifying the transaction fee limit.  

## Step 7: Update the reserve quota limit
Enter the new value under *newReserveQuota*. This is for modifying the reserve quota fee limit.  

 ![Sponsorship](/img/docs/nodle-chain/updatelimit.png)

## Step 8: Click Submit Transaction 
Authorize the transaction by entering your password. 

## Step 9: Click Sign and Submit 
The fund limits get updated if the submission is successful.  
