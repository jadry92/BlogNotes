import React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx'
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


