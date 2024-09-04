import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './pages/Home'
import Topbar from './pages/Topbar/Topbar'
import Loginform from './pages/Loginform/Loginform'
import Logofull from './pages/Logofull/Logofull'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Topbar />
    <Logofull />
    <Loginform />
    <Home />
  </StrictMode>,
)
