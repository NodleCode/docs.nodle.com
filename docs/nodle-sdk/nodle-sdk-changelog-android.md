---
sidebar_position: 4
---

# Android SDK - Changelog

In this page you can find our latest releases and the changes that are being done in the new and old versions of the SDKs for Android

## Version 0.0.18 (17.07.2023) - Android SDK - 57f6eec4c0
### Added
- HB API which can be used by developers to retrieve the last heartbeats that have been produced by their SDK:
  - `Nodle.Nodle().config("core.heartbeat.history", 100f)`
- H3 API which can be used by developers to use the Uber H3 Library features safely
- Debug Logs API that will allow the developers to debug their own SDK with two log levels PRODUCTION/DEBUG:
  - `Nodle.Nodle().config("core.debug-log.enable", false)`
- Improved and extented capabilities for background mode scanning which will improve the overall capabilities of the SDK and the network
- Added further configuration to allow developers to improve the background lifecycle and enable/disable the SDK to always be active: 
  - `Nodle.Nodle().config("heartbeat.background-mode", false)`
- Added further configuration to allow developers to improve their background scanning process even while in Doze mode: 
  - `Nodle.Nodle().config("ble.background-mode", false)`
### Fixed
- Fixed a issue where the SDK won't update the last known location all the time
- Fixed a issue where network configuration for the developer could cause issues and prevent the SDK to send payloads because of false positives
- Fixed a issue where some Android 8 phone GPS stack is broken when trying to retrive location - LG build only
### Updated
- Google Play Services minimum version to 21 - LP build only
- Prevent the SDK from running two instances in multiple applications on the same phone
- Security patches and adjustments to ensure latest protection mechanisms are added
- Security patches to ensure stability and false positives
- Security updates to latest version
### SHA
- 00574bbf5ac50a0043f5aed7e0eaa8fc81d2db67 - LP
- eae0238019c694f2d43dd23f64bd6b99497a57f1 - LG

## Version 0.0.15 (03.03.2023) - Android SDK - 6a50b7b008
### Updated
- Updated BLE permissions checks with latest recommendations from Android Developer team
- Updated BLE manifest changes required from the Android Developer team to handle maxSDK 30 
- Google Play Services minimum version to 19 - LP build only
### SHA
- c70f2d9babd9d616d8817e0591cce19c5e4bc9c8 - LP
- aaa1c11a5eb5ee3ab33b1c79742352ca1b5b065a - LG

## Version 0.0.14 (10.10.2022) - Android SDK - e61c593b4d
### Fixed
- Fixed compile time issues causing issues with some client dependencies
### SHA
- 8d7d75b3896bfde842962d64964ca3aa00460488 - LP
- 7b74974d55f228506d5641691688fb9c500b62be - LG

## Version 0.0.13 (26.09.2022) - Android SDK - 95a5b4f577
### Fixed
- Performance improvements and optimizations
### Updated
- Updated internal libraries
- Updated consumer rules

## Version 0.0.12 (19.07.2022) - Android SDK - 5b978643ad
### Fixed
- Issues when generating release builds requiring additional rules
### Updated
- Updated internal libraries to latest versions
- Updated kotlin and dependencies to 1.6.21
- Updated gradle to latest versions 7.1.3+

## Version 0.0.11 (11.07.2022) - Android SDK - a790f76ea5
### Added
- Security updates
### Fixed
- Issues with config
- Issues with network
### Updated
- Updated internal libraries 
- Updated Maven repository - http://maven.nodle.io

## Version 0.0.10 (12.04.2022) - Android SDK - 381d19b7b5
### Added
- Config features
### Fixed
- Issues with config
- Issues with telemetry
### Updated
- Internal changes
