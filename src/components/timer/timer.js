import React, { useEffect, useRef, useState } from 'react'
import './timer.css'
import Scoreboard from '../scoreboard/scoreboard'

    
export default function Timer({isRunning, startTime, stopTime, time, setTime, half, sethalf, homeScore,setHomeScore, awayScore,setAwayScore}){
    let timeHandler = useRef()
    useEffect(()=>{
        if(isRunning){
            timeInc()
        }  
        else{
            clearInterval(timeHandler.current)
        }

    
    return () => clearInterval(timeHandler.current)
    })

    function timeInc(){
        timeHandler.current = setInterval(()=>{
            setTime(prevTime => prevTime +1)
        }, 1000)
    }

    function formatTime(){
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        
        if(minutes === '45'){
            return `45:00 + ${minutes -45}:${seconds}`
        }
        return `${minutes}:${seconds}`
    }

    function endTime(){
        if(half===1){
            sethalf(2)
            stopTime()
            setTime(0)
        }
        if(half === 2){
            sethalf(0)
            stopTime()
            setTime(0)
        }

    }

    function startHalf(){
        startTime()
        sethalf(1)
    }

    let firsthalfCheck = half === 1 ? 'active': ''
    let secondhalfCheck = half === 2 ? 'active':''


  return (
    <>
    <div className='timer'>
        <div className='halves'>
            <h2 className={`half1${firsthalfCheck}`}>1</h2>
            <h2 className={`half2${secondhalfCheck}`}>2</h2>
        </div>
        <div className='timercontainer'>
            <h1> {formatTime()}</h1>
            <button 
            onClick={startHalf}
            className='start-btn'
            disabled = {isRunning}
            > {half !== 0 ? "Start":"Start Half"}  </button>
            <button className='pause-btn'
            onClick={stopTime}> Pause </button>
            <button className='end-btn' onClick={endTime}
            >{half === 1 ? 'End Half' : (half === 2 ? 'End Match' : '')}</button>
        </div>
        <div className='scoreboard'>
        <Scoreboard
                awayScore = {awayScore}
                setAwayScore={setAwayScore}
                homeScore = {homeScore}
                setHomeScore ={setHomeScore}
        />
        </div>
    </div>
    </>
  )
}




