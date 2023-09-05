---
sidebar_position: 2
---

# Android SDK - API and Configuration
The SDK receives configuration remotely from Nodle servers as well as statically using API calls. The static configuration always takes precedence over the remote configuration.

## Nodle SDK API
To interact with the SDK you need to call the ```Nodle()``` method that will give you an Instance of the **INodle** class. The following are all the public methods for the Nodle API.

### Java
```java
import static io.nodle.sdk.android.Nodle.Nodle;

INodle nodle = Nodle();
```

### Kotlin
```kotlin
import io.nodle.sdk.android.Nodle.Nodle

val nodle = Nodle()
```

## init

```public fun init(context: Context)```

Initialize the Nodle SDK

| Parameters |                                                              |
|:----------:|:------------------------------------------------------------:|
|   ```context```  | A Context of the application. This value must never be null. |

Example:

### Java
```java
Nodle.init(this);
```

### Kotlin
```kotlin
Nodle.init(this)
```

## start

```public fun start(public_key: String)```

Immediately starts the Nodle SDK

| Parameters |                                                              |
|:----------:|:------------------------------------------------------------:|
|   ```public_key```  | The application **public_key** created in Step 1 |

Example:

### Java
```java
Nodle().start("ss58:public_key");
```

### Kotlin
```kotlin
Nodle().start("ss58:public_key")
```

## isStarted

```public fun isStarted(): Boolean```

Checks if the Nodle SDK is started

| Parameters |                                                              |
|:----------:|:------------------------------------------------------------:|
|   ```boolean```  | **true** if the Nodle SDK is started, **false** otherwise |

Example:

### Java
```java
Boolean sdkStarted = Nodle().isStarted()
```

### Kotlin
```kotlin
val sdkStarted = Nodle().isStarted()
```

## isScanning

```public fun isScanning(): Boolean```

Checks if the Nodle SDK is currently scanning the BLE neighborhood. This is useful if you want to show that the SDK is working.

| Parameters |                                                              |
|:----------:|:------------------------------------------------------------:|
|   ```boolean```  | **true** if the Nodle SDK is scanning, **false** otherwise |

Example:

### Java
```java
Boolean sdkScanning = Nodle().isScanning()
```

### Kotlin
```kotlin
val sdkScanning = Nodle().isScanning()
```

## stop

```public fun stop()``

Immediately stops the Nodle SDK

Example:

### Java
```java
Nodle().stop();
```

### Kotlin
```kotlin
Nodle().stop()
```

## clear

```public fun clear()``

Clear any configs by Nodle SDK   

Example:

### Java
```java
Nodle().clear();
```

### Kotlin
```kotlin
Nodle().clear()
```

## getVersion

```public fun getVersion(): String```

Get the version identifier of the Nodle SDK.

| Parameters |                                                              |
|:----------:|:------------------------------------------------------------:|
|   ```String```  | the current version of the Nodle SDK |

Example:

### Java
```java
String nodleSdkVersion = Nodle().getVersion();
```

### Kotlin
```kotlin
val nodleSdkVersion = Nodle().getVersion()
```   

## getEvents

```public fun getEvents(): NodleEvent```

Get the raw bluetooth events from the Nodle SDK with the following type:

| Returns |                                                              |
|:----------:|:------------------------------------------------------------:|
|   ```NodleEventType.BlePayloadEvent```  | Returns NodleBluetoothScanRecord  |
|   ```NodleEventType.BleStartSearching```  | Returns NodleBluetoothEvent |
|   ```NodleEventType.BleStopSearching```  | Returns NodleBluetoothEvent |

Example of available return event classes below:

| Returns |                                                              |
|:----------:|:------------------------------------------------------------:|
|   ```NodleBluetoothScanRecord```  | Raw Bluetooth Record from Nodle SDK   |
|   ```NodleBluetoothEvent```  | Bluetooth Event when the SDK start/stop |

Example:

### Java
```java
BuildersKt.launch(GlobalScope.INSTANCE, (CoroutineContext) Dispatchers.getMain(), CoroutineStart.DEFAULT,
    (Function2<CoroutineScope, Continuation<? super Unit>, Unit>) (coroutineScope, continuation) -> {
        // start collecting events
        nodle.getEvents().collect(new NodleCollector(), new NodleContinuation());
        return Unit.INSTANCE;
    }
);
```

Example Nodle Collector for Java:
```java
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import io.nodle.sdk.NodleEvent;
import io.nodle.sdk.core.actions.events.NodleBluetoothRecord;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlinx.coroutines.flow.FlowCollector;

public class NodleCollector implements FlowCollector<NodleEvent> {
    @Nullable
    @Override
    public Object emit(NodleEvent nodleEvent, @NonNull Continuation<? super Unit> continuation) {
        switch (nodleEvent.getType()) {
            case BlePayloadEvent:
                NodleBluetoothRecord payload = (NodleBluetoothRecord) nodleEvent;
                System.out.println("Bluetooth payload available: " + payload.getDevice());
                break;
            case BleStartSearching:
                System.out.println("Bluetooth started searching");
                break;
            case BleStopSearching:
                System.out.println("Bluetooth stop searching");
                break;
        }
        return nodleEvent;
    }
}
```

Example Nodle Continuation for Java:
```java
import androidx.annotation.NonNull;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.EmptyCoroutineContext;

public class NodleContinuation implements Continuation {
    @NonNull
    @Override
    public CoroutineContext getContext() {
        // pass an empty instance or one that you need
        return EmptyCoroutineContext.INSTANCE;
    }

    @Override
    public void resumeWith(@NonNull Object o) {
        // provide a base implementation if you need
    }
}
```

### Kotlin
```kotlin
Nodle().getEvents().collect { event ->
    // collect the NodleEvents events here by chosing a type
    when (event.type) {
        NodleEventType.BlePayloadEvent -> handlePayload(it)
        NodleEventType.BleStartSearching -> println("Bluetooth started searching")
        NodleEventType.BleStopSearching -> println("Bluetooth stopped searching")
    }
}

fun handlePayload(payload: NodleEvent) {
    val data = payload as NodleBluetoothScanRecord
    println("Bluetooth payload available ${data.device} ")
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
|           ```bytes```          |                       returns raw bytes of the record                      |      ByteArray      |
| ```manufacturerSpecificData``` | returns the manufacturer specific data associated with the manufacturer id | ```Map<Int, ByteArray>``` |
|       ```servicesUuids```      |        returns an array of services UUID's within the advertisement        |      ```List<UUID>```     |

The following data can be collected from the ```NodleBluetoothEvent```:

|   **Key**   |                          **Description**                        | Default Value |
|:-------:|:------------------------------------------------------------:|:-------------:|
| ```scanning``` | returns bluetooth scanning state |      Boolean         |

## config

```public fun config(resourceId: AndroidNodleResourceId)```

```public fun <T> config(key: String, value: T)```

configure the SDK either by supplying a json file located in res/raw/config.json or by directly configuring a key. An example of a json configuration look like this:

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
|      dtn.use-cellular      |           if true, the cellular connection will be used. if false, only wifi connection will be used.           |      true     |
|      heartbeat.background-mode      |           if true, the SDK will be able to continue to operate when in the background. If false the SDK will eventually stop after a while.            |      false     |
|      ble.background-mode      |           if true, the SDK will perform additional BLE scanning even when in the background. If false the SDK won't perform additional BLE scannning.            |      false     |

Example:

### Java
```java
import io.nodle.sdk.android.common.config.AndroidNodleResourceId;

// load the json config located in res/raw/config.json
Nodle().config(AndroidNodleResourceId(R.raw.sdk_config));

// or you can manually set the entries, for instance
Nodle().config("dtn.use-cellular", false);
```

### Kotlin
```kotlin
import io.nodle.sdk.android.common.config.AndroidNodleResourceId

// load the json config located in res/raw/config.json
Nodle().config(AndroidNodleResourceId(R.raw.sdk_config))

// or you can manually set the entries, for instance
Nodle().config("dtn.use-cellular", false)

// then proceed to start Nodle
Nodle().start()
```   

## Debug Logs API
This API enable the debug logs for the SDK and allows developer to debug on their own and have better visiblity on their application. The default value will be **false** which will output **PRODUCTION** level logs going forward. Here is a sample how to **enable/disable** the API:

```Nodle.Nodle().config("core.debug-log.enable", true)```

### PRODUCTION
```kotlin
- Init of the SDK
- Coroutine event logs from the API 
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
- Coroutine event logs from the API
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

```public fun getHeartbeats(): List<NodleHeartbeatRecord?>?```

The following data can be collected from the ```NodleHeartbeatRecord``` each parameter is optional:

|            Key           |                                 Description                                |    Default Value    |
|:------------------------:|:--------------------------------------------------------------------------:|:-------------------:|
|          ```id```          |                      returns hb unique identifier                      |        Long?       |
|           ```timestamp```           |                 returns the generated timestamp when created                 |         Int?         |
|           ```timezone```          |                       returns the device timezone                      |      String?      |
|           ```locationH3```          |                       returns the device last known location in h3 format string                      |      String?      |
|           ```geoHash```          |                       returns the device last known location in geohash format                      |      String?      |
|           ```isBlePermissionsGranted```          |                       returns the device ble permissions granted                      |      Boolean?      |
|           ```isLocPermissionsGranted```          |                       returns the device location permissions granted                      |      Boolean?      |
|           ```isWifiEnabled```          |                       returns the device wifi module status                      |      Boolean?      |
|           ```isCellEnabled```          |                       returns the device cell module status                      |      Boolean?      |
|           ```isBluetoothEnabled```          |                       returns the device bluetooth module status                      |      Boolean?      |
|           ```sdkVersion```          |                       returns the sdk version                      |      String?      |
|           ```configVersion```          |                       returns the sdk config version                      |      String?      |
|           ```os```          |                       returns the device os                      |      String?      |
|           ```phone```          |                       returns the device model                      |      String?      |
|           ```release```          |                       returns the device release                      |      String?      |
|           ```api```          |                       returns the device api level                      |      String?      |
|           ```hardware```          |                       returns the device hardware name                      |      String?      |
|           ```appName```          |                       returns the app name                      |      String?      |
|           ```battery```          |                       returns the device battery                      |      Int?      |
|           ```charging```          |                       returns the device charging status                      |      Boolean?      |
|           ```appInForeground```          |                       returns the app current status                      |      Boolean?      |
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
|           ```developerMode```          |                       returns the device developer mode status                      |      Boolean?      |

The HB API will provide a history of the heartbeats being generated by the SDK. It will always add the latest HB on top of the list being sorted by the timestamp. When there is a new heartbeat it will take the 0 element in the array. Here is a sample how to **increase/decrease** the storage size and be able to fetch all the heartbeats:

```Nodle.Nodle().config("core.heartbeat.history", 100f)```

### Java
```java
Nodle.Nodle().getHeartbeats()?.forEach {
    println("Nodle HB:  $it")
}
```

### Kotlin
```kotlin
Nodle.Nodle().heartbeats?.forEach {
    println("Nodle HB:  $it")
}
```   

## H3 API

```public fun fun getH3(): H3?```

Return the H3 instance exposing the H3 library methods to be used by the developer:

| Returns |                                                              |
|:----------:|:------------------------------------------------------------:|
|   ```H3```  | Returns H3Core  |

The H3 interface with all the methods that the developer can take advantage is defined below:

|            Method           |                                 Description                                |    Return Value    |
|:------------------------:|:--------------------------------------------------------------------------:|:-------------------:|
|          ```h3IsValid(h3: Long)```          |                      Returns true if the h3 index is valid                    |        Boolean       |
|          ```h3IsValid(h3Address: String)```          |                      Returns true if the h3 index is valid                    |        Boolean       |
|          ```h3GetBaseCell(h3: Long)```          |                      Returns the base cell number for the index                    |        Int       |
|          ```h3GetBaseCell(h3Address: String)```          |                      Returns the base cell number for the index                    |        Int       |
|          ```h3IsPentagon(h3: Long)```          |                      Returns true if this index is one of the twelve pentagons per resolution                    |        Boolean       |
|          ```h3IsPentagon(h3Address: String)```          |                      Returns true if this index is one of the twelve pentagons per resolution                    |        Boolean       |
|          ```geoToH3(lat: Double, lng: Double, res: Int)```          |                      Find the H3 index of the resolution res cell containing the lat/lon (in degrees) returns h3 index                    |        Long       |
|          ```geoToH3Address(lat: Double, lng: Double, res: Int)```          |                      Find the H3 index of the resolution res cell containing the lat/lon (in degrees) returns H3 index                    |        String       |
|          ```h3ToGeo(h3: Long)```          |                      Find the latitude, longitude (both in degrees) center point of the cell.                    |        ```Pair<NodleLat, NodleLng>```       |
|          ```h3ToGeo(h3Address: String)```          |                      Find the latitude, longitude (degrees) center point of the cell.                    |        ```Pair<NodleLat, NodleLng>```       |
|          ```h3ToGeoBoundary(h3: Long)```          |                      Find the cell boundary in latitude, longitude (degrees) coordinates for the cell                    |        ```List<Pair<NodleLat, NodleLng>>```       |
|          ```h3ToGeoBoundary(h3Address: String)```          |                      Find the cell boundary in latitude, longitude (degrees) coordinates for the cell                    |        ```List<Pair<NodleLat, NodleLng>>```       |
|          ```kRing(h3Address: String?, k: Int)```          |                      Neighboring indexes in all directions h3Address – Origin index k – Number of rings around the origin                    |        ```List<String?>?```       |
|          ```kRing(h3: Long, k: Int)```          |                      Neighboring indexes in all directions h3Address – Origin index k – Number of rings around the origin                    |        ```List<Long>```       |
|          ```kRings(h3Address: String, k: Int)```          |                      Neighboring indexes in all directions h3Address – Origin index k – Number of rings around the origin                    |        ```List<List<String?>?>?```       |
|          ```h3Distance(a: String?, b: String?)```          |                      Returns the distance between a and b. This is the grid distance, or distance expressed in number of H3 cells.                    |        Int       |
|          ```h3Distance(a: Long, b: Long)```          |                      Returns the distance between a and b. This is the grid distance, or distance expressed in number of H3 cells.                    |        Int       |
|          ```h3Line(startAddress: String?, endAddress: String?)```          |                      Given two H3 indexes, return the line of indexes between them (inclusive of endpoints).                    |        ```List<String?>?```       |
|          ```h3Line(start: Long, end: Long)```          |                      Given two H3 indexes, return the line of indexes between them (inclusive of endpoints).                    |        ```List<Long>```       |
|          ```h3GetResolution(h3Address: String?)```          |                      Returns the resolution of the provided index                    |        Int       |
|          ```h3GetResolution(h3: Long)```          |                      Returns the resolution of the provided index                    |        Int       |
|          ```h3ToString(h3: Long)```          |                      Converts from long representation of an index to String representation.                    |        String?       |
|          ```stringToH3(h3Address: String?)```          |                      Converts from String representation of an index to long representation.                    |        Long       |
|          ```numHexagons(res: Int)```          |                      Returns the number of unique H3 indexes at resolution res.                    |        Long       |

### Java
```java
Nodle.Nodle().h3?.h3ToGeo("8a1eebbb461ffff")
```

### Kotlin
```kotlin
Nodle.Nodle().h3?.h3ToGeo("8a1eebbb461ffff")
```   