import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

interface IProps {
  children: React.ReactChild | React.ReactChild[] | JSX.Element[]
}

const BlogLayout = ({children} : IProps) => {
  return (
    <main className="bg-color-5">
      <Navbar urlRedirect='/blog'/>
      <section className='container'>
        <div className='row text-center my-4'>
          <h1 className='display-2 blog-title'>Blog</h1>
        </div>
        <div className="container">
          {children}
        </div>        
      </section>
      <Footer/>
    </main>
  )
}

export default BlogLayout