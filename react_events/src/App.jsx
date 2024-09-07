

function App() {

  return (
    <div>
      <h1
        onMouseEnter={() => console.log('header')}
        onClick={() => window.alert('You clicked the header')}
      >Welcome!!!</h1>
    </div>
  );
}

export default App
