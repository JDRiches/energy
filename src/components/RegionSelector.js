import React from 'react';

function RegionSelector({ setRegion }) {
    const regions = [
        { value: "0", label: "National" },
        { value: "1", label: "North Scotland" },
        { value: "2", label: "South Scotland" },
        { value: "3", label: "North West England" },
        { value: "4", label: "North East England" },
        { value: "5", label: "Yorkshire" },
        { value: "6", label: "North Wales" },
        { value: "7", label: "South Wales" },
        { value: "8", label: "West Midlands" },
        { value: "9", label: "East Midlands" },
        { value: "10", label: "East England" },
        { value: "11", label: "South West England" },
        { value: "12", label: "South England" },
        { value: "13", label: "London" },
        { value: "14", label: "South East England" },
        { value: "15", label: "England" },
        { value: "16", label: "Scotland" },
        { value: "17", label: "Wales" },
    ];

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
    };

    return (
        <form className="">
            <select onChange={handleRegionChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {regions.map((region) => (
                    <option key={region.value} value={region.value}>{region.label}</option>
                ))}
            </select>
        </form>
    );
}

export default RegionSelector;