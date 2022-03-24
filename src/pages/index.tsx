import React from "react"
import { Link } from 'gatsby'

const Home = () => {
  return (
    <main>
      <Link to='/blog'>Blog</Link>
      <Link to='/portfolio'>Portfolio</Link>
    </main>
  )
}

export default Home
