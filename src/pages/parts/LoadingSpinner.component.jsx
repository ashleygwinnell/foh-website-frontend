import * as React from 'react'
import './LoadingSpinner.css'

const LoadingSpinner = () => (
  <div
    style={{
      display: 'block',
      zIndex: 1031,
      paddingLeft:18,
      paddingTop:18,
      width:18*3,
      height:18*3
    }}
  >
    <div
      style={{
        animation: '400ms linear infinite spinner',
        borderRadius: '50%',
        borderBottom: '3px solid transparent',
        borderLeft: '3px solid #00e174',
        borderRight: '3px solid transparent',
        borderTop: '3px solid #00e174',
        boxSizing: 'border-box',
        height: 18*2,
        width: 18*2
      }}
    />
  </div>
)

export default LoadingSpinner
