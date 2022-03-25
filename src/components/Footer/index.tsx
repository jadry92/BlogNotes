import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <div className='row bg-color-4'>
      <div className="row text-light">
        <p> Contact me on <a href="https://www.linkedin.com/in/johan-suarez-largo-a9980499/">Linkedin</a> and <a href="mailto:johan@blognotes.dev">mail</a></p>
      </div>
      <div className="row text-light">
        <p> You can find my thoughts <Link to='/blog'>Blog</Link></p>
      </div>
    </div>
  )
}

export default Footer