import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Tuitorials from './components/Tuitorials'
import TopFooter from './components/TopFooter'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import { TuggleProvider } from './context/tuggleContext'

function App() {
  const [themMode, setThemMode] = useState('daymode');

  const lightMode = ()=>{
    setThemMode('daymode')
  }
  const darkMode = ()=>{
    setThemMode('nightmode')
  }

  useEffect(()=>{
    document.querySelector('html')?.classList.remove('daymode', 'nightmode');
    document.querySelector('html')?.classList.add(themMode);

  }, [themMode])
  return (
    <TuggleProvider value={{themMode,lightMode,darkMode}}>
    <>
    <Header />
    <Hero />
    <Tuitorials />
    <TopFooter />
    <Disclaimer />
    <Footer />
    </>
    </TuggleProvider>
  )
}

export default App
