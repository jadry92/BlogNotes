import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const query = graphql`
  query GET_POST ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

interface IData {
  mdx : { 
    body : string, 
    frontmatter : { 
      title: string,
      date: string
    }
  }
}

const BlogPost = ({ data  } : { data : IData}) => {
  return (
    <div >
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.date}</p>
      <div>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </div>
    </div>
  )
}


export default BlogPost


