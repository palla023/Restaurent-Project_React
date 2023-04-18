const initialState = {
	filter_name : "All Items"       // we have only one variable to store a filter values
}

//creating a reducer
export default function filterReducer(state=initialState, action){
	const {type, payload} = action;        //Destructuring the action

	switch(type){                         // Resetting the filter and setting the filer
		case 'SETFILTER':
			return {...state, filter_name:payload};
		case "RESETFILTER":
			return {...state, filter_name:"All Items"};
		default:
			return state;
	}
}