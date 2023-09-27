// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Blink Docs",
  tagline: "Blink Payment API documentation",
  url: "https://docs.blinkpayment.co.uk",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,

          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        disableSwitch: true,
        defaultMode: "light",
      },
      navbar: {
        logo: {
          alt: "Blink Docs",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "productGuides",
            position: "left",
            label: "Platform",
          },
          {
            type: "docSidebar",
            sidebarId: "developerGuides",
            position: "left",
            label: "Developers",
          },
          {
            type: "docSidebar",
            sidebarId: "apiReference",
            position: "left",
            label: "REST API",
          },
          {
            type: "dropdown",
            label: "Resources",
            position: "left",
            items: [
              // {
              //   label: "What's new",
              //   to: "/blog",
              // },
              {
                label: "Postman collection",
                href: "https://github.com/Blink-Payment/blink-postman",
              },
              {
                label: "WooCommerce plugin",
                href: "https://github.com/Blink-Payment/Blink-WooCommerce",
              },
              {
                label: "Magento plugin",
                href: "https://github.com/Blink-Payment/Blink-Magento",
              },
            ],
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "Blink",
          src: "img/logo-white.svg",
        },
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Platform",
                to: "/docs/category/quick-start",
              },
              {
                label: "Developers",
                to: "/docs/developer-guides/introduction",
              },
              {
                label: "REST API",
                to: "/docs/api-reference/introduction",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              // {
              //   label: "What's new",
              //   to: "/blog",
              // },
              {
                label: "Postman collection",
                to: "https://github.com/Blink-Payment/blink-postman",
              },
              {
                label: "WooCommerce plugin",
                to: "https://github.com/Blink-Payment/Blink-WooCommerce",
              },
              {
                label: "Magento plugin",
                to: "https://github.com/Blink-Payment/Blink-Magento",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Contact support",
                to: "https://www.blinkpayment.co.uk/contact-us",
              },
              {
                label: "Create sandbox account",
                to: "https://www.blinkpayment.co.uk/developer-signup",
              },
              {
                label: "blinkpayment.co.uk",
                to: "https://blinkpayment.co.uk",
              },
            ],
          },
        ],
        copyright: `Blink is a trading name of Fidelity Payment Processing Limited. © ${new Date().getFullYear()} . All Rights Reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php", "python"],
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "apiDocs",
        docsPluginId: "classic",
        config: {
          restApi: {
            specPath: "blink-open-api-spec.yaml",
            outputDir: "api-reference-files",
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
  customFields: {
    mendableAnonKey: "3b35aead-65fd-47f0-8e7f-1943449e9006",
  },
};

module.exports = config;
