---
sidebar_position: 7
---

# iOS SDK - Troubleshooting 
In this page we will try to explain some of the most common issues that are on iOS. And give you some ways to help you solve issues that you may experience during your SDK integration

## 1: Common Issues - Troubleshooting
In this section we will explain how you can tackle most common issues in general. 

- Please make sure to follow all steps carefully and have done all that's requested from you for the integration  
- Make sure you are using Swift and not ObjC since we currently don't have support for that but it's planned.
- Make sure you have selected the right version of the SDK with CoreBluetooth or without depending on your usage.
- Make sure you have your public key in the following format ss58:public_key 
- Make sure you have all permissions in your iOS plist file and you are requesting them at runtime. 
- Make sure you have initialized the NodleSDK 
- Make sure to start the NodleSDK
- You are good to go forward. 

If you are still having issues proceed with the next steps below.

## 2: Bluetooth - Troubleshooting
In this section we will explain how you can tackle most common issues with Bluetooth. 

- Please disable your Bluetooth, Wifi, Mobile Data and proceed to next step. You can put the phone in Airplane mode.
- Go to your phone Settings-> Bluetooth and clear and remove devices the cache and data for the system application. 
- After you have done the above. Please restart your phone. If you still having Bluetooth related problems contact Apple or update your software that might help.

If you are still having Bluetooth issues please try with another phone. 

## 3: Location - Troubleshooting
In this section we will explain how you can tackle most common issues with Location. 

- First make sure you have Location enabled on your phone then proceed to next step. 
- Second make sure you followed all steps on our documentation for the integration and you are requesting all the permissions in your plist. 
- Third make sure you are requesting all runtime permissions for the user and that you have them given permissions to be used. You can verify that on the next step. 
- Go to your phone Settings-> Privacy -> Your Application and make sure you have Location permission enabled and either usage Always or While in Use.
- If you are still having issues please disable your Location, Wifi, Mobile Data and proceed to next step. 
- After you have done the above. Please restart your phone. If you still having Location related problems contact Apple or update your software that might help. 

Please make sure you actually requesting and given permissions at build and runtime and yor are respecting the delegates. If you are still having Location issues please try with another phone.

## 4: Network - Troubleshooting
In this section we will explain how you can tackle most common issues with Network. 

- First make sure you have Wifi or Mobile Data enabled if you use them on your phone then proceed to next step. We need either to be able to process data in our SDK. 
- Second make sure you have internet connection while your icon might say you do that's not for sure. You would have to make sure your connection is not too weak or not available right now. To verify that you can use SpeedTest utility or you could get some data from your Wifi / Mobile Data on your phone. Our SDK will still keep any generated data on your phone until you have connection so you aren't missing out. 
- If you are having issues with either Wifi or Mobile Data follow the steps below. 
- Go to your phone Settings-> Wifi / Mobile Data and make sure you have them enabled. If you have them enabled but no connection. Please follow the step below.
- Go ahead and disable your Wifi, Mobile Data and proceed to next step. 
- After you have done the above. Please restart your phone. If you still having Internet related problems contact Apple or update your software that might help.
- After you have all the above tackled and you have internet connection you can proceed forward. 
- Another problem might be if you are using a VPN please make sure you have the correct VPN settings and you have proper connection to outside servers and you can reach our website https://www.nodle.com/

If you are still having issues make sure to try without a VPN connection since some of them aren't really working as needed or have issues. If you are done with all the above proceed forward with next steps. 

## 5: Podfile - Troubleshooting
In this section we will explain how you can tackle most common issues with Podfile. 

- Make sure you have the latest version of Cocoapods installed and you aren't using a older version. Each version have different scripts inside and perform different dependency management and project structure is different. We aim to be on the latest always.
- First make sure you follow each of the steps in our documentation and you aren't skipping anything. 
- Second make sure you generate the podfile correctly and when you are updating to remove .lock file as well as the workspace that's generated. Then perform pod install which will generate a clear workspace for your project. 
- Third make sure to clear Cocoapods cache since they have a lot of local and remote issues but are a valid option for dependency management. 
- Make sure you are on the latest version of the SDK. You can see that from documentation page. You should always aim to be on the latest for best performance and issues that are cleared with the latest build.

After all the above are done and you are still facing issues please reach out to us or the Cocoapods team. 