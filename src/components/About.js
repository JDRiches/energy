import React from 'react'

function About() {
  return (
 
    <div className='flex flex-col gap-5 my-10 w-full'>
        <h1 className='text-4xl font-extrabold'>What's Powering Our Grid?</h1>
        <p className='font-medium'>This is a basic breakdown of the current fuel mix used for generating electricity supplied by the UK National Grid. Data is based on the current 30 minute period.</p>
        <p className='font-medium'>Use the drop down to view the generation mix for a specific region.</p>
        <p className='font-medium'>Carbon intensity data at a regional level is a forecast of the grams of CO2 per kWh for the 30 minute period.</p>
        <p className='font-medium'>Data Sources: </p>
        <ul className="flex flex-col list-disc mx-4">
            <li className="mx-1"><a className='font-medium text-blue-600 dark:text-blue-500 hover:underline' href='https://carbonintensity.org.uk/'>National Grid ESO Carbon Intensity API</a></li>
        </ul>
        <p className='font-medium'>Inspired by the National Grid Live App created by Kate Morley (<a className='font-medium text-blue-600 dark:text-blue-500 hover:underline' href="https://grid.iamkate.com/">https://grid.iamkate.com/</a>)</p>
    </div>


  )
}

export default About
