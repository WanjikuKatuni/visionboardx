import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from "./theme"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthScreen from './pages/AuthScreen'
import { useEffect } from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase'


function App() {


  // whenever the auth state changes
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      console.log(user)
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

