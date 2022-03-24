import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-153097760-1"
    }
  }, 
  "gatsby-plugin-sharp",
  "gatsby-plugin-mdx", 
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
      "name": "content",
      "path": "./src/content/"
    },
  }]
};

export default config;
