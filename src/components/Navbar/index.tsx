import { Link } from 'gatsby'
import React from 'react'

interface IProps {
  urlRedirect : string;
}

const Navbar = ({urlRedirect} : IProps) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to={urlRedirect} className="navbar-brand">BlogNotes.dev</Link>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </form>
      </div>
    </nav>
  )
}

export default Navbar