import React from "react"
import { Link, graphql } from "gatsby"
import HomeLayout from "../components/HomeLayout"
import ProjectsLayout from "../components/ProjectsLayout"
import Footer from "../components/Footer"

export const query = graphql`
query GET_ALL_PROJECTS_HOME {
  allMdx(filter: {frontmatter: {folder: {eq: "projects"}}}) {
    nodes {
      slug
      id
      frontmatter {
        description
        title
      }
    }
  }
}
`

interface IData {
  description : string
  title : string
}

interface IProps {
  data : { allMdx : { 
      nodes : [
        {
          id : string;
          slug : string;
          frontmatter: IData;
        }
      ]
    }
  }
}

const Home = ({ data } : IProps ) => {

  const projectsData = data.allMdx.nodes.map( (node) => (
    {
      title: node.frontmatter.title,
      description: node.frontmatter.description,
      imageURL: node.id,
      id: node.id,
      slug: node.slug,
    }
  ))

  return (
    <HomeLayout>
      <div className="row vh-100">
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
              This site contain my projects and thoughts.
            </p>
          </div>
        </div>
      </div>

      <div className="row bg-color-2">
        <div className="col-12">
          <h3 className="ps-4">Projects:</h3>
        </div>
      </div>
      <div className="row bg-color-2">
      <ProjectsLayout projects={projectsData}/>
      </div>

      <Footer/>

    </HomeLayout>
  )
}

export default Home
