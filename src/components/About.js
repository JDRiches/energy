import React from 'react'

function About() {
  return (
 
    <div className='flex flex-col align-top gap-5 my-10 w-1/2'>
        <h1 className='text-4xl font-extrabold'>Uk Grid Mix</h1>
        <p className='font-medium'>A basic breakdown of the current fuel mix used for generation by the UK National Grid.</p>
        <p className='font-medium'>Data Sources: </p>
        <ul class="flex flex-col list-disc mx-4">
            <li class="mx-1"><a className='font-medium text-blue-600 dark:text-blue-500 hover:underline' href='https://carbonintensity.org.uk/'>National Grid ESO Carbon Intensity API</a></li>
        </ul>
        <p className='font-medium'>Inspired by the National Grid Live App created by Kate Morley (<a className='font-medium text-blue-600 dark:text-blue-500 hover:underline' href="https://grid.iamkate.com/">https://grid.iamkate.com/</a>)</p>
    </div>


  )
}

export default About
