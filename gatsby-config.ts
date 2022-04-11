import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `BlogNotes.Dev`,
    siteUrl: `https://blognotes.dev`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-153097760-1"
    }
  }, 
  "gatsby-plugin-sharp",
  `gatsby-transformer-sharp`,
  `gatsby-remark-images`,
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
  }]
};

export default config;
