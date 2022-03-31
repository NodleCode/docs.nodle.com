---
sidebar_position: 2
---

# Android SDK - API and Configuration
The SDK receives configuration remotely from Nodle servers as well as statically using API calls. The static configuration always takes precedence over the remote configuration.

## Nodle SDK Api
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
|   ble.scan.duration-msec   | duration of a single ble pass in milliseconds. Longer scan increase battery consumption but gives more reward. |      8000     |
|   ble.scan.interval-msec   | wait time between two ble pass in milliseconds. Longer period reduce battery consumption but gives less reward |     50000     |
| ble.scan.interval-x-factor |                                   multiplier for the ble scan interval above.                                  |       1       |
|      dtn.use-cellular      |           if true, the cellular connexion will be used. if false, only wifi connection will be used.           |      true     |
|      sentry.enabled      |           if true, our crash reporting will send us crash reports. If false there will be no crash reports to send.            |      true     |

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
```   