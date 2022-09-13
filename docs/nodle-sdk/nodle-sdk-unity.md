---
sidebar_position: 7
---

# Nodle SDK - Unity

Integrating the Nodle SDK into your Unity app is easy and straightforward. You can use our [NodleSDK Quickstart application](https://github.com/NodleCode/nodlesdk-unity) or just follow the steps below and you should be ready to go in no time.

## Step 1: Generate Developer Key
- Go and [Create a Web Wallet](nodle-wallets/polkadot-js/how-to-create-a-nodle-cash-wallet.md)
- Make sure you save your private key!
- Copy your ```public_key``` from the extension
- Proceed forward with next steps.

## Step 2: Setup Developer environments
Please make sure to follow our [Android SDK](nodle-sdk-android-integration.md) and [iOS SDK](nodle-sdk-ios-integration.md) and configure your environement based on the requirements there.

## Step 3: Create Unity application
You can follow the steps to create a new project or skip below to just importing the plugin depending on your platform.

### Creating a new project - Android
Please start by creating a new project Android in **Unity Hub** it is not required to use that template you can create a blank or 3D or other.

![NodleSDK Unity1](/img/docs/nodle-sdk/unity-android-step1.png)

After you have created the project you should see the following:

![NodleSDK Unity2](/img/docs/nodle-sdk/unity-android-step2.png)

Then proceed to switch the platform to Android go to **File->Build Settings** and select **Android**:

![NodleSDK Unity3](/img/docs/nodle-sdk/unity-android-step3.png)

Next go ahead and click **Switch platform**. After switching you can go to next step to import the plugin.


### Creating a new project - iOS
Please start by creating a new project iOS in **Unity Hub** it is not required to use that template you can create a blank or 3D or other.

![NodleSDK Unity4](/img/docs/nodle-sdk/unity-ios-step1.png)

After you have created the project you should see the following:

![NodleSDK Unity5](/img/docs/nodle-sdk/unity-android-step2.png)

Then proceed to switch the platform to Android go to **File->Build Settings** and select **iOS**:

![NodleSDK Unity6](/img/docs/nodle-sdk/unity-ios-step3.png)

Next go ahead and click **Switch platform**. After switching you can go to next step to import the plugin.

## Step 4: Updating Player Settings
You have to update your player settings for **Android/iOS** before you import the plugin. Example:

![Unity Plugin](/img/docs/nodle-sdk/player.png)

## Step 5: Import the Nodle Unity Plugin into your application
You can follow the steps to import the Nodle plugin depending on your platform into your application

### Import the Nodle package - Android
Start by selecting from **Assets->Import Package-> Custom Package** and then select the **Nodle SDK package**

![NodleSDK Unity7](/img/docs/nodle-sdk/unity-android-step4.png)

After please go ahead and import everything from the package. We recommend to import the **Sample Scene** too. 

![NodleSDK Unity8](/img/docs/nodle-sdk/unity-android-step5.png)

Import the TMP Essentials. If there is a problem with the buttons please close and open the project there is a bug on Unity side.

![NodleSDK Unity9](/img/docs/nodle-sdk/unity-android-step6.png)

Open the Sample Scene: **Assets/Plugins/Nodle/SampleScene/SampleScene.unity**

![NodleSDK Unity10](/img/docs/nodle-sdk/unity-android-step7.png)

Next select the **Main Camera** object and in the inspector place your ```public_key``` with the following format: ```ss58:public_key```

![NodleSDK Unity11](/img/docs/nodle-sdk/unity-android-step8.png)

Then go to **Build Settings** If you scene didn't appear, click on the **Add Open Scenes**, and place it as 0 (Drag the scene name to the top of the list). Build and Run!

![NodleSDK Unity12](/img/docs/nodle-sdk/unity-android-step9.png)

**And there you have it! You’re good to go!** You can setup your **Player Settings** details from your application and run the **NodleSDK**

### Import the Nodle package - iOS
Start by selecting from **Assets->Import Package-> Custom Package** and then select the **Nodle SDK package**

![NodleSDK Unity13](/img/docs/nodle-sdk/unity-android-step4.png)

After please go ahead and import everything from the package. We recommend to import the **Sample Scene** too. 

![NodleSDK Unity14](/img/docs/nodle-sdk/unity-android-step5.png)

Next open the **Sample Scene** located under **Assets -> Plugins -> Nodle -> Sample Scene**

![NodleSDK Unity15](/img/docs/nodle-sdk/unity-ios-step4.png)

Import the TMP Essentials. If there is a problem with the buttons please close and open the project there is a bug on Unity side.

![NodleSDK Unity16](/img/docs/nodle-sdk/unity-android-step6.png)

Next select the **Main Camera** object and in the inspector place your ```public_key``` with the following format: ```ss58:public_key```

![NodleSDK Unity17](/img/docs/nodle-sdk/unity-android-step8.png)

Then go to **Build Settings** If you scene didn't appear, click on the **Add Open Scenes**, and place it as 0 (Drag the scene name to the top of the list). Build the project!

![NodleSDK Unity18](/img/docs/nodle-sdk/unity-ios-step5.png)

After making the build into a build folder. Copy the **Podile** from **Plugins -> Nodle -> iOS -> NodleIOSPlugin -> XCodeFiles** to the root of that build folder. Then open the build folder location in terminal and install the NodleSDK with the following command: ``pod install`` You can go ahead and use the generated **.workspace** file from now on to run the project! Please make sure to add all permissions to your ```Info.plist``` before running the application. You can find how to do that here: [NodleSDK Permissions](nodle-sdk-ios-integration#step-5-request-permissions)

***Note: there is no need to build more folders after the first build since all changes will remain even if you build again in the same location.*** **And there you have it! You’re good to go!** 

## Want to check your SDK rewards?
Currently we have our dashboard **under development** and rewards are not available. If you want see your rewards please go to our [Nodle Subscan](https://nodle.subscan.io/) please follow the steps:

- copy your ```public_key``` and paste it in the search bar
- slide down the page after it loads and head to allocations
- you should see you rewards which are allocated every 2 hours

![Unity Rewards](/img/docs/nodle-sdk/rewards.png)

That's it you should see your rewards. Make sure to add all permissions to the SDK in order to see your rewards. We have a lot of traffic so please bear with us since rewards might take a bit of time. But if you allow all the rules in SDK you should see the packets coming to the dashboard. Then rewards should be visible.

