import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <main className='fluid-container bg-color-3 text-white min-vh-100'>

      <Navbar urlRedirect='/'/>

      <div className="row">
        <div className="col-12">
            <h2 className="display-4 text-center">
              I'm Johan. 
            </h2>
          </div>
      </div>

      <div className="row mt-5 mb-3">
        <div className='col-12 col-md-4 d-flex justify-content-center mb-3'>
          <StaticImage 
              src='../../static/images/about/personal.jpeg' 
              alt="johan suarez"
              className='align-self-center'
              width={250}
            />
        </div> 
        <div className="col-12 col-md-6 px-4">
          <p className='h4'>
          I'm a technology enthusiastic who believe in the democratization 
          of education. Also a geek passionate about technology and in love 
          with science. I studied a bachelor of science and electronics 
          engineering, when I developed a huge interest in processors and 
          software. I have had the opportunity to develop complex 
          algorithms with technologies like CUDA-C, Open-CL, Javascript, 
          Python and Linux. I'm goal-oriented, curious and collaborative, 
          and enjoy working in a team. I'm also very good at explaining 
          the background of technology and passionate about passing on my 
          knowledge.
          </p>
        </div>
      </div>
      <div className="row mt-auto">
        <Footer />
      </div>
    </main>
  )
}

export default About