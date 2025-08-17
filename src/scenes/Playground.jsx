import React from 'react'
import CanvasWrapper from '../three/CanvasWrapper'
import Sidebar from '../components/Sidebar'
import ObjectPanel from '../components/ObjectPanel'
import PropertiesPanel from '../components/PropertiesPanel'

const Playground = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <CanvasWrapper />
        </div>
      </div>
      <ObjectPanel />
      <PropertiesPanel />
    </div>
  )
}

export default Playground
