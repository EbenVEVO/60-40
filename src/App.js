import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Timer from './components/timer/timer';
import Eventlog from './components/eventlog/eventlog';
import Possession from './components/possession/possession';
import Eventtable from './components/eventtable/eventtable';
import Teamstats from './components/teamstats/teamstats';
import Field from './components/field/field';
import { BrowserRouter, Route, Routes} from 'react-router-dom';




function App() {
  const [half, sethalf] = useState(0)
  const [time,setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false);
  const [plays, setPlays] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState(["",""])
  const [selectedEvent, setSelectedEvent] = useState("")
  const [homePoss,setHomePoss] = useState(0)
  const [awayPoss,setAwayPoss] = useState(0)
  const [selectedPlays, setSelectedPlays] = useState([])
  const [homeScore,setHomeScore] = useState(0)
  const [awayScore,setAwayScore] = useState(0)

  function startTime(){
    setIsRunning(true);
  }
  function stopTime(){
    setIsRunning(false);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Timer 
            isRunning={isRunning}
            stopTime = {stopTime}
            startTime = {startTime}
            time = {time}
            setTime={setTime}
            half={half}
            sethalf= {sethalf}
            awayScore = {awayScore}
            setAwayScore={setAwayScore}
            homeScore = {homeScore}
            setHomeScore ={setHomeScore}
            />
       
        <div className='stat-tracker'>
          <div className='statsinput'>
          <Possession 
          isRunning={isRunning}
          setHomePoss = {setHomePoss}
          setAwayPoss = {setAwayPoss}
          />
          <Eventlog
          selectedPlayer = {selectedPlayer}
          setSelectedPlayer = {setSelectedPlayer}
          selectedEvent = {selectedEvent}
          setSelectedEvent = {setSelectedEvent}
          />
          </div>
          <div className='datahub'>
            <Teamstats
              plays = {plays}
              homePoss ={homePoss}
              awayPoss = {awayPoss}
            />
            <Eventtable
              setSelectedPlays = {setSelectedPlays}
              selectedPlays = {selectedPlays}
              plays = {plays}
              />
              <Field
                time = {time}
                half = {half}              
                plays = {plays}
                setPlays = {setPlays} 
                selectedPlays = {selectedPlays}
                selectedPlayer = {selectedPlayer}
                setSelectedPlayer = {setSelectedPlayer}
                selectedEvent = {selectedEvent}
                setSelectedEvent = {setSelectedEvent}               
              />
          </div>
          
        </div>
        <Routes>
          <Route path='/' exact/>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
