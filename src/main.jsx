import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import AuthProvider from './AuthProvider/AuthProvider'
import BackToTop from './components/shared/BackToTop/BackToTop';
import { HelmetProvider } from 'react-helmet-async'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
     <AuthProvider>
        <RouterProvider router={router} />
        <BackToTop></BackToTop>
     </AuthProvider>
   </HelmetProvider>
  </StrictMode>,
)
