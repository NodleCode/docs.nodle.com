---
sidebar_position: 4
---

# The Token Issuance

The 12.6 billion remaining tokens are periodically issued to reward edge nodes (smartphones running the SDK), network operators (agents operating the network and the oracles ensuring edge nodes behave properly), and collators for their participation in the network. 

Initially the infrastructure needs to be built. A limited supply entails scarcity, which gives competitive advantage for first movers to participate in building the supply for the network. When the network gets built, there is competition on the supply side, as the network builders are fighting for the subsidy.

Once the infrastructure is built and operational, there needs to be demand for the infrastructure to remain valuable. If the demand is not able to compensate for the subsidy, the network did not achieve its goal. As demand for the network grows stronger, the issuance will slowly decrease until rewards from the demand side take over to incentivize network participants. 90% of tokens will be issued nine years after the start of the Nodle parachain in May 2022, whereas the final tokens will be issued five years after.

The token Issuance follows an S-curve defined per the formula:

$$
\sum_{k=0}^{t} I_k=\frac{I}{1+exp(\frac{-f(t-t_0)}{D})}
$$

Where: 
- $I$ is the total issuance, hence 12.6 billion NODL
- $t_0$ is the point of inflexion for the network, which we set at 8 years to match our ambition to start seeing demand take over the rewards from actual consumption of NODL by network users in a timeline comparable to the time required by standard marketplaces to reach economical balance.
- $f(t-t_0)$ is a function that projects the timeline of the issuance $]\ 0\ ;\ 2 \  t_0 \ [$ into the space $]-\infty;\ +\infty\ [$. For mathematical reasons that we will not detail here, for this purpose we will use the function: $f(t) = tan (-\frac{\Pi}{2} (1-\frac{t}{t_0}))$
- $D$ is the deviation of the curve which is set to $D=0.3$

The S-curve for the issuance of coins ties to a normal distribution of tokens over the course of the issuance, as here:

![issuance](/img/docs/token/issuance.jpg)

Both curves draw three different phases:

- **Phase 1**: network growth. As the network grows, token issuance, although small, can fairly reward  early adopters with a balance mechanism built-in: the smaller the network, the stronger the incentive for early nodes to join and contribute. Nonetheless, if the network grows too fast, individual nodes will receive fewer rewards as the issuance is fixed and predictable. This mechanism allows for keeping the growth of the network under control, as the network needs to learn itself and iterate to bring all the necessary tools, dashboards, and security to allow a safe scaling.
- **Phase 2**: acceleration. Once the network matures, as the number of nodes accelerates so do the available rewards. At each reward event, nodes still share a fixed allocation of tokens. Nonetheless, as the value of the network increases with Metcalfe’s Law[^1], rewards from demand start to significantly add to the rewards from the issuance, still encouraging the growth of the network. Beyond this, demand drives the value of the utility token higher.
- **Phase 3**: equilibrium. The network reached the critical size that enables economically sustainable network use (asset tracking, device connectivity, swarm computing, etc.). The reward for participating slows gradually as demand takes over to reward the nodes.

## Issuance Table


Quarter	| Daily Issuance (in millions NODL)
------- | -------
2021-Q1	| 0
2021-Q2	| 0
2021-Q3	| 0
2021-Q4	| 0.0002
2022-Q1	| 0.0021
2022-Q2	| 0.0103
2022-Q3	| 0.0324
2022-Q4	| 0.0774
2023-Q1	| 0.1531
2023-Q2	| 0.2647
2023-Q3	| 0.4148
2023-Q4	| 0.6038
2024-Q1	| 0.8299
2024-Q2	| 1.0904
2024-Q3	| 1.3814
2024-Q4	| 1.6981
2025-Q1	| 2.0357
2025-Q2	| 2.3886
2025-Q3	| 2.7512
2025-Q4	| 3.1175
2026-Q1	| 3.4815
2026-Q2	| 3.8371
2026-Q3	| 4.1783
2026-Q4	| 4.4992
2027-Q1	| 4.7942
2027-Q2	| 5.058
2027-Q3	| 5.2858
2027-Q4	| 5.4735
2028-Q1	| 5.6174
2028-Q2	| 5.7149
2028-Q3	| 5.7641
2028-Q4	| 5.7641
2029-Q1	| 5.7149
2029-Q2	| 5.6174
2029-Q3	| 5.4735
2029-Q4	| 5.2858
2030-Q1	| 5.058
2030-Q2	| 4.7942
2030-Q3	| 4.4992
2030-Q4	| 4.1783
2031-Q1	| 3.8371
2031-Q2	| 3.4815
2031-Q3	| 3.1175
2031-Q4	| 2.7512
2032-Q1	| 2.3886
2032-Q2	| 2.0357
2032-Q3	| 1.6981
2032-Q4	| 1.3814
2033-Q1	| 1.0904
2033-Q2	| 0.8299
2033-Q3	| 0.6038
2033-Q4	| 0.4148
2034-Q1	| 0.2647
2034-Q2	| 0.1531
2034-Q3	| 0.0774
2034-Q4	| 0.0324
2035-Q1	| 0.0103
2035-Q2	| 0.0021
2035-Q3	| 0.0002
2035-Q4	| 0


[^1]: Metcalfe's law is an empirical law formulated by George Gilder in 1993. It states that the value of a telecommunications network – whether the telephone network or the internet – is proportional to the square of the number of connected users of the system. It was later applied to leading social networks.
