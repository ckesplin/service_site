import {AppBar, Box, GlobalStyles, IconButton, Theme, ThemeProvider, Typography} from "@mui/material";
import {darkTheme, lightTheme} from "./capitalChimneyTheme";
import {useState} from "react";
import {Brightness4} from "@mui/icons-material";

function App() {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={{body: {background: theme.palette.background.default}}}/>
        <AppBar>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography>Capital Chimney</Typography>
            <IconButton
              onClick={() =>
                theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)
              }
              sx={{color: theme.palette.text.primary}}
            >
              <Brightness4 />
            </IconButton>
          </Box>
        </AppBar>
      </ThemeProvider>
    </div>
  )
}

export default App
