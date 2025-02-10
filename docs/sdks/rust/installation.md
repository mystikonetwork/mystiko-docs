---
title: Installation
---

# Mystiko Rust SDKs

Mystiko Rust library provides support for all general methods of Mystiko. It allows developers to seamlessly integrate Mystiko’s functionalities into their Rust applications. The library simplifies complex operations, enabling efficient implementation of Mystiko features.

## Started
Install the Mystiko Rust SDKs by adding the following dependencies to your `Cargo.toml` file:
```bash
mystiko_config = { 
    git = "ssh://git@github.com/mystikonetwork/mystiko-static-config.git", 
    features = [
        "fs",
    ] 
}
mystiko_protos = { 
    git = "ssh://git@github.com/mystikonetwork/mystiko-rust.git", 
    default-features = false,
    features = [
        "mystiko-common-v1", 
        "mystiko-core-document-v1", 
        "mystiko-core-v1", 
        "mystiko-api-config-v1", 
        "mystiko-api-handler-v1", 
        "mystiko-api-v1", 
        "mystiko-api-scanner-v1", 
        "mystiko-api-synchronizer-v1"
    ] 
}
mystiko_lib = { 
    git = "ssh://git@github.com/mystikonetwork/mystiko-rust.git" 
}
```

## Next Steps

Now that you've installed Mystiko Rust deps, you're ready to start integrating it. The next section will walk you through the process of setting up your project to use the SDK.
