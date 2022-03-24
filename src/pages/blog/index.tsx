import React from 'react'
import { graphql, Link } from 'gatsby'

export const query = graphql`
  query GET_ALL_POSTS {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        slug
        id
      }
    }
  }
`

interface Inode {
  id : string;
  slug : string;
  frontmatter : { 
    title: string;
    date: string;
  }
}

interface IData {
  allMdx : { 
    nodes : [Inode];
  }
}

const BlogPage = ({ data } : {data : IData}) => {
  return (
    <div>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </article>
        ))
      }
    </div>
  )
}

export default BlogPage