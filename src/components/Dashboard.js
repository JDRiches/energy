import React from 'react'
import FuelRow from './FuelRow'

import { useEffect, useState } from 'react'
import axios from 'axios'

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

function cleanDate(dateStr){

    const date = new Date(dateStr)

    var day = date.getDate();
    var year = date.getFullYear();
    var month = date.getMonth()+1;

  
    var formatted = day+"/"+month+"/"+year;


    return formatted

}


function Dashboard() {


    const [mix, setMix] = useState([])
    const [lastUpdate, setLastUpdate] = useState('laoding...')

useEffect(() => {
    axios.get("https://api.carbonintensity.org.uk/generation")
    .then(res => {
        setMix(res.data.data.generationmix)
        setLastUpdate(res.data.data.from)
    })

    
}, [])

  return (
    <div className='p-3 w-auto m-auto border-solid border-2 flex flex-col gap-5'>
        <div>
            {mix.map((m) => {
                return <FuelRow key={m.fuel} mix={capitalizeFirstLetter(m.fuel)} percent={m.perc}/>
            })}
        </div>
        <div className='text-slate-400'>
        Last Updated: {cleanDate(lastUpdate)}
        </div>
    </div>
  )
}

export default Dashboard
