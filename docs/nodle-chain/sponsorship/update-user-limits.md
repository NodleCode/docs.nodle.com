---
sidebar_position: 10
---

# Update User Limits

Sponsors can modify the reservation and fee limits for a list of users at once. User limits are those a sponsor can set for each user of the pot. This means the user cannot exceed the limit set here even though the pot limits may be higher. 

*Note: If the sponsor wants to reduce their support, it's only possible if there is enough available margin in the corresponding fee or reserve balance.*

To update the user limits, follow these steps. 

## Step 1: Go to [https://nodleprotocol.io/#/accounts](https://nodleprotocol.io/#/accounts)
Select Nodle Mainnet.

![nodleprotocol.io](/img/docs/nodle-cash/nodle-mainnet.png)

## Step 2: Navigate to the Developer tab
Click Extrinsics from the pull-down menu. 
   
## Step 3: Select the *sponsorship* pallet
Select *sponsorship* from the *submit the following extrinsic* menu. 

## Step 4: Then, select the *updateUsersLimits* function 
Select *updateUsersLimits* from the drop-down menu. These limits will be applicable across users of the selected pot. 

## Step 5: Enter the pot ID
Under the pot section, enter the pot ID. By default, it is 0. 

## Step 6: Click Add item
Click inside the AccountId box to select a user account. 

## Step 7: Select multiple users for batch update
Repeat steps 5-6 to select multiple user accounts of the same pot. This way, you can set common reservation and fee limits for multiple users of the same selected pot. 

## Step 8: [Or] Select individual users
Alternatively, to set different fee and reservation limits for each user account of the pot, submit separate transactions for each account by repeating steps 1-6. Continue setting the limits as given in steps 9-10 for each user account. 

## Step 9: Update fee limits
To update or modify the fee limit, enter the new value under *newFeeQuota.*

## Step 9: Update reserve quota limits
To update or modify the reserve quota, enter the new value under *newReserveQuota.*

![Sponsorship](/img/docs/nodle-chain/updateuserlimits.png)

## Step 8: Click Submit Transaction 
Authorize the transaction by entering your password. 

## Step 10: Click Sign and Submit
The fund limits get updated if the submission is successful.  
