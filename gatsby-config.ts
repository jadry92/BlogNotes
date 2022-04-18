import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `BlogNotes.Dev`,
    siteUrl: `https://blognotes.dev`
  },
  plugins: [{
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        "G-GGJ6QEP30D", 
      ],
      pluginConfig: {
        head: true        
      },
    }
  },
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  "gatsby-remark-images",
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 650,
          },
        },
      ],
    },
  },
  "gatsby-plugin-sass",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "content",
      "path": "./content/"
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "static",
      "path": "./static/"
    },
  }]
};

export default config;
