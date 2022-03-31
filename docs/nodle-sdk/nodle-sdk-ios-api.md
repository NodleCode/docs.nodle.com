---
sidebar_position: 5
---

# iOS SDK - API and Configuration
The SDK receives configuration remotely from Nodle servers as well as statically using API calls. The static configuration always takes precedence over the remote configuration.

## Nodle SDK Api
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
|   ble.scan.duration-msec   | duration of a single ble pass in milliseconds. Longer scan increase battery consumption but gives more reward. |      8000     |
|   ble.scan.interval-msec   | wait time between two ble pass in milliseconds. Longer period reduce battery consumption but gives less reward |     50000     |
| ble.scan.interval-x-factor |                                   multiplier for the ble scan interval above.                                  |       1       |
|      dtn.use-cellular      |           if true, the cellular connexion will be used. if false, only wifi connection will be used.           |      true     |

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
```