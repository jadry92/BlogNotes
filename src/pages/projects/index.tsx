import React from 'react'
import ProjectsLayout from '../../components/ProjectsLayout'


interface IProps {
  data : []
}

const Portfolio = ({ data } : IProps ) => {


  return (
    <div>
      <ProjectsLayout numberOfProjects={4}/>
    </div>
  )
}

export default Portfolio