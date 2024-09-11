import { useState } from "react"


function App() {
  //States for input message and sent(button pressed)
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  //Selecting the button text bases on the sent state
  const buttonText = sent ? 'Message sent' : 'Send';

  //Button press changes the sent state to true and also empties the message from input
  function buttonPressed() {
    setSent(true);
    setMsg('');
  }

  return (
    <div>
      <input
        disabled={sent}
        value={msg}
        onChange={e => setMsg(e.target.value)}
      />
      <button
        disabled={sent}
        onClick={buttonPressed}
      >{buttonText}</button>
      
      <h3>{msg}</h3>
    </div>
  )
}

export default App
