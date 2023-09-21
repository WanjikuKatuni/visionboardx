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
    components: {
        MuiSnackbar: {
            defaultProps: {
                anchorOrigin:{
                    horizontal: 'center',
                    vertical: 'top'
                  },
            },
        },
        MuiSnackbarContent: {
            styleOverrides: {
                message: {
                    fontWeight: 600,
                    textTransform: 'capitalize'
                },
            },
        },
    },
    typography: {
        fontFamily: 'Lato, sans-serif',
        button: {
            textTransform: 'unset',
            fontWeight: 700,
        },
        h5:{
            fontWeight: 600,
        },
        h6:{
            fontWeight: 700,
        }
    },
    shape: {
        borderRadius: 0
    }
})

export default theme;