import React from 'react'
import ProjectsLayout from '../../components/ProjectsLayout'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

interface IProps {

}

const Portfolio = ({  } : IProps ) => {


  return (  
    <main className="bg-color-2 vh-100">
      <Navbar urlRedirect='/'/>
        <section className='container h-75'>
          <div className='row text-center my-4'>
            <h1 className='display-2 blog-title'>Projects</h1>
          </div>
          <div className="container">
            <ProjectsLayout numberOfProjects={undefined}/>
          </div>        
        </section>
      <Footer/>
    </main>
  )
}

export default Portfolio