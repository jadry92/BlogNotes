import React from 'react'
import { graphql, Link } from 'gatsby'
import BlogLayout from '../../components/BlogLayout';

export const query = graphql`
  query GET_ALL_POSTS {
    allMdx(
      filter: {frontmatter: {folder: {eq: "content"}}}
      sort: {fields: frontmatter___date, order: DESC}
      ) {
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
                  <p className="card-text">{node.frontmatter.date}</p>
                  <p className="card-text"><small className="text-muted">{node.frontmatter.date}</small></p>
                  <span className="badge rounded-pill bg-warning">{node.frontmatter.date}</span>
                  <Link className='stretched-link' to={`/blog/${node.slug}`}></Link>
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