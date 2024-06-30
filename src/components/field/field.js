import './field.css'
import React, { useEffect, useRef, useState } from 'react'



export default function Field({plays, setPlays, selectedPlayer, setSelectedPlayer, selectedEvent, setSelectedEvent, time, half, selectedPlays}) {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [selecting, setSelecting] = useState();
    useEffect(()=>{
        const canvas = canvasRef.current
        canvas.witdh = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
        const context = canvas.getContext('2d')

        context.lineCap = "round"
        context.strokeStyle = "black"
        context.lineWidth = 5

        contextRef.current = context

        
    })

    function formatTime(){
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        
        if(minutes === '45'){
            return `45:00 + ${minutes -45}:${seconds}`
        }
        return `${minutes}:${seconds}`
    }

    function createPlay(){
        var newPlay = {
            half:half,
            player: selectedPlayer[0],
            event: selectedEvent,
            time: formatTime(),
            team: selectedPlayer[1],
            x: mousePos.x,
            y: mousePos.y 
        }
        
        setPlays([...plays,newPlay])
        setSelectedPlayer('')
        setSelectedEvent('')
    }

    function drawPoints(){

        selectedPlays.forEach(play=>{
            let color = play.team === 'Home' ? '#0000FF' : '#FF0000'
            contextRef.current.beginPath();
            contextRef.current.arc(play.x, play.y, 3, 0, Math.PI * 2, true);
            contextRef.current.fillStyle = color;
            contextRef.current.fill();
            contextRef.current.closePath();
        })
        
        if(selecting)
        {let hovercolor = selectedPlayer[1] === 'Home' ? '#0000FF' : '#FF0000'
        contextRef.current.beginPath();
        contextRef.current.arc(mousePos.x, mousePos.y, 3, 0, Math.PI * 2, true);
        contextRef.current.fillStyle = hovercolor;
        contextRef.current.fill();
        contextRef.current.closePath();}
    }

    const trackMouse = (nativeEvent) => {

        if(!selectedEvent){
            return}
        setSelecting(true)
        nativeEvent.preventDefault();
        nativeEvent.stopPropagation();  
        const { offsetX, offsetY } = nativeEvent.nativeEvent;
        setMousePos({ x: offsetX, y: offsetY });
        

      };
    
      const placePoint = (nativeEvent) => {
        nativeEvent.preventDefault();
        nativeEvent.stopPropagation();
        if(selectedEvent){
            createPlay()
            setSelecting(false)
        }
        

      };

      useEffect(() => {
        drawPoints();
      }, [mousePos, selectedPlays, selectedPlayer,selectedEvent]);
    
   return (
    <>
    <div className='field-container'>
        <img src='field.jpg'></img>
        <canvas
        className='field-canvas'
        ref={canvasRef}
        onMouseMoveCapture={trackMouse}
        onMouseDown={placePoint}
        ></canvas>
    </div>

    </>
  )
}
