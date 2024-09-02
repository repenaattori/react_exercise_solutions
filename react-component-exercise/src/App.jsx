import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  return (
    <div>
      <Header />
      <ScoreList/>
    </div>
  );
}

/**
 * This component is the Header UI
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
      <PlayerScore name={'Reima'} score={35}/>
      <PlayerScore name={'Liisa'} score={42}/>
      <PlayerScore/>
    </div>
  );
}

/**
 * This component shows one player's points
 */
function PlayerScore({name='John Doe', score=0}){
  return(
    <div>
      <h3>Name:</h3>
      <p>{name}</p>
      <h3>Points:</h3>
      <p>{score}</p>
      <hr/>
    </div>
  );
}


export default App
