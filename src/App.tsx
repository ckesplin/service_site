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
      <h1 style={{height: '500px'}}>Klee's pretty face here</h1>
      <div className="section" id={links[0].replace(" ", "-")}>{links[0]}</div>
      <div className="section" id={links[1].replace(" ", "-")}>{links[1]}</div>
      <div className="section" id={links[2].replace(" ", "-")}>{links[2]}</div>
      <div className="section" id={links[3].replace(" ", "-")}>{links[3]}</div>
    </div>
  )
}

export default App
