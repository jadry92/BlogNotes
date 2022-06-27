// Game of the life in Javascript with P5.js
// by : @jadry 92 - Johan Suarez Largo
import { P5Instance } from 'react-p5-wrapper';
const isBrowser = typeof window !== "undefined"

const lifeGame = (p: P5Instance) =>{ 
  let nx = 25
  let ny = 25
  let compute = true
  let fr = 5
  let gameState = new Array(ny*nx)
  let newGameState = new Array(ny*nx)
  let canvas
 
  const initialImage = () => {
    for (var i = 0; i < 16; i++) {
      const ix = (i % 4)
      let iy = p.floor((i - ix) / 4)
      gameState[4+(ix*6) + (3+(iy*6))*nx] = 1
      gameState[4+(ix*6) + (4+(iy*6))*nx] = 1
      gameState[4+(ix*6) + (5+(iy*6))*nx] = 1
      gameState[3+(ix*6) + (5+(iy*6))*nx] = 1
      gameState[2+(ix*6) + (4+(iy*6))*nx] = 1
    }
  }

  p.mousePressed = () => {
    if (p.mouseButton === p.LEFT) {
      if (p.mouseX < p.width && p.mouseY < p.height && p.mouseX >= 0 && p.mouseY >= 0){
        let ix = p.floor((nx*p.mouseX)/p.width)
        let iy = p.floor((ny*p.mouseY)/p.height)
        newGameState[ix + iy*nx] = 1
      }
    } else {
      if (p.mouseX < p.width && p.mouseY < p.height && p.mouseX >= 0 && p.mouseY >= 0){
        let ix = p.floor((nx*p.mouseX)/p.width)
        let iy = p.floor((ny*p.mouseY)/p.height)
        newGameState[ix + iy*nx] = 0
      }
    }
  }

  p.keyTyped = () => {
    if (p.key === 'a' || p.touches.length > 1 ){
      compute = !compute
    }
  }


  p.setup = () => {
    canvas = p.createCanvas(p.floor(p.windowWidth*0.5), p.floor(p.windowWidth*0.5))
    canvas.parent('sketch-div')
    for (let i = 0; i < ny*nx; i++) {
      gameState[i] = 0
    }
    // index  ix + iy * nx
    initialImage()

    newGameState = gameState.slice()
    p.frameRate(fr)
  }

  p.draw = () => {
    for (let y = 0; y < ny; y++) {
      for (let x = 0; x < nx; x++) {
        if (compute){
          let totalNear = 0
          // add the values
          for (let i = 0; i < 9; i++) {
            if (i != 4) {
              const ix = (i % 3) - 1
              const iy = p.floor((i - ix) / 3) - 1
              let x_ix = (x + ix) % nx
              let y_iy = (y + iy) % ny
              if (x_ix === -1){
                x_ix = nx-1
              }
              if (y_iy === -1){
                y_iy = ny-1
              }
              totalNear += gameState[x_ix + (y_iy * nx)]
            }
          }

          if (gameState[x + y*nx] === 0 && totalNear === 3) {
            // Rule #1: if the cell is dead and there are 3 cells alife close, will be revivie
            newGameState[x + y*nx] = 1
          }
          else if (gameState[x + y*nx] === 1 && (totalNear < 2 || totalNear > 3)) {
            // Rule #2: if the cell is alive and there are less than two or more tha three cells alive, will be died
            newGameState[x + y*nx] = 0
          }
        }
        // Draw the base

        if (newGameState[x + y*nx] === 1) {
          p.fill(255,0,0)
          p.square((x*p.width/nx), (y*p.height/ny), p.width/nx);
        } else {
          p.fill(255,255,255)
          p.square((x*p.width/nx), (y*p.height/ny), p.width/nx);
        }
      }
    }
    gameState = newGameState.slice()
  }

}


export default lifeGame;