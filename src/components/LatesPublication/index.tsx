import React from 'react'
import {useStaticQuery, graphql } from 'gatsby';
import BlogCard from '../BlogCard';

const LatesPublication = () => {
  
  const data = useStaticQuery(graphql`
  query GET_LAST_POST {
    allMdx(
      filter: {frontmatter: {folder: {eq: "blog"}, published: {eq: true}}}
      sort: {fields: frontmatter___date, order: DESC}
      limit: 1
      ) {
      nodes {
        slug
        id
        frontmatter {
          description
          date(formatString: "MMMM D, YYYY")
          title
          folder
          progress
        }
      }
    }
  }
  `)
  const lastBlog = {
    title: data.allMdx.nodes[0].frontmatter.title,
    date: data.allMdx.nodes[0].frontmatter.date,
    description: data.allMdx.nodes[0].frontmatter.description,
    folder: data.allMdx.nodes[0].frontmatter.folder,
    progress: data.allMdx.nodes[0].frontmatter.progress
  }

  return (
    <div className="container">
      <BlogCard blog={lastBlog}/>
    </div>
  )
}

export default LatesPublication