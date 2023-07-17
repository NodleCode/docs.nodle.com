---
sidebar_position: 6
---

# iOS SDK - API and Configuration
The SDK receives configuration remotely from Nodle servers as well as statically using API calls. The static configuration always takes precedence over the remote configuration.

## Nodle SDK API
To interact with the SDK you need to call the ```Nodle.sharedInstance``` method that will give you an Instance of the **INodle** class. The following are all the public methods for the Nodle API.

### Swift
```swift
import UIKit
import SwiftCBOR
import SwiftProtobuf
import NodleSDK
import SQLite
import CoreLocation
import CoreBluetooth

let nodle = Nodle.sharedInstance
```

## start

```public func start(public_key: String)```

Immediately starts the Nodle SDK

| Parameters |                                                              |
|:----------:|:------------------------------------------------------------:|
|   ```public_key```  | The application **public_key** created in Step 1 |

Example:

### Swift
```swift
Nodle().start("ss58:public_key")
```

## isStarted

```public func isStarted() -> Bool```

Checks if the Nodle SDK is started

| Parameters |                                                              |
|:----------:|:------------------------------------------------------------:|
|   ```boolean```  | **true** if the Nodle SDK is started, **false** otherwise |

Example:

### Swift
```swift
let sdkStarted = Nodle().isStarted()
```

## isScanning

```public func isScanning() -> Bool```

Checks if the Nodle SDK is currently scanning the BLE neighborhood. This is useful if you want to show that the SDK is working.

| Parameters |                                                              |
|:----------:|:------------------------------------------------------------:|
|   ```boolean```  | **true** if the Nodle SDK is scanning, **false** otherwise |

Example:

### Swift
```swift
let sdkScanning = Nodle().isScanning()
```

## stop

```public func stop()```

Immediately stops the Nodle SDK

Example:

### Swift
```swift
Nodle().stop()
```

## clear

```public func clear()```

Clear any configs by Nodle SDK   

Example:

### Swift
```swift
Nodle().clear()
```

## getVersion

```public func getVersion() -> String```

Get the version identifier of the Nodle SDK.

| Parameters |                                                              |
|:----------:|:------------------------------------------------------------:|
|   ```String```  | the current version of the Nodle SDK |

Example:

### Swift
```swift
let nodleSdkVersion = Nodle().getVersion()
```

## getEvents

```public func getEvents() -> NodleEvent```

Get the raw bluetooth events from the Nodle SDK with the following type:

| Returns |                                                              |
|:----------:|:------------------------------------------------------------:|
|   ```NodleEventType.BlePayloadEvent```  | Returns NodleBluetoothScanRecord  |
|   ```NodleEventType.BleStartSearching```  | Returns NodleBluetoothEvent |
|   ```NodleEventType.BleStopSearching```  | Returns NodleBluetoothEvent |
|   ```NodleEventType.BeaconPayloadEvent```  | Returns NodleBeaconScanRecord  |
|   ```NodleEventType.BeaconStartSearching```  | Returns NodleBeaconEvent |
|   ```NodleEventType.BeaconStopSearching```  | Returns NodleBeaconEvent |

Example of available return event classes below:

| Returns |                                                              |
|:----------:|:------------------------------------------------------------:|
|   ```NodleBluetoothScanRecord```  | Raw Bluetooth Record from Nodle SDK   |
|   ```NodleBluetoothEvent```  | Bluetooth Event when the SDK start/stop |
|   ```NodleBeaconScanRecord```  | Raw Beacon Record from Nodle SDK   |
|   ```NodleBeaconEvent```  | Beacon Event when the SDK start/stop |

Example:

### NodleSDK - Swift
```swift
nodle.getEvents { event in
    // collect the NodleEvent events by chosing a type
    switch event.type {
        case .BlePayloadEvent:
            let payload = event as! NodleBluetoothRecord
            print("Bluetooth payload available \(payload.device)")
            break
        case .BleStartSearching:
            print("Bluetooth started searching")
            break
        case .BleStopSearching:
            print("Bluetooth stopped searching")
            break
        @unknown default:
            print("Failed to get any event")
    }
}
```

### NodleSDKWCB - Swift
```swift
nodle.getEvents { event in
    // collect the NodleEvent events by chosing a type
    switch event.type {
        case .BeaconPayloadEvent:
            let payload = event as! NodleBeaconRecord
            print("iBeacon payload available \(payload.identifier) major: \(payload.major) minor: \(payload.minor) delivered at \(Date())")
            break
        case .BeaconStartSeaching:
            print("iBeacon started searching \(Date())")
            break
        case .BeaconStopSearching:
            print("iBeacon stop searching \(Date())")
            break
        @unknown default:
            print("Failed to get any event")
    }
}
```

The following data can be collected from the ```NodleEventType```:

|   **Key**   |                          **Description**                        | Default Value |
|:-------:|:------------------------------------------------------------:|:-------------:|
| ```type``` | returns nodle bluetooth event type |      NodleEventType         |

The following data can be collected from the ```NodleBluetoothScanRecord```:

|            Key           |                                 Description                                |    Default Value    |
|:------------------------:|:--------------------------------------------------------------------------:|:-------------------:|
|          ```device```          |                      returns device unique identifier                      |        String       |
|           ```rssi```           |                 returns received signal strength indicator                 |         Int         |
|           ```bytes```          |                       returns raw bytes of the record                      |      [UInt8]      |
| ```manufacturerSpecificData``` | returns the manufacturer specific data associated with the manufacturer id | ```[Int : [UInt8]]``` |
|       ```servicesUuids```      |        returns an array of services UUID's within the advertisement        |      ```Array<CBUUID>```     |

The following data can be collected from the ```NodleBluetoothEvent```:

|   **Key**   |                          **Description**                        | Default Value |
|:-------:|:------------------------------------------------------------:|:-------------:|
| ```scanning``` | returns bluetooth scanning state |      Bool         |

The following data can be collected from the ```NodleBeaconScanRecord```:

|            Key           |                                 Description                                |    Default Value    |
|:------------------------:|:--------------------------------------------------------------------------:|:-------------------:|
|          ```identifier```          |                      returns device unique identifier                      |        String       |
|           ```major```           |                 returns major value of the beacon                 |         NSNumber         |
|           ```minor```          |                       returns minor value of the beacon                      |      NSNumber      |
| ```proximity``` | returns proximity value of the beacon | Int |
|       ```accuracy```      |        returns accuracy value of the beacon        |      Double     |
|       ```rssi```      |        returns received signal strength value of the beacon        |      Int     |

The following data can be collected from the ```NodleBeaconEvent```:

|   **Key**   |                          **Description**                        | Default Value |
|:-------:|:------------------------------------------------------------:|:-------------:|
| ```scanning``` | returns beacon scanning state |      Bool         |

The table shows rational range for the beacon devices that are found:

|   **Key**   |                          **Description**                        | **Range** |
|:-------:|:------------------------------------------------------------:|:-------------:|
| ```proximity``` | Int |      **unknown** = 0, **immediate** = 1, **near** = 2, **far** = 3         |
| ```accuracy``` | Double |      **unknown** 0, 0 - 0.5 **immediate**, 0.5 - 3 **near**, 3+ **far** in **meters**         |
| ```rssi``` | Int |      -**128**|+**127**         |

## registerNodleBackgroundTask

```public func registerNodleBackgroundTask()```

Register the Nodle SDK background task   

Example:

### Swift
```swift
Nodle().registerNodleBackgroundTask()
```

## scheduleNodleBackgroundTask

```public func scheduleNodleBackgroundTask()```

Schedules the Nodle SDK background task   

Example:

### Swift
```swift
Nodle().scheduleNodleBackgroundTask()
```

## config

```public func config(path: Path)```

```public func <T> config(key: String, value: T)```

configure the SDK either by supplying a json file located in ../config.json or by directly configuring a key. An example of a json configuration look like this:

```json
{
  "ble": {
    "scan": {
      "duration-msec": 10000,
      "interval-msec": 90000,
      "interval-x-factor": 1
    }
  },
  "dtn": {
    "use-cellular": false
  }
}
```

the following are the table of all the keys available and their description:

|             Key            |                                                   Description                                                  | Default Value |
|:--------------------------:|:--------------------------------------------------------------------------------------------------------------:|:-------------:|
|   ble.scan.duration-msec   | duration of a single ble pass in milliseconds. Longer scan increase battery consumption but gives more reward. |      10000     |
|   ble.scan.interval-msec   | wait time between two ble pass in milliseconds. Longer period reduce battery consumption but gives less reward |     90000     |
| ble.scan.interval-x-factor |                                   multiplier for the ble scan interval above.                                  |       1       |
|      dtn.use-cellular      |           if true, the cellular connexion will be used. if false, only wifi connection will be used.           |      true     |
|      cron.ios-bg-mode      |           If specified, the SDK will run in the specific background mode that it is selected.           |      2     |
|      cron.ios-bg-mode-distance-meters      |           If specified, the SDK will trigger background scans for Normal mode depending on the meters that are specified with this option.           |      20     |
|      cron.ios-infinite-scan      |           if true, the WCB SDK will perform infinite Beacon scanning. If false the WCB SDK won't perform infinite Beacon scannning.            |      false     |   

there is another table that will allow you to configure our SDK background modes. There are 4 available modes: **NONE**, **ECO**, **NORMAL**, **AGGRESSIVE** for the NodleSDK please check them in the table below:

|             Key            |                                                   Description                                                  | Default Value |
|:--------------------------:|:--------------------------------------------------------------------------------------------------------------:|:-------------:|
|   NONE   | The SDK will run in foreground mode only. You don't need to give allowAlways permissions. WhileInUse is enough for this mode. You may wish to only use Background Tasks for this mode.  |      0     |
|   AGGRESSIVE   | The SDK will run in aggressive mode that require all permissions we requested to allowAlways. Then you have to enable Background Modes as well. There is no need to register Background Tasks for this mode. This mode will work even when the phone is with locked screen. This mode will keep the SDK awake without suspending it. Once terminated it won't be able to restore it. |     1     |
| NORMAL |                                   The SDK will run in normal mode that require all permissions we requested to allowAlways since it still runs in the background. Then you have to enable Background Modes as well. This mode will be a bit less aggressive than the previous mode. It will trigger when there are location changes. You can change the distance with the config option. You may wish to combine Background Tasks for this mode. This mode will work even when the phone is with locked screen. This mode will be able to awake the SDK after it's fully suspended. Once terminated it won't be able to restore it.                                  |       2       |
|      ECO      |           The SDK will run in eco mode that require all permissions we requested to allowAlways since it still runs in the background. Then you have to enable Background Modes as well. This mode will provide a very limited background work. It will trigger really rarely in the background. And when there are location changes. You may wish to combine Background Tasks for this mode. This mode will work even when the phone is with locked screen. This mode will be able to awake the SDK after it's fully suspended and even terminated.            |      3     |

Example:

### Swift
```swift
import UIKit
import SwiftCBOR
import SwiftProtobuf
import NodleSDK
import SQLite
import CoreLocation
import CoreBluetooth

// load the json config located in your app folder config.json
let bundle = Foundation.Bundle(identifier: "io.nodle.apptest.AppTest")
        
// path for the file in the project
let path = bundle!.path(forResource: "config", ofType: "json")

// or you can manually set the entries, for instance
Nodle().config("dtn.use-cellular", false);

// background mode selected - foreground only
Nodle().config("cron.ios-bg-mode", 0);

// then proceed to start Nodle
Nodle().start()
```

## Debug Logs API
This API enable the debug logs for the SDK and allows developer to debug on their own and have better visiblity on their application. The default value will be **false** which will output **PRODUCTION** level logs going forward. Here is a sample how to **enable/disable** the API:

```nodle.config(key: "core.debug-log.enable", value: false)```

### PRODUCTION
```kotlin
- Init of the SDK
- Dispatcher event logs from the API
- SDKCore logs
  - init of the core
  - SDK ID 
- Feature logs
  - Bluetooth Scanner lifecycle logs 
    - enabled/disabled
    - success scan log
    - failed scan log
  - Cell Scanner lifecycle logs
    - enabled/disabled
    - scan started
    - scan failed
  - Heartbeat feature logs
    - enabled/disabled
```

### DEBUG
```kotlin
- Init of the SDK
- Dispatcher event logs from the API
- SDKCore logs
  - init of the core
  - current SDK setup dump
  - bundles in the DB
  - SDK ID 
- Feature logs
  - Bluetooth Scanner lifecycle logs 
    - enabled/disabled
    - success scan log
    - each scan item found
    - transmission for bundle
    - failed scan log
  - Cell Scanner lifecycle logs
    - enabled/disabled
    - scan started
    - scan failed
    - transmission for bundle
  - Network feature logs
    - network status log
    - resume bundles logs
    - networking logs over CLA Http 
    - networking bundle transmission logs
  - Heartbeat feature logs
    - enabled/disabled
    - transmission log
    - error logs
  - Location Provider logs
    - waiting for location log
    - saved location fetch log 
    - timeout on location log
    - fresh location fetch log
    - error logs
```   

## Heartbeat API

```public func getHeartbeats() -> Array<NodleHeartbeatRecord?>?```

The following data can be collected from the ```NodleHeartbeatRecord``` each parameter is optional:

|            Key           |                                 Description                                |    Default Value    |
|:------------------------:|:--------------------------------------------------------------------------:|:-------------------:|
|          ```id```          |                      returns hb unique identifier                      |        Int64?       |
|           ```timestamp```           |                 returns the generated timestamp when created                 |         UInt64?         |
|           ```timezone```          |                       returns the device timezone                      |      String?      |
|           ```locationH3```          |                       returns the device last known location in h3 format string                      |      String?      |
|           ```geoHash```          |                       returns the device last known location in geohash format                      |      String?      |
|           ```isBlePermissionsGranted```          |                       returns the device ble permissions granted                      |      Bool?      |
|           ```isLocPermissionsGranted```          |                       returns the device location permissions granted                      |      Bool?      |
|           ```isWifiEnabled```          |                       returns the device wifi module status                      |      Bool?      |
|           ```isCellEnabled```          |                       returns the device cell module status                      |      Bool?      |
|           ```isBluetoothEnabled```          |                       returns the device bluetooth module status                      |      Bool?      |
|           ```sdkVersion```          |                       returns the sdk version                      |      String?      |
|           ```configVersion```          |                       returns the sdk config version                      |      String?      |
|           ```os```          |                       returns the device os                      |      String?      |
|           ```phone```          |                       returns the device model                      |      String?      |
|           ```release```          |                       returns the device release                      |      String?      |
|           ```api```          |                       returns the device api level                      |      String?      |
|           ```hardware```          |                       returns the device hardware name                      |      String?      |
|           ```appName```          |                       returns the app name                      |      String?      |
|           ```battery```          |                       returns the device battery                      |      Int?      |
|           ```charging```          |                       returns the device charging status                      |      Bool?      |
|           ```appInForeground```          |                       returns the app current status                      |      Bool?      |
|           ```phoneStorageTotal```          |                       returns the device total storage                      |      String?      |
|           ```phoneStorageAvailable```          |                       returns the device storage available                      |      String?      |
|           ```sdkStorage```          |                       returns the device storage consumed                      |      String?      |
|           ```httpIn```          |                       returns the sdk http input                      |      String?      |
|           ```httpOut```          |                       returns the sdk http output                      |      String?      |
|           ```bundleRxCount```          |                       returns the DTN RX                      |      Int?      |
|           ```bundleTxCount```          |                       returns the DTN TX                      |      Int?      |
|           ```bleScanSuccess```          |                       returns the BLE Scan success count                      |      Int?      |
|           ```bleScanFailed```          |                       returns the BLE Failed count                      |      Int?      |
|           ```blePayloadCount```          |                       returns the BLE payload found                      |      Int?      |
|           ```buildType```          |                       returns the buildType of the SDK                      |      String?      |

The HB API will provide a history of the heartbeats being generated by the SDK. It will always add the latest HB on top of the list being sorted by the timestamp. When there is a new heartbeat it will take the 0 element in the array. Here is a sample how to **increase/decrease** the storage size and be able to fetch all the heartbeats:

```nodle.config(key: "core.heartbeat.history", value: 100)```

### Swift
```swift
nodle.getHeartbeats()?.forEach { it in
    print("Heartbeat: \(String(describing: it))")
}
```   

## H3 API

```public func getH3() -> H3?```

Return the H3 instance exposing the H3 library methods to be used by the developer:

| Returns |                                                              |
|:----------:|:------------------------------------------------------------:|
|   ```H3```  | Returns H3Core  |

The H3 interface with all the methods that the developer can take advantage is defined below:

|            Method           |                                 Description                                |    Return Value    |
|:------------------------:|:--------------------------------------------------------------------------:|:-------------------:|
|          ```h3IsValid(h3: Int64)```          |                      Returns true if the h3 index is valid                    |        Bool       |
|          ```h3IsValid(h3Address: String)```          |                      Returns true if the h3 index is valid                    |        Bool       |
|          ```h3GetBaseCell(h3: Int64)```          |                      Returns the base cell number for the index                    |        Int       |
|          ```h3GetBaseCell(h3Address: String)```          |                      Returns the base cell number for the index                    |        Int       |
|          ```h3IsPentagon(h3: Int64)```          |                      Returns true if this index is one of the twelve pentagons per resolution                    |        Bool       |
|          ```h3IsPentagon(h3Address: String)```          |                      Returns true if this index is one of the twelve pentagons per resolution                    |        Bool       |
|          ```geoToH3(lat: Double, lng: Double, res: Int)```          |                      Find the H3 index of the resolution res cell containing the lat/lon (in degrees) returns h3 index                    |        Int64       |
|          ```geoToH3Address(lat: Double, lng: Double, res: Int)```          |                      Find the H3 index of the resolution res cell containing the lat/lon (in degrees) returns H3 index                    |        String       |
|          ```h3ToGeo(h3: Int64)```          |                      Find the latitude, longitude (both in degrees) center point of the cell.                    |        ```(NodleLat, NodleLng)```       |
|          ```h3ToGeo(h3Address: String)```          |                      Find the latitude, longitude (degrees) center point of the cell.                    |        ```(NodleLat, NodleLng)```       |
|          ```h3ToGeoBoundary(h3: Int64)```          |                      Find the cell boundary in latitude, longitude (degrees) coordinates for the cell                    |        ```Array<(NodleLat, NodleLng)>```       |
|          ```h3ToGeoBoundary(h3Address: String)```          |                      Find the cell boundary in latitude, longitude (degrees) coordinates for the cell                    |        ```Array<(NodleLat, NodleLng)>```       |
|          ```kRing(h3Address: String?, k: Int)```          |                      Neighboring indexes in all directions h3Address – Origin index k – Number of rings around the origin                    |        ```Array<String?>?```       |
|          ```kRing(h3: Int64, k: Int)```          |                      Neighboring indexes in all directions h3Address – Origin index k – Number of rings around the origin                    |        ```Array<Int64>```       |
|          ```h3Distance(a: String?, b: String?)```          |                      Returns the distance between a and b. This is the grid distance, or distance expressed in number of H3 cells.                    |        Int       |
|          ```h3Distance(a: Int64, b: Int64)```          |                      Returns the distance between a and b. This is the grid distance, or distance expressed in number of H3 cells.                    |        Int       |
|          ```h3Line(startAddress: String?, endAddress: String?)```          |                      Given two H3 indexes, return the line of indexes between them (inclusive of endpoints).                    |        ```Array<String?>?```       |
|          ```h3Line(start: Int64, end: Int64)```          |                      Given two H3 indexes, return the line of indexes between them (inclusive of endpoints).                    |        ```Array<Int64>```       |
|          ```h3GetResolution(h3Address: String?)```          |                      Returns the resolution of the provided index                    |        Int       |
|          ```h3GetResolution(h3: Int64)```          |                      Returns the resolution of the provided index                    |        Int       |
|          ```h3ToString(h3: Int64)```          |                      Converts from long representation of an index to String representation.                    |        String?       |
|          ```stringToH3(h3Address: String?)```          |                      Converts from String representation of an index to long representation.                    |        Int64       |
|          ```numHexagons(res: Int)```          |                      Returns the number of unique H3 indexes at resolution res.                    |        Int64       |

### Swift
```swift
nodle.getH3()?.h3ToGeo(h3Address: "8a1eebbb461ffff")
```