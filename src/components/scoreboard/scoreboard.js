import React from 'react'
import './scoredboard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


export default function Scoreboard({homeScore,setHomeScore, awayScore,setAwayScore}) {




  return (
    <>
    <div className='scoreboard'>
        <div className='boardlabels'>
            <h1>Home</h1>
            <h1>Away</h1>
        </div>
        <div className='score'>
            <h1>{homeScore}</h1>
            <h1>-</h1>
            <h1>{awayScore}</h1>  
        </div>
        <div className='scorebuttons'>
            <div className='Home'>
                <button
                onClick={()=>setHomeScore(homeScore => homeScore +1)}
                ><FontAwesomeIcon icon={ faAngleUp }/></button>
                <button
                    onClick={()=>setHomeScore(homeScore => Math.max(homeScore-1,0))}
                ><FontAwesomeIcon icon={ faAngleDown }/></button>
            </div>
            <div className='Away'>
                <button
                    onClick={()=>setAwayScore(awayScore => awayScore +1)}                                ><FontAwesomeIcon icon={ faAngleUp }/></button>
                <button
                    onClick={()=>setAwayScore(awayScore => Math.max(awayScore-1,0))}
                ><FontAwesomeIcon icon={ faAngleDown }/></button>
            </div>
        </div>
    </div>
    </>
  )
}
