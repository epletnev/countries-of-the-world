import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import FilterBy from '../components/FilterBy';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			countries: [],
			searchfield: '',
			value: 'filter'
		}		
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	onHandleChange = (event) => {
		this.setState({value: event.target.value});      
	}

	handleFetch = () => {
		if (this.state.value === 'filter') {
			fetch('https://restcountries.eu/rest/v2/all')
			.then(response => response.json())
			.then(country => this.setState({ countries: country }));		
		} else {
			fetch(`https://restcountries.eu/rest/v2/region/${this.state.value}`)
			.then(response => response.json())
			.then(country => this.setState({ countries: country }));
		} 	 	
	}

	render() {		
		this.handleFetch()  
		const { countries, searchfield } = this.state;
		const filteredCountries = countries.filter(country =>{
			return country.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !countries.length ?
		<h1>Loading</h1> :
		(
			<div className='tc'>
			<h1 className='f1'>Countries of the world</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<FilterBy handleChange={this.onHandleChange}/>
			<Scroll>
			<CardList countries={filteredCountries} />
			</Scroll>
			</div>	
			);
	}
}

export default App;