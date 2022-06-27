import React from "react"

import HomeLayout from "../components/HomeLayout"
import ProjectsLayout from "../components/ProjectsLayout"
import Footer from "../components/Footer"
import LatesPublication from "../components/LatesPublication"


import { Link } from 'gatsby'
import ArrowIcon from '../../static/images/navigate_next_black_24dp.svg'

interface IProps {
  data : []
}

const Home = ({ data } : IProps ) => {

  return (
    <HomeLayout>
      <div className="container-fluid my-vh-90">
        <div className="row h-50 align-content-center">
          <div className="col text-center">
            <h1 className="display-1"> Welcome to <strong className="blog-title">BlogNotes.dev</strong></h1>
          </div>
        </div>
        <div className="row h-50 align-content-center mx-3">
          <div className="col-12">
            <h2 className="display-4">
              Hi!, I'm <Link to='/about'>Johan</Link>. 
            </h2>
          </div>
          <div className="col-12">
            <p className="h3">
              I'm a geek passionate about technology and in love with science. 
              I studied a bachelor of science and electronics engineering, 
              when I developed a huge interest in processors and software.
              This site is been migrated to Gatsby at the moment :)
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row bg-color-2">
          <div className="col-12 my-3">
            <h2 className="ps-4">Projects:</h2>
          </div>
        </div>
        <div className="row bg-color-2">
          <ProjectsLayout numberOfProjects={4}/>
        </div>
      </div>


      <div className="container-fluid bg-color-5">
        <div className="row">
          <div className="col-12 my-3">
            <h2 className="ps-4">Lates Publication:</h2>
          </div>
        </div>
        <div className="row">
          <div className="offset-1 col-10 offset-md-3 col-md-6">
            <LatesPublication />
          </div>
        </div>
        <div className="row py-5">
          <p className="h4 d-flex justify-content-center">
            <Link className='' to='/blog'><ArrowIcon width="50" height="50"/> All posts <ArrowIcon width="50" height="50"/></Link>
          </p>
        </div>
      </div>
      <Footer/>

    </HomeLayout>
  )
}

export default Home
