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

Previous versions Maven repository that will still be supported for a couple versions forward:

```kotlin
buildscript {
    repositories {
        google()
        maven { url 'http://maven.nodle.io/io/home/runner/.m2/repository/' }
    }
}

allprojects {
    repositories {
        google()
        maven { url 'http://maven.nodle.io/io/home/runner/.m2/repository/' }
    }
}
```

If you are using Android Studio Arctic Fox and newer AGP 7.0+ and GP 7.0+ please use the following. We are currently migrating the repository to HTTPS. Please make sure to use the latest maven repository.

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

If you are using Java as your language of choice please make sure to use the default Java Library version which is JDK 11 as of Android Studio Fox update. Like that you can make sure your project works as expected between the Kotlin-Java and vice-versa compatibility. You can do that by following this path: **Project Structure -> SDK Location -> Gradle Settings -> Gradle Projects -> Gradle JDK ->** Select 11 or later.

## Step 3: Add the NodleSDK dependency
In your app module's ```build.gradle``` simply add the Nodle SDK dependency in gradle. Please node that nodlesdk depends by default on google play service.  If your app runs on devices that doesn't have google play service, you can use a different flavour of the nodlesdk that doesn't depend on google play services. Our previous release supports **API 30** with **AGP 7.0.2+** and **GP 7.1**:

### Default (depends on Google Play services)

```kotlin
// Top level gradle
buildscript {
    dependencies {
        classpath 'com.google.gms:google-services:4.3.8'    // Google Services plugin
    }
}

// Module Gradle
dependencies {
    implementation 'io.nodle:nodlesdk-rc-lp:cbe8a42b18'
}
```

### Without Google Play Services

```kotlin
// Module Gradle
dependencies {
    implementation 'io.nodle:nodlesdk-rc-lg:cbe8a42b18'
}
```

Our latest release provide full support for **Android 12** **API 31** with **AGP 7.1.3+** and **GP 7.2** you can simply add the Nodle SDK dependency in your  ```build.gradle```

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
    implementation 'io.nodle:nodlesdk-rc-lp:e61c593b4d'

    // additional dependencies may be required when using getEvents
    implementation "org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.0"
}
```

### Without Google Play Services

```kotlin
// Module Gradle
dependencies {
    implementation 'io.nodle:nodlesdk-rc-lp:e61c593b4d'

    // additional dependencies may be required when using getEvents
    implementation "org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.0"
}
```

If you are using the Google Play Services version please make sure to add the plugin. You can use the libraries we are using or the newest ones. We would try to support always the latest libraries. The **minAPI:19** and **maxAPI:31**. We are also on the latest version of **AGP 7.1.3+** and **Kotlin 1.6.21+**

**The latest version of the SDK is**  ```e61c593b4d``` **-** ```SHA:8d7d75b3896bfde842962d64964ca3aa00460488```

## Step 4: Initialize the Nodle SDK
First you need to declare your application class in your **ApplicationManifest.xml**. And declare the required permissions for Nodle to be able to run:

### Java
```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.nodle.dummy">

    <!-- Required permissions NodleSDK -->
    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.BLUETOOTH"/>
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />

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

### Kotlin
```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.nodle.dummy">

    <!-- Required permissions NodleSDK -->
    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.BLUETOOTH"/>
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />

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

### Java
```java
import io.nodle.sdk.android.Nodle

class App : Application() {
    override fun onCreate() {
        super.onCreate();
        Nodle.init(this);
    }
}
```

### Kotlin
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
- BLUETOOTH
- BLUETOOTH_ADMIN
- ACCESS_FINE_LOCATION
- ACCESS_COARSE_LOCATION
- ACCESS_BACKGROUND_LOCATION - **API 29 and ABOVE**
- BLUETOOTH_SCAN - **API 31 (ANDROID 12)**
- BLUETOOTH_ADVERTISE - **API 31 (ANDROID 12)**
- BLUETOOTH_CONNECT - **API 31 (ANDROID 12)**

In order for NodleSDK to be able to work while in the background we require the **ACCESS_BACKGROUND_LOCATION** which Google Play Store has updated it's location policy and require extra steps for verification in Google Play Stores requiring the application developer to submit a video of the permissions usage. If you can't provide the requested usage description you can always strip the permission like this:

```xml
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" tools:node="remove" />
```

You may use third party libraries to request the permission to the user. For instance you can use the [vanniktech library](https://github.com/vanniktech/RxPermission) with RxPermission :

```kotlin
RealRxPermission.getInstance(this)
    .requestEach(
            Manifest.permission.INTERNET,
            Manifest.permission.BLUETOOTH,
            Manifest.permission.BLUETOOTH_ADMIN,
            Manifest.permission.ACCESS_COARSE_LOCATION,
            Manifest.permission.ACCESS_FINE_LOCATION)
    .reduce(true, (c, p) -> c && (p.state() == Permission.State.GRANTED))
    .subscribe((granted) -> {
            if (granted) {
               Log.d("Nodle","all the permissions was granted by user");
               Nodle.start("ss58:public_key");
            } else {
               Log.d("Nodle","some permission was denied by user");
            }
   });

```
You can still use the same third-party library for Android 12 by adding the following permissions:

```kotlin
RealRxPermission.getInstance(this)
    .requestEach(
            Manifest.permission.INTERNET,
            Manifest.permission.BLUETOOTH,
            Manifest.permission.BLUETOOTH_ADMIN,
            Manifest.permission.BLUETOOTH_SCAN,
            Manifest.permission.BLUETOOTH_ADVERTISE,
            Manifest.permission.BLUETOOTH_CONNECT,
            Manifest.permission.ACCESS_COARSE_LOCATION,
            Manifest.permission.ACCESS_FINE_LOCATION)
    .reduce(true, (c, p) -> c && (p.state() == Permission.State.GRANTED))
    .subscribe((granted) -> {
            if (granted) {
               Log.d("Nodle","all the permissions was granted by user");
               Nodle.start("ss58:public_key");
            } else {
               Log.d("Nodle","some permission was denied by user");
            }
   });

```

Please follow their guide on how to install and setup the request. After permissions are requested and given the NodleSDK should work as expected.

## Step 6: Run the Nodle SDK
In the ```onCreate``` method of your launcher activity start Nodle by giving it the ```ss58:public_key``` generated in Step 1:

### Java
```java
Nodle().start("ss58:public_key");
```

### Kotlin
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
