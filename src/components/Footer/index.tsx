import React from 'react'
import { Link } from 'gatsby'

const Footer = () : JSX.Element => {
  return (
    <footer className='footer mt-auto py-3 bg-color-4'>
      <div className="container">
        <div className="text-light">
          <p> Contact me on <a href="https://www.linkedin.com/in/johan-suarez-largo-a9980499/">Linkedin</a> and <a href="mailto:johan@blognotes.dev">mail</a></p>
        </div>
        <div className="text-light">
          <p> You can find my thoughts <Link to='/blog'>Blog</Link></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer