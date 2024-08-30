/**
 * The component (here the default App) always returns only one element (or empty fragment)
 * which may contain nested components.
 */

function App() {

  return (
    <div>
      <h1>REACT</h1>
      <ul>
        <li>Components</li>
        <li>Events</li>
        <li>State management</li>
      </ul>
    </div>
  )
}

//Exporting the component so that main.jsx may render it (access outside this file)
export default App
