import {ThemeProvider} from "@mui/material";
import {lightTheme} from "./capitalChimneyTheme";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import './App.css'

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <ResponsiveAppBar />
      </ThemeProvider>
    </div>
  )
}

export default App
