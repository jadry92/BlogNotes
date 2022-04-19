import React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Footer from "../components/Footer";

import { Link } from 'gatsby'
import ArrowIcon from '../../static/images/chevron_left_black_24dp.svg'
import Navbar from "../components/Navbar";

interface IPageContext {
  slug: string;
  id: string;
  body : string;
  frontmatter : { 
    title: string;
    date: string;
    folder: string;
  }
}

const BlogPost = ({ pageContext } : { pageContext : IPageContext}) => {

  return (
    <div className="container-fluid bg-color-3 text-white min-vh-100">
      <div className="row">
        <Navbar urlRedirect="/"/>
      </div>
      <div className="row">
        <h1 className="text-center mt-5">{pageContext.frontmatter.title}</h1>
        <p className="text-center">{pageContext.frontmatter.date}</p>
      </div>
      <div className="row mt-4">
        <div className="col-md-8 offset-md-2">
          <MDXRenderer>
            {pageContext.body}
          </MDXRenderer>
        </div>
      </div>
      <div className="row py-2">
          <p className="h4 d-flex justify-content-center">
            <Link className='' to={`/blog#${pageContext.id}`}><ArrowIcon width="50" height="50"/>Back<ArrowIcon width="50" height="50"/></Link>
          </p>
        </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  )
}


export default BlogPost


