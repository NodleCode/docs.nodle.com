---
sidebar_position: 2
---

# Glossary

**BLE**: Bluetooth Low-Energy (BLE) is a wireless personal area network designed by the Bluetooth Special Interest Group. While BLE shares its name with the original Bluetooth,  it is not compatible with Bluetooth. Thankfully, the two protocols are able to cohabit. Compared to Bluetooth, BLE consumes far less energy, and the chip are usually way cheaper. The communication range of BLE goes up to 400m, and even 1000m in outdoors. The maximum data rate is 2 Mbit/s. BLE is one of the most widely deployed low-power connectivity standard. The technology can be found in everyday connected products such as fitness trackers, and smart appliances. In the Nodle network, the Edge Nodes uses BLE to provide connectivity to BLE-enabled Things.

**Bounties**: bounties are rewards emitted to the actors who enable the execution of a smart mission. Typically a smart mission defines the bounty, which is a payment in NODL delivered to the edge node for performing work such as connecting a device.

**Core Node**: A Core Node, is a server that runs the Nodle Chain software.

**Edge Node**: An Edge Nodle, or simply Node is a device that runs the Nodle SDK, at the outer layer of the Nodle network. A smartphone running the Nodle Cash app is an Edge Node. Any smartphone with a third party integrating the Nodle SDK is also an Nodle Edge.

**Edge Network Operator**: An Edge Network Operator is an entity that manages a fleet of Edge Nodes. The Nodle team is an ENO as it manages the fleet of Nodle Cash app. An Edge Network Operator has the mission to ensure that the Edge Nodes are performing their roles, and needs to take measure to avoid fraud, and malpractices. An ENO stakes a large amount of NODL tokens and can get slashed if it does not perform well.

**IoT**: Internet of Things. The Internet of Things is a broad term that describes physical objects, that are usually battery-powered, and have some processing capabilities and connectivity in the form of either short-range wireless such as Bluetooth, or Wi-Fi, or long-range such as LoRa, and LTE. The connected objects do not need to be connected to the public internet, to be considered a member of the Internet of Things. As long as they can be connected to another connected device, or a network, they are considered IoT objects. In the Nodle network, IoT objects, or Things, are low-cost BLE-enabled devices that get connected to the Internet through the Edge Nodes.

**Issuance**: issuance refers to the generation of new NODL tokens, also called “minting”. For NODL, issuance is a process that spans over 16 years, with a predictable creation and allocation following a normal law. Issuance happens every few hours, during an event called a network reward event (see Network Rewards).

**Network Rewards**: network rewards are rewards attributed to the participants to the network at each issuance event (also known as reward event) as part of the issuance process. New tokens minted during the issuance between two reward events are distributed among participants according to rules decided, communicated, and enforced by the protocol.

**NODL**: The NODL token, also known as Nodle Cash, is the native token of the Nodle Chain.

**Nodle Cash app**: The Nodle Cash app is the app developed by the Nodle team, on Android and iOS, that let end-users directly experience the Nodle network. The Nodle SDK is embedded in the Nodle Cash app, and allows Things to connect in exchange for NODL tokens.

**Nodle Chain**: The Nodle Chain is the blockchain at the core of the Nodle Network. It is based on Substrate and is a parachain running on top of Polkadot.

**Nodle Rewards Oracle**: The Nodle Rewards Oracle is the component that compute the rewards to be awarded to the Nodle Edges based on the services they have provided.

**Nodle SDK**: The Nodle Software Development Kit (SDK) is the software agent that runs inside apps and provide connectivity or other services to Things.

**Nodle Service Provider (NSP)**: a Nodle Service Provider is an entity which interacts with the Nodle chain to create services to which non-crypto applications, businesses or organizations can connect. NSPs create an abstraction on top of the chain to enable Web2 services to interact with the network. For example, consider an asset tracking service through which businesses can provision their own devices to be tracked by the network, consult the data from their devices through standard APIs, and pay for the service in USD. This service abstracts the complexity of committing NODL to finance smart missions running at the edge. The entity providing this service is a NSP.

**NVM**: The Nodle Virtual Machine (NVM) is the programmatic layer of the Nodle SDK.

**Parachain**: A parachain is a layer-1 blockchain that delegate its blockchain security to the layer-0 blockchain that is Kusama, or Polkadot. A Parachain is usually a specialized and interconnected chain. The Nodle Chain has become a parachain since March 2022.

**Polkadot**: Polkadot is a layer-0 blockchain, which main function is to enable layer-1 blockchains, called parachains, to be built on top of it. By uniting multiple blockchains, Polkadot aims to achieve a high degrees of security and scalability. The native token, DOT, is used for governance and bonding.  

**Rewards**: rewards are NODL tokens provided by participants to the network (whether Network Service Providers, nodes or collators) to provide service or perform work on the network. Rewards can stem from the Network (see Network Rewards) or from smart missions (see Bounties).

**Smart Missions**: smart missions are autonomous, self executing pieces of code which can be executed on the Nodle Network’s edge nodes. While the smart mission is registered on-chain, it is downloaded by edge nodes and runs at the edge on the devices before reporting back to the chain.

**Things**: The Things are the small devices with BLE connectivity that are provided connectivity by the Nodle Network through the Nodle Edges.
