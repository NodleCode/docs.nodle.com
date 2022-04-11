// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nodle Docs',
  tagline: 'All documentation you\'ll need on Nodle.',
  url: 'https://docs.nodle.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'NodleCode', // Usually your GitHub org/user name.
  projectName: 'docs.nodle.com', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/NodleCode/docs.nodle.com/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/NodleCode/docs.nodle.com/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          colorMode: {
            defaultColorMode: 'dark',
          },
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Documentation',
        logo: {
          alt: 'Nodle',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/#Learn', label: 'Learn', position: 'left' },
          { to: '/#Participate', label: 'Participate', position: 'left' },
          { to: '/#Use', label: 'Use', position: 'left' },


          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },

          { to: 'docs/nodle-sdk/introduction', label: 'SDK', position: 'right' },
          { to: 'https://github.com/NodleCode/docs.nodle.com', label: 'Contribute to this WIKI', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Nodle Chain',
                to: `docs/nodle-chain/introduction`,
              },
              {
                label: 'Nodle Network',
                to: `docs/nodle-network/introduction`,
              },
              {
                label: 'Glossary',
                to: `docs/nodle-network/glossary`,
              },
            ],
          },
          {
            title: 'Participate',
            items: [
              {
                label: 'Nodle SDK',
                to: `docs/nodle-sdk/introduction`,
              },
              {
                label: 'Collator',
                to: `docs/nodle-chain/become-a-collator`,
              },
              {
                label: 'Cash app',
                to: `#${Math.random()}`,
              },
            ],
          },
          {
            title: 'Use',
            items: [
              {
                label: 'IoT Dashboard',
                to: `docs/nodle-network/iot`,
              },
              {
                label: 'Cash app',
                to: `docs/nodle-network/iot`,
              },
            ],
          },
        ],
        logo: {
          alt: 'Nodle',
          src: 'img/logo.svg',
        },
        // copyright: `Copyright © ${new Date().getFullYear()} Nodle.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['kotlin', 'swift'],
      },
    }),
};

module.exports = config;
