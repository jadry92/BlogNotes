import React from 'react'
import ProjectsLayout from '../../components/ProjectsLayout'
import { graphql } from 'gatsby'

export const query = graphql`
query GET_ALL_PROJECTS {
  allMdx(filter: {frontmatter: {folder: {eq: "projects"}}}) {
    nodes {
      slug
      id
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        description
        title
      }
    }
  }
}
`
interface IData {
  date : string,
  description : string
  title : string
}

interface IProps {
  data : { allMdx : { 
      nodes : [
        {
          id : string;
          slug : string ;
          frontmatter: IData;
        }
      ]
    }
  }
}

const Portfolio = ({ data } : IProps ) => {
  

  const projectsData = data.allMdx.nodes.map( (node) => (
    {
      title: node.frontmatter.title,
      description: node.frontmatter.description,
      imageURL: node.id,
      id: node.id,
      slug : node.id,
    }
  ))

  return (
    <div>
      <ProjectsLayout projects={projectsData}/>
    </div>
  )
}

export default Portfolio