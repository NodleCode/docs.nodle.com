---
sidebar_position: 8
---

# iOS SDK - Changelog

In this page you can find our latest releases and the changes that are being done in the new and old versions of the SDKs for iOS

## Version 0.0.21 (17.07.2023) - iOS SDK - TBA
### Added
- Increased the overall stability of the SDK 
- Prevented false positive checks from the security layer that caused memory leaks
- Prevented potential crash that happen from the memory leaks in the Bluetooth,Network layer
- We have added Hotfixes around the codebase after we have received crash reports to improve stability on the following locations around the SDK:
    - Prevented a crash after the SDK performs a succesful scan and passing records to getEvents API
    - Prevented a crash where the Location Manager would receive bad location 
    - Prevented a crash where our Beacon Scanner instance could be nullable before performing a scan
    - Prevented a crash on the condition where the permissions checks could be empty for our Beacon Manager 
    - Prevented a potential crash where the Beacon payloads could be corrupted and still passed forward to the internals of the SDK
    - Prevented a crash where the beacon uuids could be invalid before starting/stopping monitoring
    - Prevented a crash where the beacon regions were in range
    - Prevented potential crash when receiving data from inbox/outbox in the Network layer
    - Prevented the SDK from crashing randomly by depracating the Background Task API
- Awake API base
    - Allow the developer to be able to restart the NodleSDK after their application is being terminated by setup the following methods:    
        - `nodleLocationManager.restartNodleInTerminatedState { result in }`
- Infinite Scanning option
    - Allow the developer to be able to configure the WCB SDK in a way that will enable them to do infinite scan without the need for the manager to stop/start and do the SDK rotation by using the following method: 
        - `nodle.config(key: "cron.ios-infinite-scan", value: true)`
- HB API which can be used by developers to retrieve the last heartbeats that have been produced by their SDK:
  - `nodle.config(key: "core.heartbeat.history", value: 100)`
- H3 API which can be used by developers to use the Uber H3 Library features safely
- Debug Logs API that will allow the developers to debug their own SDK with two log levels PRODUCTION/DEBUG:
  - `nodle.config(key: "core.debug-log.enable", value: true)`
- Improved and extented capabilities for background mode scanning which will improve the overall capabilities of the SDK and the network
- Improved and extended capabilities for beacon scanning on CoreBluetooth variation of the SDK


### Fixed
- Fixed a issue with H3 causing buffer overflow for some swift runtimes
- Fixed a issue where H3 was causing a heap use after free for some swift runtimes
- Fixed a memory leaks caused by H3 module and swift runtimes
- Fixed a memory leaks caused by the security layer in the H3 module
- Fixed a memory leaks caused by the security layer in the Bluetooth, Network layer
- Fixed a issue where the SDK won't update the last known location all the time

### Updated
- Security to latest version with last hardened protection mechanisms
- Suspended AwakeAPI until the stability of the SDK is back on track
- Update access modifiers for NodleLocationManager in order the developer to be able to init at application level and take advantage of the AwakeAPI
- Update Beacon Scanner logic to be able to scan infinitely
- Updated config so the developer can enable/disable the infinite scanning

### Removed
- We have deprecated the Background Task API due receiving crash reports from clients and minimum value that the API capabilities brought to the network

## Version 0.0.16 (05.12.2022) - iOS SDK
### Added
- Added XCode 14 support 
- Added better error handling around the SDK
### Updated
- Updated security layer
### Fixed
- Fixed a critical issue with Location layer
- Fixed issues with Network, Bluetooth, Config, DB, Location

## Version 0.0.15 (26.09.2022) - iOS SDK
### Added
- Swift 5.7 support
### Fixed
- Fixed issues with background modes capabilities not being added by the developer
- Fixed crashes in SDK Core initialization
- Fixed crashes in Network, Bluetooth, Config, Location layer

## Version 0.0.14 (11.07.2022) - iOS SDK
### Added
- Security updates
### Fixed
- Issues with background work
- Issues with background modes
- Issues with location providers
- Issues with config
- Issues with network
### Removed
- We are deprecating MacOS support and catalyst in the future versions of our SDK

## Version 0.0.13 (12.04.2022) - iOS SDK
### Added
- Background capabilities
- Background modes
### Fixed
- Performance improvements
### Updated
- Config options