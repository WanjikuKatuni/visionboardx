import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from "./theme"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthScreen from './pages/AuthScreen'
import { useEffect } from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase'
import useStore from './store'


function App() {

  // useStore Hook
  const {loader, setLoginStatus} = useStore()

  console.log(loader)
  // whenever the auth state changes
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      setLoginStatus(!!user)
    })

    return () => unsub()
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>

      <BrowserRouter>
       <Routes>
        <Route path="/" element={<AuthScreen/>} />
       </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

