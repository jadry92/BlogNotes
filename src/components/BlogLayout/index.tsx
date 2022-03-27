import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

interface IProps {
  children: React.ReactChild | React.ReactChild[] | JSX.Element[]
}

const BlogLayout = ({children} : IProps) => {
  return (
    <section className="d-flex flex-column vh-100">
      <Navbar urlRedirect='/blog'/>
      <main className='container'>
        <div className='row text-center my-4'>
          <p className='h1'>Blog</p>
        </div>
        <div className="container">
          {children}
        </div>        
      </main>
      <Footer/>
    </section>
  )
}

export default BlogLayout