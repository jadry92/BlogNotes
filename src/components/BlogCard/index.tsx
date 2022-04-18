import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { progressSerializer, createURL, thumbnailPath } from '../../utils/serializers'
import { StaticImage } from "gatsby-plugin-image"

interface IProps {
  blog: {
    title: string;
    date: string;
    description: string;
    folder: string;
    progress: number;
    thumbnail: string;
  }
}

const BlogCard = ({ blog }: IProps) => { 
  const image = '../../../static/images/JavaScript_logo_2.png'
  const progressObj =  progressSerializer(blog.progress)

  return (
    <div className="card mb-3 bg-color-3 px-1 text-white" >
      <div className="row">
        <div className="col-md-4 col-12 d-flex justify-content-center">
          <StaticImage 
            width={130}
            height={130}
            placeholder="blurred"
            src={image} 
            alt="blogImage"
            className='align-self-center m-5'
          />
        </div>
        <div className="col-md-8 col-15">
          <div className="card-body">
            <h5 className="card-title text-center">{blog.title}</h5>
            <p className="card-text">{blog.description}</p>
            <p className="card-text"><small className="text-white-50">{blog.date}</small></p>
            <div className="d-flex justify-content-end">
              <span className={`align-self-end badge rounded-pill ${progressObj.color}`}>{progressObj.wLevel}</span>
            </div>
            <Link className='stretched-link' to={createURL(blog.folder, blog.title)}></Link>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default BlogCard