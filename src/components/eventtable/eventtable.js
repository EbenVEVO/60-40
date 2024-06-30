import React from 'react'
import './eventtable.css'
import Datatable from '../ui/datatable';


export default function Eventtable({plays, selectedPlays, setSelectedPlays}) {
  return (
    <>
    <div>
    <h1>Events</h1>
    <div className='table-container'>
        <Datatable
            selectedPlays = {selectedPlays}
            setSelectedPlays = {setSelectedPlays}
            plays = {plays}
        />
    </div>
    </div>
    </>
  )
}
