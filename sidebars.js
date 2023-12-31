/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  productGuides: [
    {
      type: "autogenerated",
      dirName: "product-guides",
    },
  ],

  developerGuides: [
    {
      type: "autogenerated",
      dirName: "developer-guides",
    },
  ],

  apiReference: [
    {
      type: "autogenerated",
      dirName: "api-reference",
    },
  ],
};

module.exports = sidebars;
