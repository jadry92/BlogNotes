import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `BlogNotes.Dev`,
    siteUrl: `https://blognotes.dev`,
    description: 'personal blog',
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
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /static/ 
      }
    }
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-katex`,
          options: {
            strict: `ignore`
          }
        }
      ],
    },
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
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "blognotes.dev",
      short_name: "blognotes",
      start_url: "/",
      background_color: "#3d405b",
      theme_color: "#3d405b",
      display: "standalone",
      icon: "static/images/logo/logoBn.png" // This path is relative to the root of the site.
    }
  }
  ]
};

export default config;
