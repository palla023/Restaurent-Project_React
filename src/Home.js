import React from 'react';
import Card from './Container/Card.js';
import Filter from './Container/Filter.js';
import Header from './Container/Header.js';
import Table from './Container/Table.js';

const Home = () => {
  return (
	<>
		<Header />
		<Table />
		<Filter />
		<Card />
	</>
  )
}

export default Home