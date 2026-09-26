import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TermsPage from './TermsPage.jsx'
import { LenisProvider } from './components/LenisProvider.jsx'
import { LoadingScreen } from './components/LoadingScreen.jsx'
import { useAppStore } from './store/useAppStore.js'

function isTermsPath() {
  const path = window.location.pathname.replace(/\/+$/, '')
  return path.endsWith('/terms') || path.endsWith('/terms.html')
}

function Boot() {
  const setReady = useAppStore((s) => s.setReady)
  const terms = isTermsPath()

  useEffect(() => {
    const t = setTimeout(setReady, terms ? 200 : 900)
    return () => clearTimeout(t)
  }, [setReady, terms])

  return (
    <>
      {!terms && <LoadingScreen />}
      {terms ? <TermsPage /> : <App />}
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LenisProvider>
      <Boot />
    </LenisProvider>
  </StrictMode>,
)
