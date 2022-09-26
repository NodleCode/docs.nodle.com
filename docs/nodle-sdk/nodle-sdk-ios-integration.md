---
sidebar_position: 5
---

# iOS SDK - Integration
Integrating the Nodle SDK into your iOS app is easy and straightforward. You can use our [NodleSDK Quickstart application](https://github.com/NodleCode/nodlesdk-quickstart-ios) or just follow the steps below and you should be ready to go in no time.

## Step 1: Generate Developer Key
- Go and [Create a Nodle account](nodle-wallets/polkadot-js/how-to-create-a-nodle-cash-wallet.md)
- Make sure you save your private key!
- Copy your ```public_key``` from the extension
- Proceed forward with next steps.

## Step 2: Install the SDK
Install the SDK via [CocoaPods](https://cocoapods.org/). If you don't have an existing Podfile, run pod init in your project directory. Add the following to your Podfile:

### NodleSDK
```swift
pod 'NodleSDK'
```

### NodleSDK without CoreBluetooth
```swift
pod 'NodleSDKWCB', :podspec => 'https://raw.githubusercontent.com/NodleCode/NodleSDK-Release/main/NodleSDKWCB.podspec'
```

The latest version of the SDK is ```0.0.15``` We recommend to add the following dependency which should be automatically pulled but if you encounter any issues you can add them to your Podfile like this:

```swift
# Pods for NodleSDK
pod 'SQLite.swift', '~> 0.13.3'
pod 'SwiftCBOR', '~> 0.4.5'
pod 'SwiftProtobuf', '~> 1.19.0'
```

Then, run ```pod install```. You may also need to run ```pod install --repo-update``` .

### Add the SDK manually:
You can also add the SDK to your project manually. Download the current [release](https://github.com/NodleCode/NodleSDK-Release/tags), unzip the package, and drag the version of the SDK that you want use for example the version with CoreBluetooth NodleSDK.xcframework into your Xcode project. It will automatically appear in the Frameworks, Libraries, and Embedded Content section of your target settings. Switch Do Not Embed to Embed & Sign. We recommend to add the following dependency which should be automatically pulled but if you encounter any issues you can add them to your Podfile like this:

```swift
# Pods for NodleSDK
pod 'SQLite.swift', '~> 0.13.3'
pod 'SwiftCBOR', '~> 0.4.5'
pod 'SwiftProtobuf', '~> 1.19.0'
```

Then, run ```pod install```. You may also need to run pod repo update. If you run into trouble with pod please install [cocoapods-deintegrate](https://github.com/CocoaPods/cocoapods-deintegrate) and run pod deintegrate and also you would need to remove your cache we recommend you do the following:

```swift
rm -rf ~/Library/Caches/CocoaPods; rm -rf Pods; rm -rf ~/Library/Developer/Xcode/DerivedData/*; pod deintegrate;
```

Then make sure you are using one of the latest cocoapods versions 1.11+ due to issues with cocoapods not picking dependency properly you need to set the following script on top of your Podfile. You can find example Podfile below:

```swift
post_install do |installer|
        installer.pods_project.targets.each do |target|
          target.build_configurations.each do |config|
            config.build_settings['BUILD_LIBRARY_FOR_DISTRIBUTION'] = 'YES'
          end
        end
    end

# If any errors for example dyld: Symbol not found please use pod deintegrate and pod install again. You should remove your
# Podfile.lock and workspace and let cocoapods generate it for you if you are having
# trouble. Make sure you close and open the workspace when you are doing all above before
# pod install again.
platform :ios, '13.0'

# use_modular_headers!

target 'YourTarget' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  # Pods for TestApp
  pod 'NodleSDK'
  pod 'SQLite.swift', '~> 0.13.3'
  pod 'SwiftCBOR', '~> 0.4.5'
  pod 'SwiftProtobuf', '~> 1.19.0'

end
```

You could do the same manually by adding the ['BUILD_LIBRARY_FOR_DISTRIBUTION'] = 'YES' to your Pod project settings. If you are on older version of cocoapods before 1.9- you will not need to do anything  and you can simply proceed to next steps.

### NodleSDK issues with dependencies:
If you are experiencing issues please make sure the correct version of the dependencies are in your **Podfile.lock** as an example with our latest version of the dependencies found here **NodleSDK 0.0.15**:
```
SQLite.swift: 903bfa3bc9ab06345fdfbb578e34f47cfcf417da
SwiftCBOR: ac340b74d3b2cf1f8884bb748bd09875848e3873
SwiftProtobuf: 6ef3f0e422ef90d6605ca20b21a94f6c1324d6b3
```
Previous version have the following dependencies **NodleSDK 0.0.13**:
```
SQLite.swift: 4fc2be46c36392e3b87afe6fe7f1801c1daa07ef
SwiftCBOR: ac340b74d3b2cf1f8884bb748bd09875848e3873
SwiftProtobuf: 6ef3f0e422ef90d6605ca20b21a94f6c1324d6b3
```
If you are having trouble with the dependencies loading for older versions of our SDK please make sure they are corrected in the **Podfile.lock** file.  Example for older versions of dependencies **NodleSDK 0.0.1+**:
```
SQLite.swift: 4fc2be46c36392e3b87afe6fe7f1801c1daa07ef
SwiftCBOR: ce5354ec8b660da2d6fc754462881119dbe1f963
SwiftProtobuf: c3c12645230d9b09c72267e0de89468c5543bd86
```

After you have corrected them in the file to the correct versions and CHECKSUMS simply run pod install.

### NodleSDK requirements:
We are currently using the following setup:

```swift
cocoapods: 1.10+
swift: 5+
XCode: 12.5.1 and above
build-system: New Build System
ios: 13.0+
```

## Step 3: Add the NodleSDK dependency
The SDK depends on Apple's ```CoreLocation, CoreBluetooth``` framework. In your target settings, go to General > Frameworks, Libraries, and Embedded Content and add ```CoreLocation, CoreBluetooth``` if you haven't already. If you are using the build without CoreBluetooth you will need to add only **CoreLocation**

## Step 4: Initialize the Nodle SDK
First you need to init the NodleSDK in your AppDelegate like below:

### Swift
```swift
import UIKit
import SwiftCBOR
import SwiftProtobuf
import NodleSDK
import SQLite
import CoreLocation
import CoreBluetooth

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    let nodle = Nodle.sharedInstance

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        return true
    }
}

```

Or you can initialize the NodleSDK in your ViewController like below:

### Swift
```swift
import UIKit
import SwiftCBOR
import SwiftProtobuf
import NodleSDK
import SQLite
import CoreLocation
import CoreBluetooth

class ViewController: UIViewController, CLLocationManagerDelegate, CBCentralManagerDelegate {
    private let locationManager = CLLocationManager()
    var centralManager: CBCentralManager?
    let nodle = Nodle.sharedInstance
}
```

Then you can proceed to next steps below. Please make sure that you have added and request all permissions and dependency before you run the SDK.

## Step 5: Request Permissions
Before requesting permissions, you must add location usage strings to your ```Info.plist``` file. We require a couple permissions and they have to be added like below:

```swift
// NodleSDK
NSBluetoothAlwaysUsageDescription - Need for our bluetooth scan
NSBluetoothPeripheralUsageDescription - Need for our bluetooth scan
NSLocationAlwaysUsageDescription - Need for our location request from the background
NSLocationAlwaysAndWhenInUseUsageDescription - Need for our location request from background
NSLocationWhenInUseUsageDescription - Need for our location request
NSLocationUsageDescription - Need to be able to perform additional changes to 
location while in the background.

// NodleSDKWCB
NSLocationAlwaysUsageDescription - Need for our location request from the background
NSLocationAlwaysAndWhenInUseUsageDescription - Need for our location request from the background
NSLocationWhenInUseUsageDescription - Need for our location request
NSLocationUsageDescription - Need to be able to perform additional changes to 
location while in the background.
```

Here is a small example how it should look like when configured:

![Empty Import](/img/docs/nodle-sdk/permissions.png)

The NodleSDK require Bluetooth and Location permissions to be added before it is started. The **NodleSDKWCB doesn't require Bluetooth**. Then you can proceed to next step and request permissions for Location and Bluetooth via one of the two approaches listed below depending on your choice:

### Request permissions manually for NodleSDK without any third party:

```swift
import UIKit
import SwiftCBOR
import SwiftProtobuf
import NodleSDK
import SQLite
import CoreLocation
import CoreBluetooth

class ViewController: UIViewController, CLLocationManagerDelegate, CBCentralManagerDelegate {
    private let locationManager = CLLocationManager()
    var centralManager: CBCentralManager?
    let nodle = Nodle.sharedInstance

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.

        // set manager for permissions
        locationManager.delegate = self

        // check status for location permission
        switch CLLocationManager.authorizationStatus() {
        case .authorizedWhenInUse, .authorizedAlways:
            // request always auth if you would use it in the background otherwise requestWhileInUse
            locationManager.requestAlwaysAuthorization()
            // ask for bluetooth permissions
            centralManager = CBCentralManager(delegate: self, queue: nil)
        case .notDetermined:
            // request always auth if you would use it in the background otherwise requestWhileInUse
            locationManager.requestAlwaysAuthorization()
        default:
            print("Location permission denied")
            break;
        }
    }

    func startNodle() {
        // start the sdk
        nodle.start(devKey: "ss58:5FUfDdHhtn5Bzgte69zr1NyNRS7zFqy7CnjVcRUUpWpXz3Cv", tags: "","")
    }

    func stopNodle() {
        // stop the sdk
        nodle.stop()
    }

    func centralManagerDidUpdateState(_ central: CBCentralManager) {
        switch central.state {
        case .poweredOn:
            // start Nodle after Bluetooth permissions have been granted
            startNodle()
            break
        case .poweredOff:
            // stop nodle
            stopNodle()
            break
        default:
            break
        }
    }

    func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
        // handle success
        if status == .authorizedWhenInUse || status == .authorizedAlways {
            print("Location permission have been granted")
            // ask for ble permissions
            centralManager = CBCentralManager(delegate: self, queue: nil)
        }
    }
}
```

### Request permissions manually for NodleSDKWCB without any third party:

```swift
import UIKit
import SwiftCBOR
import SwiftProtobuf
import NodleSDK
import SQLite
import CoreLocation

class ViewController: UIViewController, CLLocationManagerDelegate {
    private let locationManager = CLLocationManager()
    let nodle = Nodle.sharedInstance

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.

        // set manager for permissions
        locationManager.delegate = self

        // check status for location permission
        switch CLLocationManager.authorizationStatus() {
        case .authorizedWhenInUse, .authorizedAlways:
            // request always auth if you would use it in the background otherwise requestWhileInUse
            locationManager.requestAlwaysAuthorization()
        case .notDetermined:
            // request always auth if you would use it in the background otherwise requestWhileInUse
            locationManager.requestAlwaysAuthorization()
        default:
            print("Location permission denied")
            break;
        }
    }

    func startNodle() {
        // start the sdk
        nodle.start(devKey: "ss58:5FUfDdHhtn5Bzgte69zr1NyNRS7zFqy7CnjVcRUUpWpXz3Cv", tags: "","")
    }

    func stopNodle() {
        // stop the sdk
        nodle.stop()
    }

    func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
        // handle success
        if status == .authorizedWhenInUse || status == .authorizedAlways {
            print("Location permission have been granted")
            // start Nodle after Location permissions have been granted
            startNodle()
        } else {
            // stop nodle if permissions revoked
            stopNodle()
        }
    }
}
```

### Request permissions via third party - SPPermissions
We recommend the [SPPermissions](https://github.com/ivanvorobei/SPPermissions) third party library to request permissions:

```swift
// MARK: 1. Choose the permissions you need:

let permissions: [SPPermissions.Permission] = [.location, .bluetooth]

// MARK: 2. Choose present style:

// 2a. List Style
let controller = SPPermissions.list(permissions)
controller.present(on: self)

// 2b. Dialog Style
let controller = SPPermissions.dialog(permissions)
controller.present(on: self)

// 2c. Native Style
let controller = SPPermissions.native(permissions)
controller.present(on: self)

// MARK: 3. Optional: Check permission state (available `authorized`, `denied`, `notDetermined`):

let authorized = SPPermissions.Permission.calendar.authorized
```

Please follow their guide how to install and setup the request. After permissions are requested and given the NodleSDK should work as expected.

## Step 6: Run the Nodle SDK
In the ```AppDelegate``` or ```ViewController``` you can start Nodle by giving it your public key in the following format ```ss58:public_key``` generated in Step 1:

### Swift
```swift
Nodle().start("ss58:public_key")
```

You can find more info here: [Nodle SDK - iOS API and Configuration](nodle-sdk-ios-api.md)

**And there you have it! You’re good to go!**

## Step 7: Run Nodle SDK in Background (Optional)
With our latest update NodleSDK is able to perform background scanning. In order to work please make sure to **allowAlwaysAuthorization** for background permissions and **Background Modes**. Then the SDK will then be working in the background for you. You can chose one of the modes that you would want to adopt or you can disable it. Depending on the permissions that are allowed the SDK will be able to perform different actions in each of the modes. 

### Enabling background modes - required
The NodleSDK requires certain Background Modes to be enabled in order to perform background scanning. Here is example of the ones you need to enable:

![Empty Import](/img/docs/nodle-sdk/bgmodes.png)

You don't have to register and schedule background tasks for the SDK but you must enable the option in some of the modes that we require. Please head out to our configuration page here: [Nodle SDK - iOS API and Configuration](nodle-sdk-ios-api.md)

### Improved background scanning with Background Tasks
If you want to improve the background scanning because you have chosen a specific mode. You can allow Nodle to perform some background tasks for you when possible. You must add the following task: ```io.nodle.sdk.ios.bgrefresh```  to your ```Info.plist``` file under the section: **Permitted background task scheduler identifiers** ```BGTaskSchedulerPermittedIdentifiers``` Here is a small example how it should look like when configured:

![Empty Import](/img/docs/nodle-sdk/bgtask.png)

Then make sure you enabled all permissions that are required. You can proceed to register the **NodleBackgroundTask** by doing the following in you **AppDelegate** application method:

### Swift
```swift
import UIKit
import SwiftCBOR
import SwiftProtobuf
import NodleSDK
import SQLite
import CoreLocation
import CoreBluetooth

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    // init nodle sdk
    let nodle = Nodle.sharedInstance

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // register background task for nodle sdk
        nodle.registerNodleBackgroundTask()
        return true
    }
}
```

Then you can proceed to schedule your tasks once your application enters background by doing the following:

### Swift
```swift
import UIKit
import SwiftCBOR
import SwiftProtobuf
import NodleSDK
import SQLite
import CoreLocation
import CoreBluetooth

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    // init nodle sdk
    let nodle = Nodle.sharedInstance

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // register background task for nodle sdk
        nodle.registerNodleBackgroundTask()
        return true
    }

    func applicationDidEnterBackground(_ application: UIApplication) {
        // schedule background task for nodle sdk
        nodle.scheduleNodleBackgroundTask()
    }
}
```

If you are using SceneDelegates don't forget to add the following call to your delegate method by doing the following:

### Swift
```swift
import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    func sceneDidEnterBackground(_ scene: UIScene) {
        // call app delegate method
        (UIApplication.shared.delegate as? AppDelegate)?.applicationDidEnterBackground((UIApplication.shared))
    }
}
```

You have successfully configured the NodleSDK to perform background scanning.

## Want to check your SDK rewards?
Currently we have our dashboard **under development** and rewards are not available. If you want see your rewards please go to our [Nodle Subscan](https://nodle.subscan.io/) please follow the steps:

- copy your ```public_key``` and paste it in the search bar
- slide down the page after it loads and head to allocations
- you should see you rewards which are allocated every 2 hours

![NodleSDK iOS](/img/docs/nodle-sdk/rewards.png)

That's it you should see your rewards. Make sure to add all permissions to the SDK in order to see your rewards. We have a lot of traffic so please bear with us since rewards might take a bit of time. But if you allow all the rules in SDK you should see the packets coming to the dashboard. Then rewards should be visible.
