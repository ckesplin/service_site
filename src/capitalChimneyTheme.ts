import {createTheme} from "@mui/material";


export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#006688',
    },
    secondary: {
      main: '#4e616d',
    },
    error: {
      main: '#ba1a1a',
    },
    background: {
      default: '#fbfcfe',
    },
    text: {
      primary: "#fff",
      secondary: "#333",
    }
  },
})

// export const darkTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#75d1ff',
//     },
//     secondary: {
//       main: '#b5c9d7',
//     },
//     error: {
//       main: '#ffb4ab',
//     },
//     background: {
//       default: '#191c1e',
//     },
//     text: {
//       primary: '#333',
//     },
//   },
// })
