import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'

// export const query = graphql`
//   query GET_POST ($id: String) {
//     mdx(id: {eq: $id}) {
//       frontmatter {
//         title
//         date(formatString: "MMMM D, YYYY")
//       }
//       body
//     }
//   }
// `

interface IPageContext {
  slug: string;
  id: string;
  body : string;
  frontmatter : { 
    title: string;
    date: string;
    folder: string;
  }
}

const BlogPost = ({ pageContext } : { pageContext : IPageContext}) => {

  return (
    <div className="container">
      <h1>{pageContext.frontmatter.title}</h1>
      <p>{pageContext.frontmatter.date}</p>
      <div>
        <MDXRenderer>
          {pageContext.body}
        </MDXRenderer>
      </div>
    </div>
  )
}


export default BlogPost


