---
title: Overview
---

This section provides examples on how to initialize the Mystiko API, along with an introduction to the modules of the Mystiko API and descriptions of their methods, to help you integrate it more effectively into your app.

## Initialization
```javascript
import mystiko from '@mystikonetwork/browser'

try {
  await mystiko.initialize({
      isTestnet: false,
      isStaging: false,
  });
} catch (error) {
  console.error('Error initializing Mystiko:', error);
  throw error;
}
```
The API is divided into multiple modules, including: `config`, `wallet`, `account`, `deposit`, `spend`, `synchronizer`. You can obtain the corresponding API object for each module using the following methods:

_**mystiko must be initialized before using the API.**_

```javascript
## Modules

Links to sections on this page to view detailed method descriptions.

- [Config](./config):
  Configuration of Mystiko environment parameters.
- [Wallet](./wallet):
  Methods related to the Mystiko wallet.
- [Account](./account):
  Methods related to Mystiko accounts.
- [Asset](./asset):
  Methods for managing asset.
- [Deposit](./deposit):
  A series of methods for completing user deposits.
- [Spend](./spend):
  Methods for managing spending.
- [Synchronizer](./synchronizer):
  Synchronization methods.
