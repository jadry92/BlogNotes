import React from 'react'
import { graphql, Link } from 'gatsby'
import BlogLayout from '../../components/BlogLayout';

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
  }
}

interface IData {
  allMdx : { 
    nodes : Inode[];
  }
}


const BlogPage = ({ data } : {data : IData}) => {
  
  const createURL = (folder: string, title: string): string => {
    return `/${folder}/${title.replace(/ /g,'-')}`
  } 

  return (
    <BlogLayout>
      {
        data.allMdx.nodes.map((node) => (   
          <div key={node.id} className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4 col-3">
                <img src="" className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-7 col-8">
                <div className="card-body">
                  <h5 className="card-title">{node.frontmatter.title}</h5>
                  <p className="card-text">{node.frontmatter.description}</p>
                  <p className="card-text"><small className="text-muted">{node.frontmatter.date}</small></p>
                  <span className="badge rounded-pill bg-warning">{node.frontmatter.date}</span>
                  <Link className='stretched-link' to={createURL(node.frontmatter.folder, node.frontmatter.title)}></Link>
                </div>
              </div>
              <div className="col-md-1 col-1 d-flex justify-content-center">
                  <p className="align-self-center mb-0">{'-->'}</p>
              </div>
            </div>
          </div>
        ))
      }
    </BlogLayout>
  )
}

export default BlogPage