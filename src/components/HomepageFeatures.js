import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Learn',
    blocks: [
      {
        title: 'Nodle Network',
        Svg: require('../../static/img/icons/icon_about_nodle.svg').default,
        description: (
          <>
            The Nodle Network is a decentralized wireless network that provides low-range wireless access to IoT devices.
          </>
        ),
        link: './docs/nodle-network/introduction',
      },
      {
        title: 'Nodle Chain',
        Svg: require('../../static/img/icons/icon_nodle_chain.svg').default,
        description: (
          <>
            The Nodle Chain is the parachain that powers the Nodle Network.
          </>
        ),
        link: './docs/nodle-chain/introduction',
      },
      {
        title: 'NODL token',
        Svg: require('../../static/img/icons/icon_token.svg').default,
        description: (
          <>
            The Nodle token, also known as Nodle Cash, is the native crypo-asset of the Nodle Network.
          </>
        ),
        link: './docs/nodle-chain/nodl',
      },

      //      {
      //        title: 'Nodle Nodes',
      //        Svg: require('../../static/img/icons/icons_nodes.svg').default,
      //        description: (
      //          <>
      //            The Nodle Edge Nodes .
      //          </>
      //        ),
      //      },

    ]
  },
  {
    title: 'Participate',
    blocks: [
      {
        title: 'As a mobile app partner (SDK)',
        Svg: require('../../static/img/icons/icons_partners_sdk.svg').default,
        description: (
          <>
            As a mobile app developper, you can embed the Nodle SDK, and earn NODL
          </>
        ),
        link: './docs/nodle-sdk/introduction',
      },
      {
        title: 'As a Collator',
        Svg: require('../../static/img/icons/icons_nodes_validators.svg').default,
        description: (
          <>
            The Nodle SDK can use less background data than most advertising SDK which push videos and image ads.
          </>
        ),
        link: './docs/nodle-chain/become-a-collator',
      },
      {
        title: 'As a Nodle app user',
        Svg: require('../../static/img/icons/icons_cash_users.svg').default,
        description: (
          <>
            Participate to the Nodle network, by downloading the Nodle app.
          </>
        ),
        link: './docs/nodle-wallets/nodle-cash/intro'
      },
    ]
  },
  {
    title: 'Use',
    blocks: [
      {
        title: 'As an IoT customer',
        Svg: require('../../static/img/icons/icons_iot.svg').default,
        description: (
          <>
            You can use the Nodle Network today, to track IoT assets, and more
          </>
        ),
        link: './docs/nodle-network/introduction',
      },
      {
        title: 'As a Nodle app user',
        Svg: require('../../static/img/icons/icons_cash_app.svg').default,
        description: (
          <>
            You can use the Nodle Network to transfer NODL as a Nodle app user
          </>
        ),
        link: './docs/nodle-wallets/nodle-cash/intro'
      },
    ]
  }
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={styles.customFeature}>
      <a className={styles.customFeatureLink} href={link || '#'}>
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className={styles.customFeatureTextSection}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((feature, idx) => (
            <section id={feature.title} className={styles.featureSection}>
              <h2>{feature.title}</h2>
              <section className={styles.featureSectionBlocks}>
                {feature.blocks.map((props, feature_idx) => (
                  <Feature key={feature_idx} {...props} />
                ))}
              </section>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
