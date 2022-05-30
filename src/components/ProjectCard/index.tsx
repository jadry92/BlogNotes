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
      <div className="card mb-5 mx-4 rounded bg-color-3 text-center">
        <div className="card-body">
          <h3 className="card-title text-white">{project.title}</h3>
          <p className="card-text text-white">{project.description}</p>
          <div className="px-5">
            <div className="progress">
              <div className={`progress-bar ${progressObj.color}`} 
              role="progressbar" aria-valuenow={progressObj.nLevel} 
              aria-valuemin={0} aria-valuemax={100} 
              style={{ width: `${progressObj.progress}%` }}></div>
            </div>
          </div>
          <Link className='stretched-link' to={createURL(project.folder, project.title)}></Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard