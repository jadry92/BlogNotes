import React from "react"
import { Link, graphql } from "gatsby"
import HomeLayout from "../components/HomeLayout"
import ProjectsLayout from "../components/ProjectsLayout"
import Footer from "../components/Footer"


interface IProps {
  data : []
}

const Home = ({ data } : IProps ) => {

  return (
    <HomeLayout>
      <div className="container-fluid my-vh-90">
        <div className="row h-50 align-content-center">
          <div className="col text-center">
            <h1 className="display-1"> Welcome to <strong className="title-font-family">BlogNotes.dev</strong></h1>
          </div>
        </div>
        <div className="row h-50 align-content-center mx-3">
          <div className="col-12">
            <h2 className="display-4">
              I'm Johan.
            </h2>
          </div>
          <div className="col-12">
            <p className="h3">
              This site is been migrated to Gatsby at the moment :)
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row bg-color-2">
          <div className="col-12 my-3">
            <h3 className="ps-4">Projects:</h3>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <ProjectsLayout numberOfProjects={2}/>
      </div>

      <Footer/>

    </HomeLayout>
  )
}

export default Home
