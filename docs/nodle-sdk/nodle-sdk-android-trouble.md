---
sidebar_position: 3
---

# Android SDK - Troubleshooting 
In this page we will try to explain some of the most common issues that are on Android. And give you some ways to help you solve issues that you may experience during your SDK integration

## 1: Common Issues - Troubleshooting
In this section we will explain how you can tackle most common issues in general. 

- Please make sure to follow all steps carefully and have done all that's requested from you for the integration  
- Make sure you have selected the right version of the SDK with Google Play services or without depending on your usage.
- Make sure you have your public key in the following format ss58:public_key 
- Make sure you have all permissions in your Android manifest file and you have added your application class inside the android tag. 
- Make sure you have initialized the NodleSDK 
- Make sure to start the NodleSDK
- You are good to go forward. 

If you are still having issues proceed with the next steps below.

## 2: Bluetooth - Troubleshooting
In this section we will explain how you can tackle most common issues with Bluetooth. 

- Please disable your Bluetooth, Wifi, Mobile Data and proceed to next step. 
- Go to your phone Settings-> Apps -> Bluetooth and clear the cache and data for the system application. Some manufacturers hide that so you might need to enable to find it.
- After you have done the above. Please restart your phone. If you still having Bluetooth related problems contact your manufacturers or update your software that might help.

If you are still having Bluetooth issues please try with another phone from a different manufacturer. 

## 3: Location - Troubleshooting
In this section we will explain how you can tackle most common issues with Location. 

- First make sure you have Location enabled on your phone then proceed to next step. 
- Second make sure you followed all steps on our documentation for the integration and you are requesting all the permissions in your Manifest. 
- Third make sure you are requesting all runtime permissions for the user and that you have them given permissions to be used. You can verify that on the next step. 
- Go to your phone Settings-> Apps -> Your Application and make sure you have Location permission enabled and either usage Always or While in Use.
- If you are still having issues please disable your Location, Wifi, Mobile Data and proceed to next step. 
- After you have done the above. Please restart your phone. If you still having Location related problems contact your manufacturers or update your software that might help. 

Please make sure you are using the right version of the SDK depending if you are using Google Play Location Services or you don't you have to chose the right version. If you are still having Location issues please try with another phone from a different manufacturer. 

## 4: Network - Troubleshooting
In this section we will explain how you can tackle most common issues with Network. 

- First make sure you have Wifi or Mobile Data enabled if you use them on your phone then proceed to next step. We need either to be able to process data in our SDK. 
- Second make sure you have internet connection while your icon might say you do that's not for sure. You would have to make sure your connection is not too weak or not available right now. To verify that you can use SpeedTest utility or you could get some data from your Wifi / Mobile Data on your phone. Our SDK will still keep any generated data on your phone until you have connection so you aren't missing out. 
- If you are having issues with either Wifi or Mobile Data follow the steps below. 
- Go to your phone Settings-> Wifi / Mobile Data and make sure you have them enabled. If you have them enabled but no connection. Please follow the step below.
- Go ahead and disable your Wifi, Mobile Data and proceed to next step. 
- After you have done the above. Please restart your phone. If you still having Internet related problems contact your manufacturers or update your software that might help.
- After you have all the above tackled and you have internet connection you can proceed forward. 
- You could be facing issues with out security layers in which you would need to make sure you aren't using custom certificates and trust anchors for the system or user. We would advice to try the following code for your **network_security_config.xml** depending on your needs:
```
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true">
        <trust-anchors>
            <certificates src="system" />
            <certificates src="user" />
        </trust-anchors>
    </base-config>
</network-security-config>

<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="false">
        <trust-anchors>
            <certificates src="system" />
            <certificates src="user" />
        </trust-anchors>
    </base-config>
</network-security-config>
```
And update the following setup in your **AndroidManifest.xml**:
```
android:networkSecurityConfig="@xml/network_security_config"
```
- Another problem might be if you are using a VPN please make sure you have the correct VPN settings and you have proper connection to outside servers and you can reach our website https://www.nodle.com/

If you are still having issues make sure to try without a VPN connection since some of them aren't really working as needed or have issues. If you are done with all the above proceed forward with next steps. 

## 5: ProGuard - Troubleshooting
In this section we will explain how you can tackle most common issues with ProGuard shrinking and obfuscation. We recommend adding the following ProGuard rules when generating a release build and using R8:

```
# Nodle
-keep,includecode class io.nodle.** { *; } 

# Jackson - Nodle dependency
-keep class com.fasterxml.jackson.databind.ObjectMapper {
    public <methods>;
    protected <methods>;
}

# Jackson - Nodle dependency
-keep class com.fasterxml.jackson.databind.ObjectWriter {
    public ** writeValueAsString(**);
}

# Jackson - Nodle dependency
-keepnames class com.fasterxml.jackson.** { *; }
-dontwarn com.fasterxml.jackson.databind.**

# Kotlin - Internal dependency
-keep class kotlin.jvm.internal** { *; }
```

After you can start tackling the issues you have on the way by following the next steps below.

- First start by generating a release build with no ProGuard shrinking or obfuscation enabled then check if your application is working correctly. It is follow the next steps since your problem is related to this section. 
- You can start by enabling either shrinking or obfuscation with and then without each other to narrow down the problem.
- After you do that and you know where your problem lies exactly please follow the steps below.
- Make sure you have the right ProGuard rules to keep all the files, classes, interfaces that your application would need. 
- If your problem is related to shrinking please disable it or make sure you have keep rules for the files and lines from them that you might need.
- If your problem is related to obfuscation please start by increasing or decreasing the obfuscation levels and setup or use the default one to be able to debug the problem.
- After you solved the issue that you should be good to go with ProGuard. 

If you are still having issues with ProGuard please follow the official documentation for assistance: https://developer.android.com/studio/build/shrink-code

## 6: Gradle - Troubleshooting
In this section we will explain how you can tackle most common issues with Gradle. We recommend that you always invalidate caches and restart the Android Studio. You can do the following **File -> Invalidate Cache-> Select both options-> Invalidate and Restart**. If you are still facing issues you can do all the additional steps below to make sure everything is as expected:
- Run the following in your terminal: ```rm -rf ~/.gradle/caches/```
- Clean and build the project once more: ```./gradlew clean build```
- You can refresh the dependencies as well: ```./gradlew --refresh-dependencies```

You can make sure to check our release **SHA** and validate the one that your **Gradle** has downloaded by going to the following path **./gradle/caches/modules-2/files-2.1/io.nodle/nodlesdk-lp or lg/version/** compare the release SHA and make sure it matches one of the folders in that location. If you don't want to depend on the automatic gradle manager to manage your dependencies you can build your own dependency validation.

If you are still having issues with Gradle please follow the official documentation for assistance: https://developer.android.com/studio/troubleshoot
