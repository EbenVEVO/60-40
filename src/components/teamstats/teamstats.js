import React, { useEffect, useState } from 'react'
import Matchtable from '../ui/matchtable';
import './teamstats.css'
import { create } from '@mui/material/styles/createTransitions';

export default function Teamstats({plays, awayPoss, homePoss}) {

    const [matchFacts, setMatchFacts] = useState([{}]);

    function calcStat(event){
        if(!plays){
            return [0,0]
        }
        const filteredPlays = plays.filter(play => play.event === event)
        var homeVal = 0
        var awayVal = 0
        filteredPlays.forEach(play => {
            if(play.team === "Home"){
                homeVal++
            }
            else{
                awayVal++
            }
        });
        return [homeVal, awayVal]
    }
    function createMatchFacts(){
        var fouls = calcStat('Foul')
        var shots = calcStat('Shot')
        var shotsongoal = calcStat('Shot On Goal')
        var tackles = calcStat('Tackle')
        var offsides = calcStat('Offside')
        var redcards = calcStat('Red Card')
        var yellowcards = calcStat('Yellow Card')



        setMatchFacts([
            {
                stat: "Shots",
                home: `${shots[0]+shotsongoal[0]}(${shotsongoal[0]})`,
                away: `${shots[1]+shotsongoal[1]}(${shotsongoal[1]})`
                
            },
            {
                stat:"Ball Possesion",
                home: `${homePoss}%`,
                away: `${awayPoss}%`
            },
            {                
                stat: "Fouls",
                home: fouls[0],
                away: fouls[1]},
            {
                stat: "Tackles",
                home: tackles[0],
                away: tackles[1]
            },
            {
                stat: "Offsides",
                home: offsides[0],
                away: offsides[1]
            },
            {
                stat:"Yellow Cards",
                home: yellowcards[0],
                away: yellowcards[1]
            },
            {
                stat:"Red Cards",
                home: redcards[0],
                away: redcards[1]
            }
    ])        
    }
    useEffect(()=>{
        createMatchFacts()
    },[plays, homePoss])

  return (
    <>
    <div>
        <h1>Match Facts</h1>
        <Matchtable
            matchFacts={matchFacts}
            
        />

    </div>
    
    </>
  )
}
