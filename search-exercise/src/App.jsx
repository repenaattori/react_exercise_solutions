import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const products = ['LG TV', ' iPhone', 'Tunturi bike', 'Ryzen processor', 'Terminator Bluray'];

function App() {
  const [keyword, setKeyword] = useState('');

  const filtederProducts = products.filter( p => p.toLowerCase().includes(keyword.toLowerCase()) );


  return (
      <div>
        <input value={keyword} onChange={e => setKeyword(e.target.value)} />
        <ul>
          {filtederProducts.map( p => <li key={p}>{p}</li> )}
        </ul>
      </div>
  )
}

export default App
