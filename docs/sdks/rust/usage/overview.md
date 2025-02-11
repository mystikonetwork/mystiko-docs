---
title: Overview
---

This section provides examples on how to initialize the Mystiko API, along with an introduction to the modules of the Mystiko API and descriptions of their methods, to help you integrate it more effectively into your app.

## Initialization
```rust
use mystiko_lib::{initialize, is_initialized};
use mystiko_protos::api::v1::StatusCode;
use mystiko_protos::common::v1::ConfigOptions;
use mystiko_protos::core::v1::MystikoOptions;

let options = MystikoOptions::builder()
    .config_options(ConfigOptions::builder().is_testnet(true).build())
    .relayer_client_options(RelayerClientOptions::builder().is_testnet(true).build())
    .build();
let response = initialize(options);
match response.code {
    Some(StatusCode { success: true, .. }) => {
        if is_initialized() {
            info!("Initialized successfully");
        } else {
            error!("Failed to initialize");
        }
    }
    Some(StatusCode {
        success: false,
        error: Some(err),
        ..
    }) => {
        error!("Failed to initialize: {:?}", err);
    }
    _ => {
        error!("Failed to initialize");
    }
}
```
The API is divided into multiple modules, including: `config`, `wallet`, `account`, `deposit`, `spend`, `scanner`, `synchronizer`. You can obtain the corresponding API object for each module using the following methods:

_**mystiko must be initialized before using the API.**_

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
