---
title: Overview
---

# Gas Relayer

The Gas Relayer acts as a third party to assist users in submitting Withdraw transactions, enhancing convenience and privacy.
They pay for transaction fees by deducting them directly from the transferred amount. They also charge an additional fee for their services.

## How to become a relayer

You can join our [Discord](https://discord.com/invite/mystiko) channel to apply as a Relayer. Once your application is approved, you can run your own Relayer service.

## Running a relayer

The Mystiko Gas Relayer is written in Rust, and the code is open source: [Mystiko Relayer on GitHub.](https://github.com/mystikonetwork/mystiko-relayer)

We provide two ways to start the Relayer:

1. Pull the source code, compile it, and then start it.
2. Start it through a Docker container.

### Via source code compilation:

First, you need to install the Rust programming environment. For instructions on how to install Rust, please refer to: [Install Rust](https://www.rust-lang.org/tools/install)

Next, pull the code from the GitHub repository:
```shell
git clone git@github.com:mystikonetwork/mystiko-relayer.git
```

Run the compile command in the project root directory:
```shell
cd mystiko-relayer
cargo build --release
```

The Relayer relies on a Redis instance to run. For instructions on how to start a Redis instance, please refer to: [Install Redis](https://redis.io/docs/latest/operate/oss_and_stack/install/)

Create a configuration file `config.toml` in the project root directory. For a reference configuration file, please see: [Configuration Reference](#configuration-reference)

Finally, start the Relayer using the following command:
```shell
./target/release/mystiko-relayer -- "config.toml"
```

### Via Docker container

The Mystiko Gas Relayer has an official Docker image, which can be pulled using the following command:
```shell
docker pull mystikonetwork/gas-relayer
```

Create a `config.toml` file, and then start the container using the following command:
```shell
docker run -d --name mystiko-relayer -p 8090:8090 -v $(pwd)/config.toml:/app/config.toml mystikonetwork/gas-relayer
```

### Configuration Reference

Here is an example of a configuration file and its explanation:
```toml
[settings]
# testnet or mainnet
network_type = "testnet"
# trace, debug, info, warn, error
log_level = "debug"
# host
host = "0.0.0.0"
# binding port
port = "8090"
# CoinMarketCap API Key
coin_market_cap_api_key = ""
# SQLite database path
sqlite_db_path = "db.sqlite"
# Supported API versions, if there is no special need, no change is required
api_version = { 0 = "v1", 1 = "v2" } 

[accounts.0]
# Chain ID
chain_id = 97
# Whether the account is available
available = true 
# Unique in the accounts list
private_key = ""
# If supported_erc20_list is empty, all erc20 tokens will not be supported
supported_erc20_tokens = { 0 = "mtt", 1 = "musd" }

[chains.97]
# Signer endpoint
signer_endpoint = "https://data-seed-prebsc-2-s2.binance.org:8545"

[chains.97.provider_config]
# Provider URL
urls = { 0 = "https://bsc-testnet.blockpi.network/v1/rpc/public", 1 = "https://bsc-testnet.blastapi.io/443f931f-a291-450f-956b-62a57fa8f758" }
```