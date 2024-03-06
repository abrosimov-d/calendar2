import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar'
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import Settings from './components/Settings';
import Vacation from './components/Vacation';

function App() {

  let [smena, setSmena] = useState(Settings(null).smena);
  let [odd, setOdd] = useState(Settings(null).odd);
  let [currentWeek, setCurrentWeek] = useState(Settings(null).currentWeek)
  let [vacationString, setVacationsString] = useState(Settings(null).vacationString);
  let [vacations, setVacations] = useState([]);
  //'01.06.2024:14;01.11.2024:14'
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

  function onCurrentWeekChange(e) {
    setCurrentWeek(e.target.checked)
    let settings = Settings(null);
    settings.currentWeek = e.target.checked?1:0;
    Settings(settings);
  }

  function onVacationChange(e) {
    console.log(e.target.value);
    setVacationsString(e.target.value);
  }

  function onVacationOkClick() {
    setVacations(parseVacationsString(vacationString));
    let settings = Settings(null);
    settings.vacationString = vacationString;
    Settings(settings);
  }

  function parseVacationsString(vacationString) {
    let result = [];
    if (!vacationString) {
      return result;
    }
    let parts = vacationString.split(';');
    for (let i = 0; i < parts.length; i++) {
      let part = {
        'startDate': parts[i].split(':')[0],
        'len': parseInt(parts[i].split(':')[1], 10),
      }
      result.push(part);
    }
    console.log(result)
    return result;
  }

  useEffect(() => {

  }, []);     


  return (
    <div className="App">
      <img src='./logo512.png' className='logo'></img>
      <Calendar 
        smena={smena} 
        odd={odd}
        currentWeek={currentWeek} 
        onSmenaChange={onSmenaChange} 
        onOddChange={onOddChange}
        onCurrentWeekChange={onCurrentWeekChange}
        vacations = {parseVacationsString(vacationString)}
        />
      <Vacation
        vacations={vacationString}
        onVacationChange={onVacationChange}
        onVacationOkClick={onVacationOkClick}
      />
      <Footer/>
    </div>
  );
}

export default App;
