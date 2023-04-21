import {Box, Card, ThemeProvider, Typography} from "@mui/material";
import {lightTheme} from "./theme";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import '/css/App.css'

function App() {

  return (
    <Box className='App'>
      <ThemeProvider theme={lightTheme}>
        <ResponsiveAppBar />
        <Box display='flex' flexDirection='column' alignItems='center' width='100%' height="40vh">
          <Typography variant="h1">THE HERO SECTION</Typography>
          <Typography>Contact Info</Typography>
        </Box>
        <Box display='flex' alignItems='center' flexDirection='column'>
          <Card sx={{width: "80vw", marginBottom: "36px"}}>
            Contact Card
          </Card>
          <Card sx={{width: "80vw", marginBottom: "36px"}}>
            Services Card
          </Card>
          <Card sx={{width: "80vw", marginBottom: "36px"}}>
            FAQ Card
          </Card>
          <Card sx={{width: "80vw", marginBottom: "36px"}}>
            Contact Card
          </Card>
        </Box> 
      </ThemeProvider>
    </Box>
  )
}

export default App
