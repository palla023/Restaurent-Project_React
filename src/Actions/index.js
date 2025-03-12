export const setTableNumber = (value) => async dispatch =>{
	dispatch(
		{
			type :"SETTABLENUMBER",
			payload : value

		}
	)
}
export const resetTableNumber =()=> async dispatch =>{
	dispatch(
		{
			type : "RESETTABLENUMBER"
		}
	)
}

export const setFilter = (value) => async dispatch=>{
	dispatch(
		{
			type : "SETFILTER",
			payload : value
		}
	)
}
export const resetFilter =()=> async dispatch =>{
	dispatch(
		{
			type: "RESETFILTER"
		}
	)
}

export const addorder = (id,name,prize,table_number,url)=> async dispatch =>{
	dispatch(
		{
			type: "ADDORDER",
			payload : {
				id:id,
				name:name,
				prize:prize,
				table_number:table_number,
				url :url                    //url will hold our actual image
			}
		}
	)
}
