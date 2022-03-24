const fs = require('fs');
const stream = require('stream')
const util = require('util')
let data = ''

let readableStream = fs.createReadStream(__dirname + './input.txt')

readableStream.setEncoding('utf-8')
readableStream.on('data', (chunk) => {
  data += chunk;
})

readableStream.on('end', () => {
  console.log(data);
})

class Mayus extends stream.Transform {
  constructor () {
    super();
  }

  _transform = (chunk,codifc, cb) => {
    const chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    cb()
  }
}

let mayus = new Mayus;

readableStream.pipe(mayus).pipe(process.stdout)