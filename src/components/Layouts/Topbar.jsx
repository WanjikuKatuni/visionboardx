import React from 'react'
import {AppBar, Toolbar, Button, Stack } from "@mui/material"
import ImageEl from '../utils/ImageEl'
import logo from "../../assets/vb.jpg"
import LogoutIcon from '@mui/icons-material/Logout';

export const Topbar = () => {
  return (
    <AppBar position="static">
        <Toolbar sx={{
            justifyContent: "space-between"
        }}>
            {/* left */}
            <ImageEl sx={{height: "45px"}} src={logo} alt="vision-board-logo" />

            {/* right */}
            <Stack direction="row" spacing={2}>
                <Button startIcon={<LogoutIcon />} variant="contained">Logout</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}
