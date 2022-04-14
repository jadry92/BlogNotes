import React from 'react'
import { Link } from 'gatsby'
import { progressSerializer, createURL } from '../../utils/serializers'

interface IProps {
  blog: {
    title: string;
    date: string;
    description: string;
    folder: string;
    progress: number;
  }
}

const BlogCard = ({ blog }: IProps) => { 

  const progressObj =  progressSerializer(blog.progress)

  return (
    <div className="card mb-3 bg-color-3" >
      <div className="row g-0">
        <div className="col-md-4 col-3">
          <img src="" className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-7 col-8">
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.description}</p>
            <p className="card-text"><small className="text-muted">{blog.date}</small></p>
            <span className={`badge rounded-pill ${progressObj.color}`}>{blog.date}</span>
            <Link className='stretched-link' to={createURL(blog.folder, blog.title)}></Link>
          </div>
        </div>
        <div className="col-md-1 col-1 d-flex justify-content-center">
            <p className="align-self-center mb-0">{'-->'}</p>
        </div>
      </div>
    </div>  
  )
}

export default BlogCard