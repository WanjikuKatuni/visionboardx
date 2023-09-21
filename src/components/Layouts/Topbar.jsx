import React from 'react'
import {AppBar, Toolbar, Button, Stack } from "@mui/material"
import ImageEl from '../utils/ImageEl'
import logo from "../../assets/vb.jpg"
import LogoutIcon from '@mui/icons-material/Logout';
import {signOut} from 'firebase/auth'
import {auth} from '../../firebase'

export const Topbar = () => {
  return (
    <AppBar sx={{
      borderBottom: "5px solid",
      borderColor: "gray"
    }} position="static">
        <Toolbar sx={{
            justifyContent: "space-between"
        }}>
            {/* left */}
            <ImageEl sx={{height: "45px"}} src={logo} alt="vision-board-logo" />

            {/* right */}
            <Stack direction="row" spacing={2}>
                <Button onClick={() => signOut(auth)} startIcon={<LogoutIcon />} variant="contained">Logout</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}
