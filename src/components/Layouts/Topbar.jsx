import React from 'react'
import {AppBar, Toolbar, Button, Stack } from "@mui/material"
import ImageEl from '../utils/ImageEl'
import logo from "../../assets/vb.jpg"

export const Topbar = () => {
  return (
    <AppBar>
        <Toolbar sx={{
            justifyContent: "space-between"
        }}>
            {/* left */}
            <ImageEl sx={{height: "45px"}} src={logo} alt="vision-board-logo" />

            {/* right */}
            <Stack direction="row" spacing={2}>
                <Button variant="contained">Logout</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}
