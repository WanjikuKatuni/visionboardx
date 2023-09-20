import React from 'react'
import {Container, Stack, OutlinedInput, Button, Typography} from '@mui/material'
import logo from '../assets/vb.jpg'

function AuthScreen() {
  return (
    <Container>
        {/* logo */}
        <img src={logo} alt='visionboard-logo' />
    </Container>
  )
}

export default AuthScreen