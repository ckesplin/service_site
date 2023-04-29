import ResponsiveAppBar from "./components/ResponsiveAppBar";
import "./App.css"

export const links = [
  'who we are',
  'what we provide',
  'who we serve',
  'contact',
];

function App() {

  return (
    <div className='App'>
      <ResponsiveAppBar />
      <div style={{height: '60px'}}></div>
      {links.map(link => (
        <div className="section" id={link.replace(" ", "-")}>{link}</div>
      ))}
    </div>
  )
}

export default App
