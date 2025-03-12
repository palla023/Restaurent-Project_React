/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setFilter, resetFilter } from '../Actions/index.js';

const Filter = ({setFilter, resetFilter,filter_name}) => {
	const Prod = ["All Items", "Rice Items", "Cold Drinks", "Pizza", "Hot Drinks"];
	// const[filter, setFilter] = useState("All Items");  //whatever we selected in the select tag , that will be stored in this(filter) variable 
  return (
	<>
		<center className='mt-2'>
			<span className='h4 mr-2'>Filter :</span>
			{/* whenever you are selecting the value in dropbox values , the old value should be reset with new value SetFilter(our selected value) */}
			<select name='filter' className='p-1 mb-3' onChange={(e)=> setFilter(e.target.value) }> 
				{Prod.map((item, index)=>(

						<option value={item} key={index} >{item}</option>
				))}
			</select> 
			{/* <button className='btn btn-sm btn-primary ml-2' onClick={()=>setFilter(filter)}>Select</button> */}
		</center>
	</>
  )
}
//declare the mapStateToProps
const mapStateToProps = (state)=>({
	filter_name : state.filterreducer.filter_name           //we have to take reducer variable
})
export default connect(mapStateToProps, {setFilter, resetFilter}) (Filter);