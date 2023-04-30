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
      <ResponsiveAppBar links={links}/>
      <div style={{height: '60px'}}></div>
      <h1 style={{height: '500px'}}>Klee's pretty face here</h1>
      {links.map(link => (
        <div key={link} className="section" id={link.replace(" ", "-")}>{link}</div>
      ))}
    </div>
  )
}

export default App
