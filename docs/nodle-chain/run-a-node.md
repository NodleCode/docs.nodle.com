---
sidebar_position: 2
---

# Running Nodes

Nodes are key elements in the Nodle Chain architecture as they participate in securing, decentralizing, and maintaining the network. Two kinds of nodes are supported: full nodes and collators. A full node simply stores, verifies and provides blocks or transactions. It does not have an active part in the Nodle Chain's consensus functions, unlike collators.

## Hardware and System Requirements

### Hardware
When choosing your hardware configuration we recommend at least the following requirements:
- CPU: the nodes run best on an Intel CPU with at least two cores, if running a collator we would recommend doubling to at least 4.
- Memory: make sure to have at least 2 Gb of RAM, when running a collator aim for 6 Gb.
- Storage: a full node will need at least 50 Gb of storage on a fast SSD, for collators please have at least 100 Gb available.

### System
The nodes run best on a Linux-based system like Ubuntu and other Debian-based distributions, or Fedora. Make sure to install [docker](https://www.docker.com/) as well as this is the fastest way to get started.

## Run a Node

### Setting up the data volume
A node takes a bit of time to synchronize the Blockchain, so you want to store the data locally in order to not have to re-synchronize every time you restart your node. To do so, simply create a folder on your local machine and make sure our docker container can access it:
```shell
mkdir nodle && sudo chown -R 1000:1000 nodle
```

### Run it
Assuming you are in the same folder where you created the `nodle` volume, simply go ahead and use docker to start your new node:
```shell
docker run -v $(pwd)/nodle:/data -p 9944:9944 -p 30333:30333 -it ghcr.io/nodlecode/chain:master -d /data
```

This will start a node and start syncing our test network while saving the blocks and transactions in the `nodle` folder. If you want to synchronize our main network simply add the option `--chain main`.

:::tip Becoming a Validator or Collator
At the moment, third parties cannot become a validator or collator on the Nodle Chain. However, we are planning to open this very soon. Make sure to [follow us on Twitter](https://twitter.com/NodleNetwork) to know when this happens!
:::

### Advanced Commands

#### Starting the Node in Archive Mode
By default, the full node will prune some of its data to save space on the disk. If you would like to keep this data (maybe you are hosting a public node and want to keep the complete data) you can add the flag `--pruning=archive`, we typically use it on our own public nodes, however, you will want to increase your storage size to at least 100 Gb.

#### Syncing Faster
On some machines, you can use the flag `--wasm-execution compiled` to synchronize with the chain networks faster (we often have a 10x boost when using it!). This is typically available and well supported on machines with a `x86_64` architecture like Intel or AMD chips. We didn't include it in the previously listed commands to avoid any potential bugs or crashes as it may not work as well with less traditional servers, but if you can use it you definitely should!

#### Choosing a Name for your Node
By default, a name for your node is chosen randomly, if you'd like to personalize it you can use the `--name` flag. For instance, you could use `--name "not a teapot"`.
:::tip Telemetry
You can view the currently running nodes and their names on the [Polkadot Telemetry Portal](https://telemetry.polkadot.io/#list/0xa3d114c2b8d0627c1aa9b134eafcf7d05ca561fdc19fb388bb9457f81809fb23).
:::
