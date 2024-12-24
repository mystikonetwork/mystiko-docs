---
title: Overview
---

# Flutter SDKs

Mystiko integrates its Rust SDK with Flutter using [flutter_rust_bridge](https://github.com/fzyzcjy/flutter_rust_bridge), enabling Flutter to support all general methods of Mystiko.

## Installation
Update pubspec.yaml to include the mystiko-flutter Dependencies.
:::warning
The version in the documentation might not be the latest. To get the most up-to-date version information, you can check the Git repository [mystiko-flutter](https://github.com/mystikonetwork/mystiko-flutter/releases). You are free to choose the version you want to use.
:::
```yaml
dependencies:
    mystiko_flutter:
        git:
          url: git@github.com:mystikonetwork/mystiko-flutter.git
          path: packages/mystiko_flutter
          ref: v0.1.0
```
