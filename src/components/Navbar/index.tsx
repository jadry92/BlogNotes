import { Link } from 'gatsby'
import React from 'react'
import BlogIcon from '../../../static/images/logo/logoBn.svg'

interface IProps {
  urlRedirect : string;
}

const Navbar = ({urlRedirect} : IProps) => {
  return (
    <nav className="navbar navbar-light bg-color-2">
      <div className="container-fluid">
        <Link to={urlRedirect} className="navbar-brand blog-title"><BlogIcon width={45} height={45}/> BlogNotes.dev</Link>
      </div>
    </nav>
  )
}

export default Navbar