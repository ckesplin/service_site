import ResponsiveAppBar from "./components/ResponsiveNavbar";
import "./App.css"

export const pageLinks = [
  'who we are',
  'what we provide',
  'who we serve',
  'contact',
];

function App() {

  return (
    <div className='App'>
      <ResponsiveAppBar links={pageLinks}/>
      <div style={{height: '60px'}}></div>
      <h1 style={{height: '500px'}}>Klee's pretty face here</h1>
      {pageLinks.map(link => (
        <div key={link} className="section" id={link.replace(" ", "-")}>{link}</div>
      ))}
    </div>
  )
}

export default App
