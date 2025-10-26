import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RootGlobalStyle, {  } from './index.ts'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootGlobalStyle />
    <App />
  </StrictMode>,
)
