import React from 'react'
import {Grid, Stack, Typography} from "@mui/material"


export default function Boardtab() {
  return (
    
         <Grid item xs={12} sm={6} md={4} >
                <Stack p={3} bgcolor='#000'>
                    <Stack direction="row" alignItems="center">
                            <Typography fontWeight={700} variant="h6">
                                ToDos
                            </Typography>
                        </Stack>
                </Stack>
        </Grid>
    
  )
}
