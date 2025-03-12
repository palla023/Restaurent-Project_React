const initialState = {
	table_number : null
}

export default function tablereducer(state = initialState, action){          //edf(){}
	const {type, payload} = action;                //Destructuring the action

	switch(type){
		case "SETTABLENUMBER":
			return {...state,table_number:payload };
		case "RESETTABLENUMBER":
			return {...state, table_number:null};
		default:
			return state;
	}
}