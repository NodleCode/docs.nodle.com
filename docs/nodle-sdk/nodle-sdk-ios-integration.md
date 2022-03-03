---
sidebar_position: 4
---

# iOS SDK - Integration
Integrating the Nodle SDK into your android app is easy and straightforward. Just follow the steps below and you should be ready to go in no time.

## Step 1: Generate Developer Key
- Go and [Create a Web Wallet](nodle-cash/how-to-create-a-nodle-cash-wallet.md) 
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

The latest version of the SDK is ```0.0.9``` We recommend to add the following dependency which should be automatically pulled but if you encounter any issues you can add them to your Podfile like this:

```swift
# Pods for NodleSDK
pod 'SQLite.swift', '~> 0.13.2'
pod 'SwiftCBOR', '~> 0.4.4'
pod 'SwiftProtobuf', '~> 1.18.0'
```

Then, run ```pod install```. You may also need to run ```pod install --repo-update``` . 

### Add the SDK manually:
You can also add the SDK to your project manually. Download the current [release](https://github.com/NodleCode/NodleSDK-Release/tags), unzip the package, and drag the version of the SDK that you want use for example the version with CoreBluetooth NodleSDK.xcframework into your Xcode project. It will automatically appear in the Frameworks, Libraries, and Embedded Content section of your target settings. Switch Do Not Embed to Embed & Sign. We recommend to add the following dependency which should be automatically pulled but if you encounter any issues you can add them to your Podfile like this:

```swift
# Pods for NodleSDK
pod 'SQLite.swift', '~> 0.13.2'
pod 'SwiftCBOR', '~> 0.4.4'
pod 'SwiftProtobuf', '~> 1.18.0'
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
  pod 'SQLite.swift', '~> 0.13.2'
  pod 'SwiftCBOR' 
  pod 'SwiftProtobuf', '~> 1.18.0'

end
```

You could do the same manually by adding the ['BUILD_LIBRARY_FOR_DISTRIBUTION'] = 'YES' to your Pod project settings. If you are on older version of cocoapods before 1.9- you will not need to do anything  and you can simply proceed to next steps.

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
NSLocationAlwaysAndWhenInUseUsageDescription - Need for our location request
NSLocationWhenInUseUsageDescription - Need for our location request

// NodleSDKWCB
NSLocationAlwaysAndWhenInUseUsageDescription - Need for our location request
NSLocationWhenInUseUsageDescription - Need for our location request
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
            // ask for bluetooth permissions
            centralManager = CBCentralManager(delegate: self, queue: nil)
        case .notDetermined:
            // ask for permissions
            locationManager.requestWhenInUseAuthorization()
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
            // permissions granted
        case .notDetermined:
            // ask for permissions
            locationManager.requestWhenInUseAuthorization()
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

## Want to check your SDK rewards? 
Currently we have our dashboard **under development** and rewards are not available. If you want see your rewards please go to our [block explorer](https://explorer.nodle.com/) please follow the steps:

- copy your ```public_key``` and paste it in the search bar
- slide down the page after it loads and head to allocations
- you should see you rewards which are allocated every 2 hours

![Empty Import](/img/docs/nodle-sdk/rewards.png)

That's it you should see your rewards. Make sure to add all permissions to the SDK in order to see your rewards. We have a lot of traffic so please bear with us since rewards might take a bit of time. But if you allow all the rules in SDK you should see the packets coming to the dashboard. Then rewards should be visible.
