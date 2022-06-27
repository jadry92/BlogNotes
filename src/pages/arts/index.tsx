import React from 'react'
import Loadable from "@loadable/component"
const LoadableSketchWrapper = Loadable(() => import('../../sketchs/SketchWrapper'))

const Arts = () => {
  return (
    <div>
      <LoadableSketchWrapper/>
    </div>
  )
}

export default Arts;