import React from 'react';
import { Link } from 'gatsby';
import { progressSerializer } from '../../utils/serializers'

interface IProject {
  title : string;
  description : string;
  imageURL: string;
  id: string;
  slug : string;
  folder: string;
  progress: number;
}

const ProjectCard = ({ project }: { project : IProject }) => {
  
  const createURL = (folder: string, title: string): string => {
    return `/${folder}/${title.replace(/ /g,'-')}`
  } 

  const progressObj =  progressSerializer(project.progress)
  
  return (
    <div className="col-sm-12 col-md-6">
      <div className="card mb-5 mx-4 border border-primary rounded">
        <div className="card-body">
          <h5 className="card-title text-center">{project.title}</h5>
          <p className="card-text text-dark">{project.description}</p>
          <Link className='stretched-link' to={createURL(project.folder, project.title)}></Link>
          <div className="progress">
            <div className={`progress-bar ${progressObj.color}`} 
            role="progressbar" aria-valuenow={progressObj.nLevel} 
            aria-valuemin={0} aria-valuemax={100} 
            style={{ width: `${progressObj.progress}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard