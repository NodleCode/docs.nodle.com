---
sidebar_position: 5
---

# Allocation of Network Rewards

## Distribution Between Network Stakeholders

The token issuance aims to reward edge nodes, operators, and collators. At each reward event, the NODL freshly minted Ik is distributed among participants as follows:
- 80% are allocated for edge nodes. In fact, these 80% will be channeled to the NSP (or Nodle Service Provider, the equivalent on the Nodle network to an ISP or Internet Service Provider). The NSP is responsible for deploying nodes on behalf of the network. Currently it means publishing the SDK and partnering with publishers who will integrate the SDK into their app. For example, the Nodle company is the NSP for the Nodle Cash App. NSPs are businesses: they are in competition for acquiring nodes - publishers will go to the NSP that offers the best deal to them. NSPs are also responsible for the nodes they deploy. In particular, they ensure the Nodle SDK is deployed in apps that respect privacy regulations. They also make sure they behave according to edge node operators responsible for deploying the nodes to the network. 
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

For edge nodes, the purpose of the rewards is to incentivize the nodes to:
- Maximize their uptime wherever they are.
- Be geospatially available where the demand is. Demand can actually grow only when and where there is a network strong enough to offer a level of service. The rewards need to incentivize the nodes to spread across areas as large as possible, while maintaining a target density.
- Enable as many capabilities as possible. As a beginning, the SDK requires Bluetooth and geolocation activated. Even these two simple features can rely on different libraries and authorizations on android and iOS. Activating one or the other is the choice of the SDK, but it will be rewarded for enabling the most permissions. As the SDK also enables operations at the edge, sharing its computing, storage or bandwidth resources at the edge, the SDK will have the opportunity to limit these resources. The more active the node, the higher the rewards.
 
We mark $H_k=80% I_k$ the pool allocated to edge nodes at each reward event. The individual reward h(n) attributed to each node n will be computed as:
$$h(n)=\frac{H_k}{N}.f(m_n^t,m_n^g ,m_n^c)$$
Where:

- $N$ is the number of nodes on the network
- $m_n^t$ is a time-availability factor (detailed in dedicated section)
- $m_n^g$ is a geospatial-availability factor (detailed in dedicated section)
- $m_n^c$ is a capability factor (detailed in dedicated section)
- $f$ is a balancing function enabling the network to arbitrate his needs to incentivize more activity, new capabilities, or a broader coverage. f must verify the constraint that $\sum_n f(n)=1$. Until further notice, $f(m_n^t,m_n^g,m_n^c) =m_n^t.m_n^g.m_n^c$. Changing the balancing function would require a consensus vetted by the community.


### Time-availability Factor $m_k^a$:

For a given reward event, each node will be rewarded proportionally to its uptime since the previous reward event. Between two reward events (which as of may 2022 is a 4-hours window), the window is divided into a number of 90-second slots. Each slot is allocated an equal share of the total reward available Hka. For any slot, a node is considered available (or up) if it performed at least one Nodle-related activity such as a Bluetooth scan, fetching a configuration, or uploading data. An oracle will then evaluate which nodes participated in the slot and distribute the rewards equitably between active nodes during that slot.

### Geospatial-availability Factor $m_k^g$:

Compared to traditional telecommunication networks, the Nodle network is unique in the way it incentivizes moving nodes and provides ad-hoc and best-effort connectivity. The rewards formula is then designed to incentivize physical exploration and movement, on top of deterring farms of devices located in the same area.

For that purpose at each reward event, rewards will be equally distributed among hexagonal tiles with an average hexagon edge length of 66m, which corresponds to a resolution of level 10 in the h3 specification[^1]. The reward will be distributed among nodes performing at least one Nodle-related activity between the two reward events. This has several implications:
[^1]:https://h3geo.org

- Between two reward events, nodes participate in the rewards of all the tiles they scout. There is a limit in the number of tile rewards a single node can claim. Nodle aims to create a network for connectivity leveraging existing hardware, thus removing environmental pressure generated by deploying, maintaining and supplying electricity to a new hardware infrastructure. To align incentivization mechanisms with this purpose, the issuance caps maximum tiles to be claimed by a single node to the first 400 tiles they explore. This limitation reflects the maximum possible scouting between two reward events at an average speed of 30 KMH (or 19 MPH), which is consistent with vehicles powered by human force such as bikes.
- The higher the density of nodes on a given tile, the smaller the individual rewards: nodes are incentivized to cover the widest possible area. New publishers deploying a fleet of edge nodes receive better incentives when they provide coverage in an underserved area.

This naturally creates a map of warm and cold tiles, depending on network density. Nodes are incentivized to discover as many cold tiles as they can between two reward events.



### Capabilities Multiplier $m_k^c$:

For now, the capabilities multiplier is simply defined as 0 or 1. 1 is the baseline for nodes available to the network. 0, as of the time of writing in July 2022, is reserved for network users who can provide their own fleet of edge nodes but activate these nodes only to communicate with their own devices and do not share the connectivity with the Nodle network. This exactly nullifies the NODL rewards they are being issued, as they do not contribute to the network.

In the future, capabilities multipliers might include special capabilities such as onboarding HSM for smartphones. Nodle currently runs mainly on Android and iOS smartphones. Although they are not supported currently, a Linux implementation also exists, as well as portability on Android devices that are not smartphones. Research is currently being made for special miner nodes that could deploy – and be rewarded for – new capabilities on the network, such as establishing reputation for regular nodes, or onboarding Lorawan antennas.

### Compartmentalization Per Region

It’s likely different regions of the world will see network deployment at different paces. As edge node operators and publishers (typically mobile apps) deploying the nodes will typically operate at a country level, there is a sizable risk for rewards to become biased towards a specific region. For example, if a super-app in a highly populated country deployed the SDK before the network reaches its maturity phase, it would reap most issuance rewards for the years to come, thus decreasing incentives to build coverage elsewhere. There is consequently an option, not activated at the moment, for the network to compartmentalize the rewards per country. Activating this option would require a consensus vetted by the community.

This compartmentalization is designed as a way to level opportunities across regions independently from the strength of the economy of a given country. Each country will be allocated a number of coins at each issuance event in proportion to their share of voice in the global population. This mechanism separates rewards by country, so that first joiners in any given region can be rewarded for their higher incremental utility than new nodes in already populated regions. For example, the US represents 4.25% of the global population. Hence at any given reward event, nodes in the US will reap 4.25% of rewards. Unattributed rewards will be shared among participants in other countries.
