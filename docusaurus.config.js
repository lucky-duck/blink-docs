// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
module.exports = async function () {
  const lightCodeTheme = require("prism-react-renderer/themes/github");
  const darkCodeTheme = require("prism-react-renderer/themes/dracula");

  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: "Blink Docs",
    tagline: "Payment wizardry - the quick, easy and secure way to get paid",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://docs.blinkpayment.co.uk",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: "blink", // Usually your GitHub org/user name.
    // projectName: "docusaurus", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: "en",
      locales: ["en"],
    },
    stylesheets: [
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
    ],

    presets: [
      [
        "classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        {
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: undefined,
            docLayoutComponent: "@theme/DocPage",
            docItemComponent: "@theme/ApiItem",
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
        },
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          disableSwitch: true,
          defaultMode: "light",
        },
        image: "img/docusaurus-social-card.jpg",
        navbar: {
          logo: {
            alt: "Blink Docs",
            src: "img/logo.svg",
            width: 140,
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
                {
                  label: "What's new",
                  to: "/blog",
                },
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
            {
              to: "https://www.blinkpayment.co.uk/contact-us",
              label: "Support",
            },
            {
              to: "https://blinkpayment.co.uk",
              label: "blinkpayment.co.uk",
              position: "right",
            },
            {
              to: "https://secure.blinkpayment.co.uk/login",
              label: "Login",
              position: "right",
              className: "login-button",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Tutorial",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Stack Overflow",
                  href: "https://stackoverflow.com/questions/tagged/docusaurus",
                },
                {
                  label: "Discord",
                  href: "https://discordapp.com/invite/docusaurus",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/docusaurus",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  to: "/blog",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/facebook/docusaurus",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),

    plugins: [
      [
        "docusaurus-plugin-openapi-docs",
        {
          id: "apiDocs",
          docsPluginId: "classic",
          config: {
            // petstore: {
            //   // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
            //   specPath: "examples/petstore.yaml", // Path to designated spec file
            //   outputDir: "api/petstore", // Output directory for generated .mdx docs
            //   sidebarOptions: {
            //     groupPathsBy: "tag",
            //   },
            // },
            burgers: {
              specPath: "api-reference-1.20.0.yaml",
              outputDir: "docs/api-reference",
            },
          },
        },
      ],
    ],
    themes: ["docusaurus-theme-openapi-docs"], // Allows use of @theme/ApiItem and other components
  };

  return config;
};
