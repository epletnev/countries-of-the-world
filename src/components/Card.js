import React from 'react';

const Card = ({ flag, name, region, capital, languages, currencies, area, population }) => {
	return (
		<div className='tc bg-washed-red dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='countries' src={`${flag}`} className='w5'/>
			<div>
				<h2>{name}</h2>
				<p><strong>Region:</strong> {region}</p>
				<p><strong>Capital:</strong> {capital}</p>
				<p><strong>Language:</strong> {languages}</p>
				<p><strong>Currency:</strong> {currencies}</p>
				<p><strong>Area:</strong> {area}</p>
				<p><strong>Population:</strong> {population}</p>						
			</div>
		</div>
	);
}

export default Card;