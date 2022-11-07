// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

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

  scripts: [
    {
      type: 'text/javascript',
      async: true,
      defer: true,
      id: 'hs-script-loader',
      src: '//js.hs-scripts.com/22645598.js'
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/NodleCode/docs.nodle.com/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
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
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: 'dee765caee2a51a367e6fef09b237b9b',
        indexName: 'nodle-docs',
        appId: 'X327BDVWME'
      },
      navbar: {
        title: 'documentation',
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
          { to: 'https://github.com/NodleCode/docs.nodle.com', label: 'Contribute to this Wiki', position: 'right' },
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
                to: `docs/glossary`,
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
                to: `docs/nodle-wallets/nodle-cash/intro`,
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
  plugins: [
    // [
    //   require.resolve("@cmfcmf/docusaurus-search-local"),
    //   {
    //     // how far we go in indexing sub-categories and pages
    //     indexDocSidebarParentCategories: 5,
    //   },
    // ],
  ],
};

module.exports = config;
