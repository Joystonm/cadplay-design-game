import React, { useState } from 'react'
import { useScene } from '../context/SceneContext'

const ObjectPanel = () => {
  const [activeCategory, setActiveCategory] = useState('primitives')

  // Safely access the scene context
  let addObject
  try {
    const sceneContext = useScene()
    addObject = sceneContext?.addObject || (() => {
      console.warn('addObject function not available')
    })
  } catch (error) {
    console.error('Scene context error in ObjectPanel:', error)
    addObject = () => {
      console.warn('Scene context not available, cannot add object')
    }
  }

  const shapeCategories = {
    primitives: {
      name: 'Basic Shapes',
      shapes: [
        { id: 'cube', name: 'Cube', icon: '⬜', description: 'Basic cube shape' },
        { id: 'sphere', name: 'Sphere', icon: '⚪', description: 'Perfect sphere' },
        { id: 'cylinder', name: 'Cylinder', icon: '🥫', description: 'Cylindrical shape' },
        { id: 'cone', name: 'Cone', icon: '🔺', description: 'Conical shape' },
        { id: 'torus', name: 'Torus', icon: '🍩', description: 'Donut shape' },
        { id: 'plane', name: 'Plane', icon: '▭', description: 'Flat surface' },
      ]
    },
    assistive: {
      name: 'Assistive Shapes',
      shapes: [
        { id: 'grip-handle', name: 'Grip Handle', icon: '🤏', description: 'Ergonomic handle shape' },
        { id: 'button-large', name: 'Large Button', icon: '🔘', description: 'Accessible button' },
        { id: 'ramp', name: 'Ramp', icon: '📐', description: 'Accessibility ramp' },
        { id: 'lever', name: 'Lever', icon: '🎚️', description: 'Easy-use lever' },
      ]
    },
    text: {
      name: 'Text & Symbols',
      shapes: [
        { id: 'text-3d', name: '3D Text', icon: 'T', description: 'Extruded text' },
        { id: 'braille-dot', name: 'Braille Dot', icon: '⠁', description: 'Braille dot pattern' },
        { id: 'symbol', name: 'Symbol', icon: '♿', description: 'Accessibility symbols' },
      ]
    }
  }

  const getRandomColor = () => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  const handleShapeAdd = (shapeType) => {
    console.log('Adding shape:', shapeType)
    
    try {
      const newObject = {
        id: Date.now(),
        type: shapeType,
        position: [Math.random() * 4 - 2, Math.random() * 2, Math.random() * 4 - 2], // Random position
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
        material: {
          color: getRandomColor(),
          metalness: 0.1,
          roughness: 0.7
        }
      }
      
      addObject(newObject)
    } catch (error) {
      console.error('Error adding shape:', error)
    }
  }

  return (
    <div className="w-64 bg-white border-l border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-800">Shape Library</h2>
        <p className="text-sm text-gray-600">Click shapes to add them</p>
      </div>

      {/* Category Tabs */}
      <div className="flex border-b border-gray-200">
        {Object.entries(shapeCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`flex-1 px-3 py-2 text-xs font-medium border-b-2 transition-colors ${
              activeCategory === key
                ? 'border-blue-500 text-blue-600 bg-blue-50'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Shape Grid */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="grid grid-cols-2 gap-3">
          {shapeCategories[activeCategory].shapes.map((shape) => (
            <button
              key={shape.id}
              onClick={() => handleShapeAdd(shape.id)}
              className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
              title={shape.description}
            >
              <div className="text-2xl mb-1">{shape.icon}</div>
              <div className="text-xs font-medium text-gray-700 group-hover:text-blue-700">
                {shape.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="space-y-2">
          <button 
            onClick={() => handleShapeAdd('cube')}
            className="w-full px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm font-medium"
          >
            Quick Add Cube
          </button>
          <button 
            onClick={() => handleShapeAdd('sphere')}
            className="w-full px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm font-medium"
          >
            Quick Add Sphere
          </button>
        </div>
      </div>

      {/* Tips Section */}
      <div className="p-4 bg-yellow-50 border-t border-yellow-200">
        <h3 className="text-sm font-semibold text-yellow-800 mb-1">💡 Tip</h3>
        <p className="text-xs text-yellow-700">
          {activeCategory === 'assistive' 
            ? 'Assistive shapes are pre-designed for accessibility. Modify them to fit specific needs.'
            : activeCategory === 'text'
            ? 'Use 3D text and Braille for accessible labeling and signage.'
            : 'Start with basic shapes and combine them using Boolean operations.'
          }
        </p>
      </div>
    </div>
  )
}

export default ObjectPanel
