import React from 'react'

export default function About() {
  return (
    <div style={ aboutStyle }>
        <h1>About</h1>
        <p>This website was made using React, React Router DOM, Axios, and JSX for MicTV.</p>
    </div>
  )
}

const aboutStyle = {
    padding: '50px'
}