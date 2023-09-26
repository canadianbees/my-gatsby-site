/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Celina Alzenor's Personal Website`,
    siteUrl: `https://calzenor.gatsbyjs.io/`
  },
  plugins: ["gatsby-plugin-styled-components", `gatsby-plugin-image`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp`, `gatsby-plugin-netlify`
    ,{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/components/Portfolio/assets`,
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/components/Portfolio/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/assets/images/favicon.png"
      }
    }
  ],
  flags: {
    DEV_SSR: true,
  },
};