import React, { useEffect, useRef, useState } from 'react'
import './possession.css'


export default function Possession({isRunning, setAwayPoss, setHomePoss} ) {
    const [homeTime,setHomeTime] = useState(0)
    const [awayTime,setAwayTime] = useState(0)
    const [possession, setpossession] = useState('')


    let timeHandler = useRef()
    useEffect(()=>{
        if(isRunning){
            if(possession === 'Home'){
                timeInc(setHomeTime)
            }
            if (possession === 'Away'){
                timeInc(setAwayTime)
            }    
        }  
        else{
            clearInterval(timeHandler.current)
        }

    
    return () => clearInterval(timeHandler.current)
    })

    function timeInc(setTime){
        timeHandler.current = setInterval(()=>{
            setTime(prevTime => prevTime +1)
        }, 1000)
    }

    function startHome(){
        setpossession('Home')
        if(isRunning){
            
            while(possession === 'Home'){
                timeInc(setHomeTime)
        }}
    }
    function startAway(){
        setpossession('Away')
        if (isRunning)
        {
            while(possession === 'Away'){
                timeInc(setAwayTime)
        }}
    }

    function formatTime(time){
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        
        if(minutes === '45'){
            return `45:00 + ${minutes -45}:${seconds}`
        }
        return `${minutes}:${seconds}`
    }

    function possCalc(){
        let totaltime = homeTime + awayTime
        let possPercentage = Math.floor((homeTime/totaltime)*100)
    
        if(isNaN(possPercentage)){
            setAwayPoss(50)
            setHomePoss(50)
            return 50;
        }
        else{
            setHomePoss(possPercentage)
            setAwayPoss(100 - possPercentage)
            return possPercentage
        }
    }

    let homeCheck = possession === 'Home' ? 'active':''
    let awayCheck = possession === 'Away' ? 'active':''
    let pauseCheck = possession === '' ? 'active': ''


  return (
    <>
    <div>
    <div className='teamtimers'>
        <div className='labels'>
            <h1 className={`Home${homeCheck}`}>Home</h1>
            <h1 className={`Away${awayCheck}`}> Away</h1>
        </div>
        <div className='timers'>
            <h1 >{formatTime(homeTime)}</h1>
            <h1 >{formatTime(awayTime)}</h1>
        </div>
    </div>
    <div className='teambuttons'>
        <button className={`Home${homeCheck}`}
        onClick={startHome}>Home</button>
        <button className={`Pause${pauseCheck} `}
        onClick={()=>setpossession('')}>Pause</button>
        <button className={`Away${awayCheck}`}
        onClick={startAway}>Away</button>
    </div>
    <div className='meter-container'>
        <div className='meter'>
        <div className='homebar' style={{ width: `${possCalc()}%` }}>{`${possCalc()}%`}</div>
        <div className='awaybar' style={{ width: `${100 - possCalc()}%` }}>{`${100 - possCalc()}%` }</div>  
        </div> 
    </div>
    </div>
    </>
  )
}
