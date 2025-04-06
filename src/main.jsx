import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/style.css"
import App from './App.jsx'
import NoteProvider from './contexts/Notes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NoteProvider>
      <App />
    </NoteProvider>
  </StrictMode>,
)
