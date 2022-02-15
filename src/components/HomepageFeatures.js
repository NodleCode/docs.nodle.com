import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Learn',
    blocks: [
      {
        title: 'About Nodle',
        Svg: require('../../static/img/icons/privacy.svg').default,
        description: (
          <>
            Unlike Advertising SDKs which harvest user data and show ads, Nodle does not collect Personal Information (PII Data).
          </>
        ),
      },
      {
        title: 'Nodle Chain',
        Svg: require('../../static/img/icons/privacy.svg').default,
        description: (
          <>
            The Nodle Network uses Bluetooth Low Energy (BLE), which is extremely efficient and already running on most smartphones.
          </>
        ),
      },
      {
        title: 'NODL token',
        Svg: require('../../static/img/icons/privacy.svg').default,
        description: (
          <>
            The Nodle SDK can use less background data than most advertising SDK which push videos and image ads.
          </>
        ),
      },
      {
        title: 'Nodle Nodes',
        Svg: require('../../static/img/icons/privacy.svg').default,
        description: (
          <>
            Nodle is deployed today on Google Play, and already running in apps around the planet.
          </>
        ),
      },
    ]
  },
  {
    title: 'Participate',
    blocks: [
      {
        title: 'App partners, SDK',
        Svg: require('../../static/img/icons/privacy.svg').default,
        description: (
          <>
            The Nodle Network uses Bluetooth Low Energy (BLE), which is extremely efficient and already running on most smartphones.
          </>
        ),
      },
      {
        title: 'Nodes & Validators',
        Svg: require('../../static/img/icons/privacy.svg').default,
        description: (
          <>
            The Nodle SDK can use less background data than most advertising SDK which push videos and image ads.
          </>
        ),
      },
      {
        title: 'Cash app users',
        Svg: require('../../static/img/icons/privacy.svg').default,
        description: (
          <>
            Nodle is deployed today on Google Play, and already running in apps around the planet.
          </>
        ),
      },
    ]
  },
  {
    title: 'Use',
    blocks: [
      {
        title: 'IoT Customers',
        Svg: require('../../static/img/icons/privacy.svg').default,
        description: (
          <>
            The Nodle SDK can use less background data than most advertising SDK which push videos and image ads.
          </>
        ),
      },
      {
        title: 'Cash app users',
        Svg: require('../../static/img/icons/privacy.svg').default,
        description: (
          <>
            Nodle is deployed today on Google Play, and already running in apps around the planet.
          </>
        ),
      },
    ]
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={styles.customFeature}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className={styles.customFeatureTextSection}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((feature, idx) => (
            <section className={styles.featureSection}>
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
