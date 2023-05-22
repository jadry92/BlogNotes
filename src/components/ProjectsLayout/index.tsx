import React from 'react'
import "./styles.scss"
import { useStaticQuery, graphql } from 'gatsby';
import ProjectCard from '../ProjectCard';


interface INode {
  id: string;
  slug : string;
  frontmatter : {
    description : string;
    title : string;
    folder : string;
    progress : number; 
  }
}

interface IProps {
  numberOfProjects: number | undefined
}

const ProjectsLayout = ({ numberOfProjects }: IProps) => {
 
  const allData = useStaticQuery(graphql`
    query GET_ALL_PROJECTS_HOME {
      allMdx(
        filter: {frontmatter: {folder: {eq: "projects"}, published: {eq: true}}}
        sort: {fields: frontmatter___levelImportance, order: ASC}
        ) {
        nodes {
          slug
          id
          frontmatter {
            description
            title
            folder
            progress
          }
        }
      }
    }
  `)

  let data = []
  if (numberOfProjects){
    data = allData.allMdx.nodes.slice(0,numberOfProjects)
  } else {
    data = allData.allMdx.nodes
  }

  return (
    <div className="row">
      {data.map( ( node: INode ) => {
        const project = {
          title : node.frontmatter.title, 
          description : node.frontmatter.description,
          imageURL: '',
          id: node.id,
          slug : node.slug,
          folder: node.frontmatter.folder,
          progress: node.frontmatter.progress,
        }

        return <ProjectCard key={project.id} project={project} />
      })}
    </div>
  )
}

export default ProjectsLayout 