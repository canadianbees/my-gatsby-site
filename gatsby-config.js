/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", {
    resolve: `gatsby-source-filesystem`,
    options: {
      // The unique name for each instance
      name: `project_images`,
      // Path to the directory
      path: `${__dirname}/src/components/assets/data.json`,
    }}],
  flags: {
    DEV_SSR: true,
  },
};