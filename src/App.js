import logo from './logo.svg';
import './App.css';

function App() {

  const openApp = url => {
      window.location.href = url
  }

  return (
    <div className="App">
      <div className="home-logo">
        <img src="./logo.png"></img>
        <a href='' />
      </div>
      <h1>Applications CFPVD</h1>
      <div className='btn-container'>
        <button className='btn' onClick={() => openApp('https://main.d2chkat9k8gdjb.amplifyapp.com/')}>Boussole</button>
        <button className='btn' onClick={() => openApp('https://main.d3h0me83mnk2rv.amplifyapp.com/')}>Entretien</button>
        <button className='btn' onClick={() => openApp('https://main.dpuszw4zf9ttg.amplifyapp.com/')}>Formation Mine</button>
      </div>
    </div>
  );
}

export default App;
