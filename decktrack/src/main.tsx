import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home/Home.tsx'
import Routing from './Routing.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
  <BrowserRouter>
  <Routing />
  </BrowserRouter>
</StrictMode>,
)
