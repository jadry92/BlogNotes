import React from 'react'
import { graphql, Link } from 'gatsby'
import BlogLayout from '../../components/BlogLayout';
import { progressSerializer, createURL } from '../../utils/serializers'
import BlogCard from '../../components/BlogCard';

export const query = graphql`
  query GET_ALL_POSTS {
    allMdx(
      filter: {frontmatter: {folder: {eq: "blog"}, published: {eq: true}}}
      sort: {fields: frontmatter___date, order: DESC}
      ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
          folder
          progress
        }
        slug
        id
      }
    }
  }
`

interface Inode {
  id : string;
  frontmatter : { 
    title: string;
    date: string;
    description: string;
    folder: string;
    progress: number;
  }
}

interface IData {
  allMdx : { 
    nodes : Inode[];
  }
}


const BlogPage = ({ data } : {data : IData}) => {

  return (
    <BlogLayout>
      {
        data.allMdx.nodes.map((node) => (   
          <BlogCard key={node.id} 
            blog={{
              title: node.frontmatter.title,
              date: node.frontmatter.date,
              description: node.frontmatter.description,
              folder: node.frontmatter.folder,
              progress: node.frontmatter.progress
            }}
          />
        ))
      }
    </BlogLayout>
  )
}

export default BlogPage