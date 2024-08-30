import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

/**
 * Main App creates div that contains two sub components: Header and ScoreList
 */

function App() {
  return (
    <div>
      <Header />
      <ScoreList/>
    </div>
  );
}

/**
 * This component is showing the header part
 */
function Header() {
  return (
    <div>
      <h1>PLAYER SCORES</h1>
      <p>Here are the final points of the game</p>
    </div>
  );
}

/**
 * This component is the score list UI
 */
function ScoreList() {
  return (
    <div>
      <hr />
      <h3>Name:</h3>
      <p>Reima</p>
      <h3>Points:</h3>
      <p>35</p>
      <hr />
      <h3>Name:</h3>
      <p>Liisa</p>
      <h3>Points:</h3>
      <p>42</p>
      <hr />
    </div>
  );
}


export default App
