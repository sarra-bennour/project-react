import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import Events from './ComposantsEvent/Events.jsx'
import Products from './ComposantsEvent/Products.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    {/* <Events /> */}
    {/* <Products /> */}
    </BrowserRouter>
  </StrictMode>,
)
