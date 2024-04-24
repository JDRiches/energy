import React from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios'

function RegionSelector({ setRegion}) {

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
        // You can perform any further actions with the selected value here
      };

    return (
        <form className="">
        <select onChange={handleRegionChange} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="0">National</option>
            <option value="1">North Scotland</option>
            <option value="2">South Scotland</option>
            <option value="3">North West England</option>
            <option value="4">North East England</option>
            <option value="5">Yorkshire</option>
            <option value="6">North Wales</option>
            <option value="7">South Wales</option>
            <option value="8">West Midlands</option>
            <option value="9">East Midlands</option>
            <option value="10">East England</option>
            <option value="11">South West England</option>
            <option value="12">South England</option>
            <option value="13">London</option>
            <option value="14">South East England</option>
            <option value="15">England</option>
            <option value="16">Scotland</option>
            <option value="17">Wales</option>
        </select>
        </form>
    )
}

export default RegionSelector
