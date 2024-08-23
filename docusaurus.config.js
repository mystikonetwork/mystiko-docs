// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const { themes } = require('prism-react-renderer')
const lightCodeTheme = themes.github
const darkCodeTheme = themes.dracula

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MystikoNetwork Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mystikonetwork', // Usually your GitHub org/user name.
  projectName: 'mystiko-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/mystikonetwork/mystiko-docs/blob/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'appId',
        apiKey: 'apiKey',
        indexName: 'mystikonetwork',
        contextualSearch: true
      },
      // Replace with your project's social card
      image: 'img/mystiko-social-card.jpg',
      navbar: {
        hideOnScroll: true,
        title: 'Mystiko Docs',
        logo: {
          alt: 'Mystiko Logo',
          src: 'img/mystiko-logo-white.svg',
          srcDark: 'img/mystiko-logo-black.svg',
        },
        items: [
          {
            href: 'https://github.com/mystikonetwork',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Tutorial',
                to: '/'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'X',
                href: 'https://x.com/MystikoNetwork',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/mystiko',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://medium.com/@Mystiko.Network',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mystikonetwork',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MystikoNetwork, Inc.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        darkTheme: darkCodeTheme,
        theme: lightCodeTheme,
      }
    }),
};

export default config;
