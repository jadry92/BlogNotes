import React from 'react'
import "./styles.scss"
import { Link, useStaticQuery, graphql } from 'gatsby';
import { progressSerializer } from '../../utils/serializers'
import ProjectCard from '../ProjectCard';
import { count } from 'console';

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
 
  const data = useStaticQuery(graphql`
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

  return (
    <div className="row">
      {data.allMdx.nodes.map( ( node: INode ) => {
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
      }).slice(0,numberOfProjects)}
    </div>
  )
}

export default ProjectsLayout 