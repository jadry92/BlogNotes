import React from 'react'
import { Link } from 'gatsby'

import LinkedinIcon from '../../../static/images/social/linkedin.svg'
import GithubIcon from '../../../static/images/social/github.svg'
import TwitterIcon from '../../../static/images/social/twitter.svg'
import EmailIcon from '../../../static/images/social/email.svg'

const Footer = () : JSX.Element => {
  return (
    <footer className='footer mt-auto py-3 bg-color-4'>
      <div className="container">
        <div className="row text-light text-center">
          <p> Any question ? :</p>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <a href="mailto:johan@blognotes.dev" className='mx-2'>
              <EmailIcon width="30" height="30"/> 
            </a>
            <a href="https://github.com/jadry92" className='mx-2'>
              <GithubIcon width="30" height="30"/> 
            </a>
            <a href="https://www.linkedin.com/in/johan-suarez-largo-a9980499/" className='mx-2'> 
              <LinkedinIcon width="30" height="30"/> 
            </a>
            <a href="https://twitter.com/jadry92" className='mx-2'> 
              <TwitterIcon width="30" height="30"/> 
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer