import React from 'react';
import Card from './Card';

const CardList = ({ countries }) => {
	return (
		<div>
		  {
			countries.map((country, i) => {
		    	return (
					<Card 						
						flag={countries[i].flag} 				
						name={countries[i].name} 
						region={countries[i].region}
						capital={countries[i].capital}
						languages={countries[i].languages[0].name}
						currencies={countries[i].currencies[0].name}
						area={countries[i].area}
						population={countries[i].population}
						/>
				);
			})
		}
		</div>
	)
}

export default CardList;