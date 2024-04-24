import React from 'react'

function About() {
  return (
 
    <div className='flex flex-col gap-5 m-10 w-3/4'>
        <h1 className='text-4xl font-extrabold'>UK Grid Generation Mix</h1>
        <p className='font-medium'>A basic breakdown of the current fuel mix used for generating electricity supplied by the UK National Grid.</p>
        <p className='font-medium'> Use the drop down to view the generation mix for a specific region.</p>
        <p className='font-medium'>Data Sources: </p>
        <ul class="flex flex-col list-disc mx-4">
            <li class="mx-1"><a className='font-medium text-blue-600 dark:text-blue-500 hover:underline' href='https://carbonintensity.org.uk/'>National Grid ESO Carbon Intensity API</a></li>
        </ul>
        <p className='font-medium'>Inspired by the National Grid Live App created by Kate Morley (<a className='font-medium text-blue-600 dark:text-blue-500 hover:underline' href="https://grid.iamkate.com/">https://grid.iamkate.com/</a>)</p>
    </div>


  )
}

export default About
