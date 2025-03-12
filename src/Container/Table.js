/* eslint-disable no-unused-vars */
// import React, { useState } from 'react'
import React from 'react'
import { connect } from 'react-redux';
import { setTableNumber, resetTableNumber } from '../Actions/index.js';

const Table = ({table_number,setTableNumber}) => {
	const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	const inactivebtn = 'btn btn-outline-primary m-2';
	const activeBtn = 'btn btn-outline-primary m-2 active';
	// const [number, setNumber] = useState(null)    //when we select the partcular number, we want to store that in a variable and that time only we have to show thicker blue
  return (
	<>
		<center>
			<h4>Please Select Your Table Number:</h4>
			{numbers.map((num,index) => 
				(					
					<div style={{display : 'inline'}} key= {index}> 
					{/* selected variable we have already stored in Number ===our button num then shows active         */}
						<button className={table_number===num?activeBtn:inactivebtn} onClick={()=>setTableNumber(num)}
						>   
							{num}                             
						</button>
					
					{/* <button className={number === num ? activeBtn:inactivebtn} onClick={()=>setNumber(num)}>{num}</button> */}
					</div>
				)
			)}
		</center>
	</>
  )
}
const mapStateToProps = (state) =>({
	table_number : state.tablereducer.table_number    //if you want to fetch table number state value from state that should be stored in our loacl variable
})
export default connect(mapStateToProps, {setTableNumber})(Table);         // Directly we are destructuring the dispatch actions by using {}
//export default connect(mapStateToProps, mapDispatchToProps)(Table);

// By Connect method, we can able to utilize all our functinalities like reducer dispatches and state values..