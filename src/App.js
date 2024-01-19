import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar'
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import Settings from './components/Settings';

function App() {

  let [smena, setSmena] = useState(0);
  let [odd, setOdd] = useState(0);

  function onSmenaChange(e) {
    setSmena(e.target.selectedIndex);
    let settings = Settings(null);
    settings.smena = e.target.selectedIndex;
    Settings(settings);
  }

  function onOddChange(e) {
    setOdd(e.target.selectedIndex);
    let settings = Settings(null);
    settings.odd = e.target.selectedIndex;
    Settings(settings);
  }

  useEffect(() => {
    //setSmena(Settings(null).smena);
    //setOdd(Settings(null).odd);
  }, []);     


  return (
    <div className="App">
      <img src='./logo512.png' className='logo'></img>
      <Calendar smena={smena} odd={odd} onSmenaChange={onSmenaChange} onOddChange={onOddChange}/>
      <Footer/>
    </div>
  );
}

export default App;
