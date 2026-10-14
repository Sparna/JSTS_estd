import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HeaderBase } from './components/HeaderBase.tsx'
import { RouterProvider } from 'react-router'
import { router } from './pages/Router.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderBase />
    <RouterProvider router={router} />
  </StrictMode>,
)
