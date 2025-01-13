---
title: Overview
---

This section provides examples on how to initialize the Mystiko API, along with an introduction to the modules of the Mystiko API and descriptions of their methods, to help you integrate it more effectively into your app.

## Initialization
```node
import mystiko from '@mystikonetwork/node';
import { core, common } from '@mystikonetwork/protos';

// Configure Mystiko options
const options = new core.v1.MystikoOptions({
  configOptions: new common.v1.ConfigOptions({
    isTestnet: false,
  }),
  dbPath: `./db/mystiko`,
  staticCachePath: './cache',
});

// Initialize Mystiko and validate initialization
try {
  mystiko.initialize(options);
  if (!mystiko.isInitialized()) {
    throw new Error('Mystiko initialization failed');
  }
} catch (error) {
  console.error('Error initializing Mystiko:', error);
  throw error;
}
```
The API is divided into multiple modules, including: `config`, `wallet`, `account`, `deposit`, `spend`, `scanner`, `synchronizer`. You can obtain the corresponding API object for each module using the following methods:

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
