
const path = require(`path`)


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/BlogPost.tsx`)
  const result = await graphql(`
  query GET_BLOG_POST {
      allMdx(
        filter: {frontmatter: { published: {eq: true}}} 
        sort: {fields: frontmatter___date, order: DESC}
        ) {
        nodes {
          slug
          id
          body
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            folder
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }
 
  result.data.allMdx.nodes.forEach((node) => {
    if (node.frontmatter.title !== '') {
      const url = `${node.frontmatter.folder}/${node.frontmatter.title.replace(/ /g,'-')}`
      createPage({
        path: url,
        component: blogPostTemplate,
        context: node,
      })
    }
  })
}