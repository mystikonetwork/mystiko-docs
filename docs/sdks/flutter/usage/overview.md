---
title: Overview
---

This section provides examples on how to initialize the Mystiko API, along with an introduction to the modules of the Mystiko API and descriptions of their methods, to help you integrate it more effectively into your app.

## Initialization
```dart
import 'package:mystiko_flutter/mystiko_flutter.dart';

// First you need to instantiate an object
MystikoApi api = await Mystiko.mystikoApi();

// initialize
Response<void, MystikoError> response = await api.initialize(
    MystikoOptions(configOptions: ConfigOptions(isTestnet: true)));

// Start a gRPC server for Rust callbacks
await Mystiko.startGrpcServer(GrpcServerOptions(
    port: port, // Define a port for the gRPC server
    getAddressFunc: getAddressFunc, // Method to get the user's address
    sendTransactionFunc: sendTransactionFunc, // Method to send transactions
    personalSignFunc: personalSignFunc, // Method for wallet signing
));
```
The API is divided into multiple modules, including: `account`, `config`, `deposit`, `scanner`, `spend`, `synchronizer`, `wallet`. You can obtain the corresponding API object for each module using the following methods:
```dart
MystikoAccountApi account = await Mystiko.mystikoAccountApi();

MystikoConfigApi config = await Mystiko.mystikoConfigApi();

MystikoDepositApi deposit = await Mystiko.mystikoDepositApi();

MystikoScannerApi scanner = await Mystiko.mystikoScannerApi();

MystikoSpendApi spend = await Mystiko.mystikoSpendApi();

MystikoSynchronizerApi synchronizer = await Mystiko.mystikoSynchronizerApi();

MystikoWalletApi wallet = await Mystiko.mystikoWalletApi();
```

## Modules

Links to sections on this page to view detailed method descriptions.

- [Config](./config):
  Configuration of Mystiko environment parameters.
- [Wallet](./wallet):
  Methods related to the Mystiko wallet.
- [Account](./account):
  Methods related to Mystiko accounts.
- [Deposit](./deposit):
  A series of methods for completing user deposits.
- [Spend](./spend):
  Methods for managing spending.
- [Scanner](./scanner):
  Methods for scanning and updating data.
- [Synchronizer](./synchronizer):
  Synchronization methods.
