import {AppBar, GlobalStyles, Theme, ThemeProvider} from "@mui/material";
import {capitalChimneyDarkTheme, capitalChimneyLightTheme} from "./capitalChimneyTheme";
import {useState} from "react";

function App() {
  const [theme, setTheme] = useState<Theme>(capitalChimneyLightTheme)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={{body: {background: theme.palette.background.default}}} />
          <AppBar>Hello</AppBar>
      </ThemeProvider>
    </div>
  )
}

export default App
