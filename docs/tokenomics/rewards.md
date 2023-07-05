---
sidebar_position: 5
---

# Allocation of Network Rewards

## Distribution Between Network Stakeholders

The token issuance aims to reward edge nodes, operators, and collators. At each reward event, the NODL freshly minted Ik is distributed among participants as follows:
- 80% are allocated for edge nodes. In fact, these 80% will be channeled to the NSP (or , the equivalent on the Nodle network to an ISP or Internet Service Provider). The NSP is responsible for deploying nodes on behalf of the network. Currently it means publishing the SDK and partnering with publishers who will integrate the SDK into their app. For example, the Nodle company is the NSP for the Nodle Cash App. NSPs are businesses: they are in competition for acquiring nodes - publishers will go to the NSP that offers the best deal to them. NSPs are also responsible for the nodes they deploy. In particular, they ensure the Nodle SDK is deployed in apps that respect privacy regulations. They also make sure they behave according to edge node operators responsible for deploying the nodes to the network. 
- 10% are allocated to build the protocol. Until the Nodle DAO exists, these are transferred to a wallet controlled by the Nodle council. Once the Nodle DAO is created, the DAO will reward protocol builders through token grants or other means deemed appropriate by the community.
- 10% are allocated for collators.

## Allocation to Edge Nodes

It’s worth looking at the reward per node in different growth scenarios to understand the sustainability of the model. For the network to be successful, it needs to provide geospatial availability where the demand is, which will widely evolve over the lifetime of the network. For example, for the asset tracking smart contract, most assets will come from the logistics supply chain, with a high density of smart devices to be tracked in urban areas, in hubs such as commercial harbors, or in controlled environments such as construction sites. 

These sites will require a high density of nodes to capture the required data, while other areas will work with a best-effort network. Consumer use cases (such as geolocalized airdrops of NFTs) will not require geospatial incentivization at all. For that reason, in the first phase of the network, the purpose of the rewards will be to incentivize a broad coverage of urban zones, which growing demand will then naturally shape. With this model in mind, and taking into account a conservative range for a BLE antenna (30 m in urban dense areas, although in rural areas it can go up to 200 m), we want the network to be able to incentivize enough nodes to cover all urban areas on Earth at least once a day. The market will then shape this idealistic target, as all areas are not equal from the standpoint of the demand.

The number of daily active nodes is actually higher than the number of smartphones connected daily to the Nodle network, because statistically, the Nodle SDK will run as several distinct nodes on the same smartphones, in case the smartphone runs several apps embedding the SDK (for example, the Nodle Cash app and another partner app). We estimate the target is then in the vicinity of 300 million smartphones. As a reference, leading mobile advertising networks claim they can reach more than 2 billion smartphones daily.

At any given time, average rewards for edge nodes will depend on the size of the network. For reference, we can highlight three hypothetical scenarios for network growth leading to 300 millions daily active nodes, and project what it means in terms of reward for individual nodes:
- A hypergrowth scenario, in which the network grows too quickly. The risk is to issue all coins before the network is mature enough to generate enough demand to reward the network contributors, in which case the network would be at a risk to recede.
- A target scenario for which we design the issuance. In this target scenario, the network reaches maturity in about 12 years, over the duration of  the issuance.
- A worst-case scenario, in which the network grows slowly. The risk is to issue all coins before the network has reached the minimum coverage to sustain demand.

![growth](/img/docs/token/scenarios.jpg)

In each scenario, the supply of NODL at each reward event remains fixed (on top of which the Nodle project has reserves to adjust rewards, and demand will also fund edge nodes). Based on the size of the network, the reward per node will vary. Whether these rewards match minimal edge nodes expectations (for example competing with monetization they expect from other mobile monetization options) will depend on the price of the token:

![rewards](/img/docs/token/rewards.jpg)

## The rewards formula for edge nodes

For edge nodes, the purpose of the rewards is to incentivize the nodes to be:
- Available, meaning they are online and prepared to take on smart missions
- Capable, signifying they possess the necessary activated sensors to carry out passive missions
- Well-located, in other words, they are situated in a location conducive to performing smart missions and where the density is optimal to meet network requirements and ensure effective operation.
 
We mark $H_k=80% I_k$ the pool distributed beetween edge nodes at each reward calculation event. The individual reward h(n) attributed to each node n will be computed as:
$$h(n)=\frac{H_k}{N}.f(m_n^t, m_n^b, m_n^g ,m_n^c)$$
Where:

- $N$ is the number of nodes on the network
- $m_n^t$ is a time-availability factor (detailed in dedicated section)
- $m_n^b$ is a Bluetooth-availability factor (detailed in dedicated section)
- $m_n^g$ is a geospatial-availability factor (detailed in dedicated section)
- $m_n^c$ is a capability factor (detailed in dedicated section)
- $f$ is a balancing function enabling the network to arbitrate his needs to incentivize more activity, new capabilities, or a broader coverage. f must verify the constraint that $\sum_n f(n)=1$. Until further notice, $f(m_n^t,m_n^g,m_n^c) =m_n^t.m_n^g.m_n^c$. Changing the balancing function would require a consensus vetted by the community.

As of July 2023, rewards are calculated every 15 minutes and allocated to edge nodes every 4 hours.

### Time-availability Factor $m_k^a$:

For a given reward calculation event, each node will be rewarded proportionally to its uptime since the previous reward calculation event. Between two reward calculation events (which as of July 2023 is a 15-minute window), the window is divided into a number of 90-second slots. Each slot is allocated an equal share of the total reward available Hka. For any slot, a node is considered available (or up) if it performed at least one Nodle-related activity such as a Bluetooth scan, fetching a configuration, or uploading data. An oracle will then evaluate which nodes participated in the slot and distribute the rewards equitably between active nodes during that slot.

### Geospatial-availability Factor $m_k^g$:

Compared to traditional telecommunication networks, the Nodle network is unique in the way it incentivizes moving nodes and provides ad-hoc and best-effort connectivity. The rewards formula is then designed to incentivize reliable network coverage as well as physical exploration and movement, on top of deterring farms of devices located in the same area.

The Nodle network can be represented with hexagonal tiles with an average hexagon edge length of 66m, which corresponds to a resolution of level 10 in the h3 specification[^1]. At the time of writing, the geospatial-availability factor is calculated based on:
- Area covered, which is represented by a number of visited H3 tiles. 
- Node density in covered H3 tiles. It is estimated that 4 distinct nodes inside an H3 tile of level 10, is the optimal number and therefore it is the number that is best rewarded as a whole.

The geospatial-availability factor per covered H3 tile is calculated as defined in the table below. If a node has covered numtiple H3 tiles between two reward calculation events, then all individual factors for each H3 tile are sum up to get the final value of the factor for the node.

| Number of Nodes in H3 Tile | Factor per Node | Total Factor in H3 tile |
| --- | --- | --- |
| 1 | 1 | 1 |
| 2 | 0.8 | 1.6 |
| 3 | 0.6 | 1.8 |
| 4 | 0.5 (i.e 2/4) | 2 |
| 5 | 0.4 (i.e 2/5) | 2 |
| 6 | 0.333 (i.e. 2/6) | 2 |
| 7 | 0.28 (i.e 2/7) | 2 |

### Bluetooth-availability Factor $m_k^b$:

One of the main purposes of the Nodle network is providing connectivity for Bluetooth devices, that's why the Bluetooth-availability factor is designed to ensure that each node is rewarded fairly according to:
- the time during which it provides Bluetooth connectivity, and
- the range of devices it can provide connectivity to

As of July 2023, there are two Nodle SDK builds for iOS, that can be integrated by a Nodle Service Provider (NSP) - one provides capabilities to scan and connect all Bluetooth devices, another - only iBeacons. It is up to the NSP which one to integrate, but the build with wider capabilities will require additional Bluetooth permission to be granted by the node.

Exact values of the Bluetooth-availability factor are provided in the table below.

| Bluetooth availability | Bluetooth-availability factor |
| --- | --- |
| Bluetooth not available | 0.05 |
| Bluetooth available to scan iBeacons only | 0.2 |
| Bluetooth available 1 time | 0.5 |
| Bluetooth available 2+ times | 1 |

### Capabilities Multiplier $m_k^c$:

The capabilities multiplier is linked to the node's ability to carry out tasks. A node with the capacity to undertake active missions, meaning one whose owner can be notified to perform specific tasks, holds more value for the network compared to a node that can only undertake passive missions. This factor underscores the importance of interactive participation and diverse functionality within the network. The value of the capabilities multiplier for a fully-capable node is 1, and it will be 0.5 for the node, which cannot execute active missions.

### Compartmentalization Per Region

It’s likely different regions of the world will see network deployment at different paces. As edge node operators and publishers (typically mobile apps) deploying the nodes will typically operate at a country level, there is a sizable risk for rewards to become biased towards a specific region. For example, if a super-app in a highly populated country deployed the SDK before the network reaches its maturity phase, it would reap most issuance rewards for the years to come, thus decreasing incentives to build coverage elsewhere. There is consequently an option, not activated at the moment, for the network to compartmentalize the rewards per country. Activating this option would require a consensus vetted by the community.

This compartmentalization is designed as a way to level opportunities across regions independently from the strength of the economy of a given country. Each country will be allocated a number of coins at each issuance event in proportion to their share of voice in the global population. This mechanism separates rewards by country, so that first joiners in any given region can be rewarded for their higher incremental utility than new nodes in already populated regions. For example, the US represents 4.25% of the global population. Hence at any given reward event, nodes in the US will reap 4.25% of rewards. Unattributed rewards will be shared among participants in other countries.
