import React from 'react'
import { Topbar } from '../components/Layouts/Topbar'
import {Grid} from "@mui/material"
import Boardtab from '../components/Layouts/Boardtab'


export default function VisionsScreen() {

    const topics = [
        "ToDos",
        "InProgress",
        "Completed",
    ]


  return (
    <>
    <Topbar/>
    <Grid container px={4} mt={5} spacing={2}>

        {/* {topics.map((topic, index)=>(
            <Grid item xs={12} sm={6} md={4} key={topic}>
                <Stack p={3} bgcolor='#000'>
                    <Stack direction="row" alignItems="center">
                            <Typography fontWeight={700} variant="h6">
                                {topic}
                            </Typography>
                        </Stack>
                </Stack>
            </Grid>
        ))} */}

        <Boardtab />

       
        
    </Grid>

    </>
  )
}
