import React from 'react'
import { ReactP5Wrapper,  } from 'react-p5-wrapper';
import lifeGame from './sketch_life_game'

const SketchWrapper = () => {
  return (
    <div id="sketch-div" className="d-flex justify-content-center align-items-center">
      <ReactP5Wrapper sketch={lifeGame}/>
    </div>
  )
}


export default SketchWrapper;