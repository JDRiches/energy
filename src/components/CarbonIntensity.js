import React from 'react'

function CarbonIntensity({intensity, index}) {

    function returnIntensityColour(index){
        if(index == "very high" | index == "high")
        {
            return 'bg-red-500'
        }
        else if(index == "moderate")
        {
            return 'bg-orange-500'
        }
        else
        {
            return 'bg-green-500'
        }
    }


  return (
    <div className={'mx-auto ' + returnIntensityColour(index) + ' rounded-lg p-5'}>
        <div className='font-medium text-center'>
            Carbon Intensity : {intensity} gCO2/kWh
        </div>

    </div>
  )
}

export default CarbonIntensity
