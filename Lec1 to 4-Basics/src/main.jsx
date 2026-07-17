import React, { StrictMode } from 'react' // <-- Added 'React' here
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Lecture 4 code:
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click this to open google'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  // reactElement
)
