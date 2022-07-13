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
- $D$ is the deviation of the curve which is set to $D=0.2$

The S-curve for the issuance of coins ties to a normal distribution of tokens over the course of the issuance, as here:



Both curves draw three different phases:

- **Phase 1**: network growth. As the network grows, token issuance, although small, can fairly reward  early adopters with a balance mechanism built-in: the smaller the network, the stronger the incentive for early nodes to join and contribute. Nonetheless, if the network grows too fast, individual nodes will receive fewer rewards as the issuance is fixed and predictable. This mechanism allows for keeping the growth of the network under control, as the network needs to learn itself and iterate to bring all the necessary tools, dashboards, and security to allow a safe scaling.
- **Phase 2**: acceleration. Once the network matures, as the number of nodes accelerates so do the available rewards. At each reward event, nodes still share a fixed allocation of tokens. Nonetheless, as the value of the network increases with Metcalfe’s Law[^1], rewards from demand start to significantly add to the rewards from the issuance, still encouraging the growth of the network. Beyond this, demand drives the value of the utility token higher.
- **Phase 3**: equilibrium. The network reached the critical size that enables economically sustainable network use (asset tracking, device connectivity, swarm computing, etc.). The reward for participating slows gradually as demand takes over to reward the nodes.

[^1] Metcalfe's law is an empirical law formulated by George Gilder in 1993. It states that the value of a telecommunications network – whether the telephone network or the internet – is proportional to the square of the number of connected users of the system. It was later applied to leading social networks.
