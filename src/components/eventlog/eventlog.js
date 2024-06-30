import React, { useState } from 'react'
import './eventlog.css'

export default function Eventlog({ selectedPlayer, setSelectedPlayer, selectedEvent, setSelectedEvent} ) {

    const events = ["Shot On Goal", "Shot", "Dribble", "Foul", "Goal", "Own Goal", "Assist", "Tackle", "Yellow Card", "Red Card", "Offside", "Save"]
    const initialHomeButtons = Array.from({ length: 15 }, (_, i) => `H${i + 1}`);
    const initialAwayButtons = Array.from({ length: 15 }, (_, i) => `A${i + 1}`);

    const [homePlayers, setHomePlayers] = useState(initialHomeButtons)
    const [awayPlayers, setAwayPlayers] = useState(initialAwayButtons)

    const changeHomePlayerName= (index, event) =>{
        const playerName = event.target.value
        const newHomePlayers = [...homePlayers]

        newHomePlayers[index] = playerName
        setHomePlayers(newHomePlayers)
    }
    const changeAwayPlayerName= (index, event) =>{
        const playerName = event.target.value
        const newAwayPlayers = [...awayPlayers]

        newAwayPlayers[index] = playerName
        setAwayPlayers(newAwayPlayers)
    }

    let isPlayerSelected = (player, index)=>{
      return player === selectedPlayer[0] ? 'selectedplayer':`H${index+1}`
    } 

    let isEventSelected = (event)=>{
        return event === selectedEvent ? 'selectedevent' : ''
    }




  return (
    <>
    <div className='eventlog'>
        <div className='player-buttons'>
            
            <div className='home-players'>
                { homePlayers.map((player,index)=>(
                        <button className={isPlayerSelected(player, index)}
                        onClick={()=>{setSelectedPlayer([player, 'Home'])}}
                        > 
                            <input
                            type='text'
                            value={player}
                            onChange={(event) => changeHomePlayerName(index,event)}
                            />
                        </button>
                    ))
                }
                <div className='addbutton'>
                    <button
                    onClick={()=>{setHomePlayers([...homePlayers, `H${homePlayers.length + 1}`])}}
                    >ADD</button>
                </div>
            </div>
            <div className='away-players'>
                { awayPlayers.map((player,index)=>(
                        <button className={isPlayerSelected(player, index)}
                        onClick={()=>{setSelectedPlayer([player, 'Away'])}}
                        > 
                            <input
                            type='text'
                            value={player}
                            onChange={(event) => changeAwayPlayerName(index,event)}                            
                            />
                        </button>
                    ))
                }
                <div className='addbutton'>
                    <button
                    onClick={()=>{setAwayPlayers([...awayPlayers, `A${awayPlayers.length + 1}`])}}
                    >ADD</button>
                </div>
            </div>
        </div>
        <div className='eventscontainer'>
            <div className='events'>
                {
                    events.map((event)=>(
                        <button className={isEventSelected(event)}
                        onClick={()=>{        
                            if(selectedPlayer[0]){
                                setSelectedEvent(event)
                            }
                            else{
                                alert("Please Select a Player")
                            }
                        }}><span>{event}</span>
                        </button>
                    ))
                }
            </div>


        </div>


    </div>       
    </>
  )
}
