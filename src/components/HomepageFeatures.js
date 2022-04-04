import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Learn',
    blocks: [
      {
        title: 'About Nodle',
        Svg: require('../../static/img/icons/icon_about_nodle.svg').default,
        description: (
          <>
            Unlike Advertising SDKs which harvest user data and show ads, Nodle does not collect Personal Information (PII Data).
          </>
        ),
        link: '',
      },
      {
        title: 'Nodle Chain',
        Svg: require('../../static/img/icons/icon_nodle_chain.svg').default,
        description: (
          <>
            The Nodle Network uses Bluetooth Low Energy (BLE), which is extremely efficient and already running on most smartphones.
          </>
        ),
        link: '',
      },
      {
        title: 'NODL token',
        Svg: require('../../static/img/icons/icon_token.svg').default,
        description: (
          <>
            The Nodle SDK can use less background data than most advertising SDK which push videos and image ads.
          </>
        ),
        link: '',
      },
      {
        title: 'Nodle Nodes',
        Svg: require('../../static/img/icons/icons_nodes.svg').default,
        description: (
          <>
            Nodle is deployed today on Google Play, and already running in apps around the planet.
          </>
        ),
        link: '',
      },
    ]
  },
  {
    title: 'Participate',
    blocks: [
      {
        title: 'App partners, SDK',
        Svg: require('../../static/img/icons/icons_partners_sdk.svg').default,
        description: (
          <>
            The Nodle Network uses Bluetooth Low Energy (BLE), which is extremely efficient and already running on most smartphones.
          </>
        ),
        link: '',
      },
      {
        title: 'Nodes & Validators',
        Svg: require('../../static/img/icons/icons_nodes_validators.svg').default,
        description: (
          <>
            The Nodle SDK can use less background data than most advertising SDK which push videos and image ads.
          </>
        ),
        link: '',
      },
      {
        title: 'Cash app users',
        Svg: require('../../static/img/icons/icons_cash_users.svg').default,
        description: (
          <>
            Nodle is deployed today on Google Play, and already running in apps around the planet.
          </>
        ),
        link: '',
      },
    ]
  },
  {
    title: 'Use',
    blocks: [
      {
        title: 'IoT Customers',
        Svg: require('../../static/img/icons/icons_iot.svg').default,
        description: (
          <>
            The Nodle SDK can use less background data than most advertising SDK which push videos and image ads.
          </>
        ),
        link: '',
      },
      {
        title: 'Cash app users',
        Svg: require('../../static/img/icons/icons_cash_app.svg').default,
        description: (
          <>
            Nodle is deployed today on Google Play, and already running in apps around the planet.
          </>
        ),
        link: '',
      },
    ]
  }
];

function Feature({Svg, title, description, link}) {
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
