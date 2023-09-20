// set up project theme

import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#1d1f26"
        },
        primary:{
            main: '#A36A00'
        }
    },
    typography: {
        fontFamily: 'Lato, sans-serif',
        button: {
            textTransform: 'unset'
            fontWeight: '700'
        }
    },
    shape: {
        borderRadius: 0
    }
})

export default theme;