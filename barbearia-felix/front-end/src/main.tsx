import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Header } from './components/Header.tsx'
import { HeaderBase } from './components/HeaderBase.tsx'
import Login from './Login.tsx'
import Cadastro from './Cadastro.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderBase />
    <Login />
    {/*<App />*/}
  </StrictMode>,
)
