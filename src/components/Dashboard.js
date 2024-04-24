import React from 'react'
import FuelRow from './FuelRow'
import RegionSelector from './RegionSelector'

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

    var hour = String(date.getHours()).padStart(2, '0');
    var minutes = String(date.getMinutes()).padStart(2, '0');

  
    var formatted = day+"/"+month+"/"+year+ " "+hour+":"+minutes;


    return formatted

}


function Dashboard() {


    const [mix, setMix] = useState([])
    const [lastUpdate, setLastUpdate] = useState('laoding...')

    const [region, SetRegion] = useState("0")

    useEffect(() => {

        if(region == "0"){
            axios.get("https://api.carbonintensity.org.uk/generation")
            .then(res => {
                setMix(res.data.data.generationmix)
                setLastUpdate(res.data.data.from)
                //console.log(res.data.data.generationmix)
            })
        }
        else{
            axios.get("https://api.carbonintensity.org.uk/regional/regionid/" + region)
            .then(res => {
                console.log(res.data.data[0])
                setMix(res.data.data[0].data[0].generationmix)
                setLastUpdate(res.data.data[0].data[0].from)
               // console.log(res.data.data.data.generationmix)
            })
        }


        console.log(region)
    
    }, [region])

  return (
    <div className='p-3  flex flex-col gap-5 w-full my-10 bg-slate-50 rounded-md shadow-sm'>
        <RegionSelector setRegion={SetRegion}/>
        <div>
            {mix.sort((a,b) => b.perc - a.perc)
            .map((m) => {
                return <FuelRow key={m.fuel} mix={capitalizeFirstLetter(m.fuel)} percent={m.perc}/>
            })}
        </div>
        <div className='text-slate-400 text-center'>
            Last Updated: {cleanDate(lastUpdate)}
        </div>
    </div>
  )
}

export default Dashboard
