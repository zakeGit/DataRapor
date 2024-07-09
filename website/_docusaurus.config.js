// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DataRapor',
  tagline: 'Enerji,Proses,Uretim,Bakim Veri Toplama',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://datarapor.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ZakeGit', // Usually your GitHub org/user name.
  projectName: 'DataRapor', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr', // Varsayılan dil
    locales: ['tr', 'en'], // Kullanılacak diller
    localeConfigs: {
      en: {
        label: 'English',
      },
      tr: {
        label: 'Türkçe',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'DataRapor',
        logo: {
          alt: 'DataRapor Logo',
          src: 'img/dricon.png',
        },
        items: [

          {
            label: 'AnaSayfa',
            position: 'left',
            to: '/',
            items: [
              {
                label: 'Enerji Veri Toplama',
                to: '/enerji-veri-toplama',
              },
              {
                label: 'Proses Veri Toplama',
                to: '/proses-veri-toplama',
              },
              {
                label: 'Uretim Veri Toplama',
                to: '/uretim-veri-toplama',
              },
              {
                label: 'Bakim Yonetim Sistemi',
                to: '/bakim-yonetim-sistemi',
              },
              {
                label: 'Web Scada',
                to: '/web-scada',
              },
              {
                label: 'Entegrasyon',
                to: '/Entegrasyon',
              },
            
            ],
          },
  
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
         
          },
 
      
          {
            type: 'localeDropdown',
            position: 'right', // Dil değiştirici menüyü sağa yerleştiriyoruz
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Zake',
                href: 'https://zake.com.tr',
              },
              {
                label: 'Discord',
                href: 'https://zake.com.tr',
              },
        
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://zake.com.tr',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/zakeGit/DataRapor',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
