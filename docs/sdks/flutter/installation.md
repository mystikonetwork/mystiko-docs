---
title: Installation
---

# Flutter SDKs

Mystiko integrates its Rust SDK with Flutter using [flutter_rust_bridge](https://github.com/fzyzcjy/flutter_rust_bridge), enabling Flutter to support all general methods of Mystiko.

## Started
Update pubspec.yaml to include the mystiko-flutter Dependencies.
:::note IMPORTANT
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
Run the following command to install dependencies:
```bash
flutter pub get
```

## Next Steps

Now that you've installed Mystiko-Flutter deps, you're ready to start integrating it. The next section will walk you through the process of setting up your project to use the SDK.
