import React from 'react'

function FuelRow({mix, percent}) {
  return (
    <div className='flex flex-row justify-between'>
      <div className='text-left text-xl font-medium'>
        {mix}
      </div>
      <div className='text-right text-xl font-medium'>
        {percent}%
      </div>
    </div>

  )
}

export default FuelRow
