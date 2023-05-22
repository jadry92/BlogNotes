import React from 'react'
import Loadable from "@loadable/component"
const LoadableSketchWrapper = Loadable(() => import('../../../src/sketchs/SketchWrapper'))

const Sketch = () => {
  return (
    <div>
      <LoadableSketchWrapper/>
    </div>
  )
}

export default Sketch;