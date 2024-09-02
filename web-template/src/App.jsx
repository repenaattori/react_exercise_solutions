import './styles/App.css';

function App() {

  return (
    <div>
      <Header />
      <Content />
      <Footer name={'Reima Riihimäki'}/>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Welcome to my homepage</h1>
    </header>
  );
}

function Content() {
  return (
    <div className='content'>
      <Card imageUrl={'https://picsum.photos/id/0/300/200'} title={'Computer'} text={'Computer science'} />
      <Card imageUrl={'https://picsum.photos/id/34/300/200'} title={'ölkölk'} text={'ökökl'} />
      <Card imageUrl={'https://picsum.photos/id/23/300/200'} title={'nmnmmnmn'} text={'nknlnlknkl'} />
    </div>
  );
}


function Footer({name}) {
  return (
    <footer>
      <span>copyright: {name}</span>
    </footer>
  );
}

function Card({imageUrl, title, text}) {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default App
