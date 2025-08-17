import React, { useState } from 'react'
import { useScene } from '../context/SceneContext'

const Toolbar = () => {
  const { 
    transformMode, 
    setTransformMode, 
    selectedObject, 
    clearScene,
    scene,
    updateSceneSettings,
    duplicateObject,
    deleteSelectedObject
  } = useScene()

  const [viewMode, setViewMode] = useState('Perspective')

  const tools = [
    { id: 'select', name: 'Select', icon: '🔍', shortcut: 'V' },
    { id: 'move', name: 'Move (Click to Place)', icon: '↔️', shortcut: 'G' },
    { id: 'rotate', name: 'Rotate', icon: '🔄', shortcut: 'R' },
    { id: 'scale', name: 'Scale', icon: '📏', shortcut: 'S' },
    { id: 'align', name: 'Align', icon: '📐', shortcut: 'A' },
  ]

  const actions = [
    { id: 'duplicate', name: 'Duplicate', icon: '📋', shortcut: 'Ctrl+D' },
    { id: 'delete', name: 'Delete', icon: '🗑️', shortcut: 'Del' },
  ]

  const viewControls = [
    { id: 'grid', name: 'Toggle Grid', icon: '⊞', shortcut: 'G' },
  ]

  const handleToolClick = (toolId) => {
    setTransformMode(toolId)
    console.log(`Tool selected: ${toolId}`)
  }

  const handleActionClick = (actionId) => {
    switch (actionId) {
      case 'duplicate':
        if (selectedObject) {
          duplicateObject()
          console.log('Object duplicated')
        }
        break
      case 'delete':
        if (selectedObject) {
          deleteSelectedObject()
          console.log('Object deleted')
        }
        break
      default:
        console.log(`Action: ${actionId}`)
    }
  }

  const handleViewControlClick = (controlId) => {
    switch (controlId) {
      case 'grid':
        updateSceneSettings({ gridVisible: !scene.gridVisible })
        console.log(`Grid ${!scene.gridVisible ? 'enabled' : 'disabled'}`)
        break
      default:
        console.log(`View control: ${controlId}`)
    }
  }

  const handleBooleanOperation = (operation) => {
    if (!selectedObject) {
      alert('Please select an object first')
      return
    }
    console.log(`Boolean operation: ${operation} - TODO: Implement boolean operations`)
    // TODO: Implement actual boolean operations
  }

  const handleNewScene = () => {
    if (window.confirm('Create new scene? This will clear all objects.')) {
      clearScene()
      console.log('Scene cleared')
    }
  }

  const handleViewModeChange = (mode) => {
    setViewMode(mode)
    console.log(`View mode changed to: ${mode}`)
    // TODO: Implement camera mode changes
  }

  return (
    <div className="bg-gray-100 border-b border-gray-300 p-2 flex items-center space-x-1">
      {/* File Operations */}
      <div className="flex space-x-1 mr-4">
        <button 
          onClick={handleNewScene}
          className="px-3 py-1 bg-white border rounded hover:bg-gray-50 text-sm"
          title="New Scene (Ctrl+N)"
        >
          New
        </button>
      </div>

      <div className="border-l h-6 mx-2"></div>

      {/* Transform Tools */}
      <div className="flex space-x-1 mr-4">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => handleToolClick(tool.id)}
            className={`p-2 rounded hover:bg-gray-200 transition-colors ${
              transformMode === tool.id ? 'bg-blue-200 border border-blue-400' : 'bg-white border'
            }`}
            title={`${tool.name} (${tool.shortcut})`}
          >
            <span className="text-lg">{tool.icon}</span>
          </button>
        ))}
      </div>

      <div className="border-l h-6 mx-2"></div>

      {/* Action Tools */}
      <div className="flex space-x-1 mr-4">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={() => handleActionClick(action.id)}
            className={`p-2 bg-white border rounded hover:bg-gray-200 transition-colors ${
              (action.id === 'duplicate' || action.id === 'delete') && !selectedObject 
                ? 'opacity-50 cursor-not-allowed' 
                : ''
            }`}
            title={`${action.name} (${action.shortcut})`}
            disabled={action.id === 'duplicate' || action.id === 'delete' ? !selectedObject : false}
          >
            <span className="text-lg">{action.icon}</span>
          </button>
        ))}
      </div>

      <div className="border-l h-6 mx-2"></div>

      {/* View Controls */}
      <div className="flex space-x-1 mr-4">
        {viewControls.map((control) => (
          <button
            key={control.id}
            onClick={() => handleViewControlClick(control.id)}
            className={`p-2 border rounded hover:bg-gray-200 transition-colors ${
              control.id === 'grid' && scene.gridVisible
                ? 'bg-green-200 border-green-400' 
                : 'bg-white'
            }`}
            title={`${control.name} (${control.shortcut})`}
          >
            <span className="text-lg">{control.icon}</span>
          </button>
        ))}
      </div>

      <div className="border-l h-6 mx-2"></div>

      {/* Boolean Operations */}
      <div className="flex space-x-1 mr-4">
        <button
          onClick={() => handleBooleanOperation('union')}
          className={`px-3 py-1 border rounded hover:bg-gray-50 text-sm ${
            !selectedObject ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white'
          }`}
          title="Union - Combine shapes"
          disabled={!selectedObject}
        >
          ∪ Union
        </button>
        <button
          onClick={() => handleBooleanOperation('subtract')}
          className={`px-3 py-1 border rounded hover:bg-gray-50 text-sm ${
            !selectedObject ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white'
          }`}
          title="Subtract - Cut shapes"
          disabled={!selectedObject}
        >
          − Subtract
        </button>
        <button
          onClick={() => handleBooleanOperation('intersect')}
          className={`px-3 py-1 border rounded hover:bg-gray-50 text-sm ${
            !selectedObject ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white'
          }`}
          title="Intersect - Keep overlap"
          disabled={!selectedObject}
        >
          ∩ Intersect
        </button>
      </div>

      {/* Right side - View Mode */}
      <div className="ml-auto flex space-x-2">
        <select 
          value={viewMode}
          onChange={(e) => handleViewModeChange(e.target.value)}
          className="px-2 py-1 bg-white border rounded text-sm"
        >
          <option value="Perspective">Perspective</option>
          <option value="Front">Front</option>
          <option value="Side">Side</option>
          <option value="Top">Top</option>
        </select>
      </div>
    </div>
  )
}

export default Toolbar
