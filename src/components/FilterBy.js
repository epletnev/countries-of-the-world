import React from 'react';


const FilterBy = ({ handleChange }) => {

	return (
		<div className='pa2'>
		<select className='pa3 ba b--green bg-lightest-blue' defaultValue='filter' onChange={handleChange}>
		<option value="filter">Filter by region</option>
		<option value="asia">Asia</option>
		<option value="europe">Europe</option>		
		<option value="africa">Africa</option>
		<option value="oceania">Oceania</option>
		<option value="americas">Americas</option>
		<option value="polar">Polar</option>
		</select>
		</div>
		);
	}

	export default FilterBy;