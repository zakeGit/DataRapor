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
        
        },
        blog: {
          showReadingTime: true,

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
 
        },
        theme: {
          customCss: './src/css/custom.css',
        },

 
        gtag: {
          trackingID: 'G-N9TMNW9MEP',
          anonymizeIP: true,
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
            label: 'Ürünler',
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
            label: 'Örnek Uygulamalar',
            position: 'left',
            to: '/',
            items: [
              {
                label: 'Buhar Jeneratör Sistemleri',
                to: '/docs/Uygulamalar/buharjenerator',
              },
              {
                label: 'Buhar Kazanı Kontrol Sistemleri',
                to: '/docs/Uygulamalar/buharvekizginyag',
              },
              {
                label: 'Enerji İzleme',
                to: '/docs/Uygulamalar/enerjiizleme',
              },
              {
                label: 'Isıtma-Sogutma Kontrol Sistemleri',
                to: '/docs/Uygulamalar/IsitmaSogutma',
              },
              {
                label: 'Gaz İzleme Sistemleri',
                to: '/docs/Uygulamalar/gazmonitor',
              },
              {
                label: 'İklimlendirme',
                to: '/docs/Uygulamalar/iklimlendirme',
              },
            
              {
                label: 'İnkubasyon',
                to: '/docs/Uygulamalar/inkubasyon',
              },
              
              {
                label: 'Reverse Osmos Sistemleri',
                to: '/docs/Uygulamalar/RO',
              },

              {
                label: 'Ultrafiltrasyon Sistemleri',
                to: '/docs/Uygulamalar/UF',
              },
            
              {
                label: 'Susuzlaştırma Sistemleri',
                to: '/docs/Uygulamalar/susuzlastirma',
              },
              
              {
                label: 'Temiz Oda Sistemleri',
                to: '/docs/Uygulamalar/temizoda',
              },

            ],
          },
 
          {
            label: 'Demo',
            position: 'left',
            to: 'https://demo.datarapor.com/',
          
          },
  
       
          {
            type: 'html',
            value: '<img src="/img/phone.svg" alt="DataRapor Logo" style="height:30px;" />',
            position: 'right',
          },

          {
            label: 'TEL : 0 312 386 05 77',
            href: '/iletisim',
            position: 'right',
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
                label: 'Katmanlar',
                href: '/docs/installation',
              },
              {
                label: 'Kurulum',
                href: '/docs/installation',
              },
              {
                label: 'Konfigurasyon',
                href: '/docs/Configuration',
              },
              {
                label: 'DataRapor Kullanımı',
                href: '/docs/Use',
              },
              {
                label: 'Örnek Uygulamalar',
                href: '/docs/Uygulamalar/buharjenerator',
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
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@datarapor',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/datarapor/?igsh=MWRiNmF1aHhqam1sdQ%3D%3D',
              },
              {
                label: 'X',
                href: 'https://x.com/DataRapor?t=JxhQAALmUuuHO88VoBYDGg&s=09',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Makaleler',
                href: '/blog',
              },
              {
                label: 'İletişim',
                href: '/iletisim',
              },
            ],
          },
        ],
        copyright: `
          <div style="text-align: center; margin-bottom: 5px;">
            <p><strong>Tel: 0 312 386 05 77</strong></p>
          </div>
          <div>
            Copyright © ${new Date().getFullYear()} by ZAKE.
          </div>
        `,
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      imageZoom: {
        selector: ".screenshot, .image-narrow",
        options: {
          // medium-zoom options
          margin: 24,
          scrollOffset: 0,
        },
      },


    }),

    plugins: [
    
   
      "plugin-image-zoom",
    ],
 
};

//export default config;
module.exports = config;