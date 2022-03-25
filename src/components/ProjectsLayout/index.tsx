import React from 'react'
import "./styles.scss"
import { Link } from 'gatsby';

interface IProject {
  title : string;
  description : string;
  imageURL: string;
  id: string;
  slug : string ;
}

interface IProps {
  projects: IProject[]
}

const ProjectsLayout = ({ projects }: IProps) => {
  return (
    <div className="row">
      {projects.map( ( project: IProject ) => (
      <div key={project.id}  className="col-sm-12 col-md-6">
        <div className="card mb-5 mx-4 border border-primary rounded">
          <Link className="card-link card-body"  to={project.slug}>
            <h5 className="card-title text-center">{project.title}</h5>
            <p className="card-text text-dark">{project.description}</p>
          </Link>
        </div>
      </div>
      ))}
    </div>
  )
}

export default ProjectsLayout 