import logo from './logo.svg';
import './App.css';

function App() {

  const openApp = url => {
      window.location.href = url
  }

  return (
    <div className="App">
      <div className="home-logo">
        <img src="./images.jpg"></img>
      </div>
      <div className="logo">
        <img src="./logo.png" />
      </div>
      <h1>Applications</h1>
      <div className='btn-container'>
        <button className='btn' onClick={() => openApp('https://main.d2chkat9k8gdjb.amplifyapp.com/')}><img src="https://cfpvd-bucket.s3.ca-central-1.amazonaws.com/boussole/Image15.png"/><p>Boussole</p></button>
        <button className='btn' onClick={() => openApp('https://main.d3h0me83mnk2rv.amplifyapp.com/')}><img src="./images2.jpg"/><p>Entretien</p></button>
        <button className='btn' onClick={() => openApp('https://main.dpuszw4zf9ttg.amplifyapp.com/')}><img src="./images3.jpg"/><p>Formation Mine</p></button>
      </div>
    </div>
  );
}

export default App;
