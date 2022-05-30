import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { progressSerializer, createURL, thumbnailPath } from '../../utils/serializers'
import { StaticImage } from "gatsby-plugin-image"

interface IProps {
  blog: {
    id: string;
    title: string;
    date: string;
    description: string;
    folder: string;
    progress: number;
    thumbnail: string;
  }
}

const BlogCard = ({ blog }: IProps) => { 

  const progressObj =  progressSerializer(blog.progress)

  return (
    <div id={blog.id} className="card mb-3 bg-color-3 text-white text-center" >
      <div className="card-body">
          <h4 className="card-title">{blog.title}</h4>
          <p className="card-text">{blog.description}</p>
        <div className="card-footer">
          <p className="card-text">
            <small className="text-white-50 px-3">{blog.date}</small>
            <span className={`badge rounded-pill ${progressObj.color}`}>{progressObj.wLevel}</span>
          </p>
        </div>
      </div>
      <Link className='stretched-link' to={createURL(blog.folder, blog.title)}></Link>
    </div>  
  )
}

export default BlogCard