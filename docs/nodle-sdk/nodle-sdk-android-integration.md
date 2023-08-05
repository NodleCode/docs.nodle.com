---
sidebar_position: 1
---

# Android SDK - Integration

Integrating the Nodle SDK into your android app is easy and straightforward. You can use our [NodleSDK Quickstart application](https://github.com/NodleCode/nodlesdk-quickstart-android) or just follow the steps below and you should be ready to go in no time.

## Step 1: Generate Developer Key
- Go and [Create a Nodle account](nodle-wallets/polkadot-js/how-to-create-a-nodle-cash-wallet.md)
- Make sure you save your private key!
- Copy your ```public_key``` from the extension
- Proceed forward with next steps.

## Step 2: Add the Maven Repository
Add the code below in your project's ```build.gradle``` to add the Nodle repository. We will be migrating our SDKs to a new maven repository. Please make sure to use that one from now on:

```kotlin
buildscript {
    repositories {
        google()
        maven {
            url "http://maven.nodle.io"
            allowInsecureProtocol = true
        }
    }
}

allprojects {
    repositories {
        google()
        maven { 
            url "http://maven.nodle.io" 
            allowInsecureProtocol = true
        }
    }
}
```

If you are using Android Studio Bumblebee and newer AGP 7.0.2+ and GP 7.0.2+ please use the following in your ```settings.gradle ```

```kotlin
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        maven {
            url "http://maven.nodle.io"
            allowInsecureProtocol = true
        }
    }
}
```

If you are using Java as your language of choice please make sure to use the default Java Library version which is JDK 11 as of Android Studio. Like that you can make sure your project works as expected between the Kotlin-Java and vice-versa compatibility. You can do that by following this path: **Project Structure -> SDK Location -> Gradle Settings -> Gradle Projects -> Gradle JDK ->** Select 11 or later.

## Step 3: Add the NodleSDK dependency
In your app module's ```build.gradle``` simply add the Nodle SDK dependency in gradle. Please node that nodlesdk depends by default on google play service.  If your app runs on devices that doesn't have google play service, you can use a different flavour of the nodlesdk that doesn't depend on google play services. 

### Default (depends on Google Play services)

```kotlin
// Top level gradle
buildscript {
    dependencies {
        classpath 'com.google.gms:google-services:4.3.10'    // Google Services plugin
    }
}

// Module Gradle
dependencies {
    implementation 'io.nodle:nodlesdk-rc-lp:57f6eec4c0'

    // additional dependencies may be required when using getEvents
    implementation "org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.0"
}
```

### Without Google Play Services

```kotlin
// Module Gradle
dependencies {
    implementation 'io.nodle:nodlesdk-rc-lp:57f6eec4c0'

    // additional dependencies may be required when using getEvents
    implementation "org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.0"
}
```

If you are using the Google Play Services version please make sure to add the plugin. You can use the libraries we are using or the newest ones. We would try to support always the latest libraries. The **minAPI:19** and **maxAPI:31**. We are also on the latest version of **AGP 7.1.3+** and **Kotlin 1.6.21+**

**The latest version of the SDK - GP is**  ```57f6eec4c0``` **-** ```SHA:00574bbf5ac50a0043f5aed7e0eaa8fc81d2db67```

## Step 4: Initialize the Nodle SDK
First you need to declare your application class in your **ApplicationManifest.xml**. And declare the required permissions for Nodle to be able to run:

### Android Manifest
```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.nodle.dummy">

    <!-- Required permissions NodleSDK -->
    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.BLUETOOTH" android:maxSdkVersion="30" />
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" android:maxSdkVersion="30" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />

    <!-- Required permissions NodleSDK extended background capabilities -->
    <uses-permission android:name="android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS" />
    <uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" />

    <!-- Required permissions NodleSDK Android 12  -->
    <uses-permission android:name="android.permission.BLUETOOTH_SCAN" />
    <uses-permission android:name="android.permission.BLUETOOTH_ADVERTISE" />
    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />

     <!-- Put your application class name below -->
    <application
        android:name="App">
    </application>
</manifest>
```

In the ```onCreate``` method of your application class you should initialize Nodle like this:

### Java | Kotlin
```kotlin
import io.nodle.sdk.android.Nodle

class App : Application() {
    override fun onCreate() {
        super.onCreate()
        Nodle.init(this)
    }
}
```

After you have verified that you have the required permissions in the manifest and you are initializing Nodle then you can proceed to next steps. When passing (this) to Nodle you will pass your application Context. Like this Nodle will be able to stay alive in your global application state.

## Step 5 - Check Permission
The SDK expects a certain number of permission to be set. You must make sure that to request the following permissions from the user:

- INTERNET
- BLUETOOTH - **API 30 and BELOW**
- BLUETOOTH_ADMIN - **API 30 and BELOW**
- ACCESS_FINE_LOCATION
- ACCESS_COARSE_LOCATION
- ACCESS_BACKGROUND_LOCATION - **API 29 and ABOVE**
- BLUETOOTH_SCAN - **API 31 (ANDROID 12)**
- BLUETOOTH_ADVERTISE - **API 31 (ANDROID 12)**
- BLUETOOTH_CONNECT - **API 31 (ANDROID 12)**
- REQUEST_IGNORE_BATTERY_OPTIMIZATIONS - **required for extended background capabilities**
- SCHEDULE_EXACT_ALARM - **required for extended background capabilities**

In order for NodleSDK to be able to work while in the background we require the **ACCESS_BACKGROUND_LOCATION, REQUEST_IGNORE_BATTERY_OPTIMIZATIONS, SCHEDULE_EXACT_ALARM** which Google Play Store has updated it's policy and require extra steps for verification in Google Play Stores requiring the application developer to submit a video of the permissions usage. If you can't provide the requested usage description you can always strip the permission's like this:

```xml
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" tools:node="remove" />
<uses-permission android:name="android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS" tools:node="remove" />
<uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" tools:node="remove" />
```

Below you can find a simple solution to request all the mandatory permissions that the SDK require to operate. You aren't limited to using our permissions request and you can use any other third party provider that you like:

```kotlin
// required permissions for the SDK to run
private val foregroundPermissions = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
    arrayOf(
        Manifest.permission.INTERNET,
        Manifest.permission.BLUETOOTH_SCAN,
        Manifest.permission.BLUETOOTH_ADVERTISE,
        Manifest.permission.BLUETOOTH_CONNECT,
        Manifest.permission.ACCESS_COARSE_LOCATION,
        Manifest.permission.ACCESS_FINE_LOCATION
    )
} else {
    arrayOf(
        Manifest.permission.INTERNET,
        Manifest.permission.BLUETOOTH,
        Manifest.permission.BLUETOOTH_ADMIN,
        Manifest.permission.ACCESS_COARSE_LOCATION,
        Manifest.permission.ACCESS_FINE_LOCATION
    )
}

@RequiresApi(Build.VERSION_CODES.Q)
private val backgroundPermission = Manifest.permission.ACCESS_BACKGROUND_LOCATION

// handle background permissions
val requestBackgroundPermissionLauncher = registerForActivityResult(
    ActivityResultContracts.RequestPermission()) { isGranted ->
    if (isGranted) {
        println("Background location permission granted")

        // start Nodle SDK
        Nodle.Nodle().start("ss58:public_key", "tag1", "tag2")
    } else {
        println("Background location permission denied")
    }
}

// handle permissions request
val requestPermissionLauncher = registerForActivityResult(
    ActivityResultContracts.RequestMultiplePermissions()) { isGranted ->
    if (isGranted.containsKey(Manifest.permission.ACCESS_FINE_LOCATION)) {
        println("Foreground permissions granted")

        // request background permissions if possible
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            requestBackgroundPermissionLauncher.launch(backgroundPermission)
        } else {
            // start Nodle SDK
            Nodle.Nodle().start("ss58:public_key", "tag1", "tag2")
        }
    } else {
        println("Foreground permissions weren't granted")
    }
}

// start nodle
binding.start.setOnClickListener {

    // request foreground permissions
    requestPermissionLauncher.launch(foregroundPermissions)
}

```

If you decide to use a third party please follow their guide on how to install and setup the request. After permissions are requested and given the NodleSDK should work as expected.

## Step 6: Allow the NodleSDK extended background capabilities
We have provided/extended the SDK capabilities for developers to keep our SDK in the background even further. In order to allow the SDK extended capabilities we do require the following permissions: **ACCESS_BACKGROUND_LOCATION, REQUEST_IGNORE_BATTERY_OPTIMIZATIONS, SCHEDULE_EXACT_ALARM**. Additionally the capabilities for the SDK can be enabled/disabled dependencing on what the developer would like to do. In order to enable the capabilities you can do the following:

### Java | Kotlin
```kotlin
Nodle.Nodle().config("heartbeat.background-mode", true)
Nodle.Nodle().config("ble.background-mode", true)
```

The first capability will extend the SDK lifecycle to be able to operate when in the background and even when the phone is in **Doze mode**. The second capability will enable the SDK to perform additional BLE scanning when in the background.

## Step 7: Run the Nodle SDK
In the ```onCreate``` method of your launcher activity start Nodle by giving it the ```ss58:public_key``` generated in Step 1:

### Java | Kotlin
```kotlin
Nodle().start("ss58:public_key")
```

You can find more info here: [Nodle SDK - Android API and Configuration](nodle-sdk-android-api.md)

**And there you have it! You’re good to go!**

## Want to check your SDK rewards?
Currently we have our dashboard **under development** and rewards are not available. If you want see your rewards please go to our [Nodle Subscan](https://nodle.subscan.io/) please follow the steps:

- copy your ```public_key``` and paste it in the search bar
- slide down the page after it loads and head to allocations
- you should see you rewards which are allocated every 2 hours

![NodleSDK Android](/img/docs/nodle-sdk/rewards.png)

That's it you should see your rewards. Make sure to add all permissions to the SDK in order to see your rewards. We have a lot of traffic so please bear with us since rewards might take a bit of time. But if you allow all the rules in SDK you should see the packets coming to the dashboard. Then rewards should be visible.
