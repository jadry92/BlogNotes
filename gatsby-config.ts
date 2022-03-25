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
  "gatsby-plugin-mdx",
  "gatsby-plugin-sass",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "projects",
      "path": "./src/projects/"
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "content",
      "path": "./src/content/"
    },
  }]
};

export default config;
