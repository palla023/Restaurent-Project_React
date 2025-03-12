const initialState = [];

export default function orderreducer(state = initialState, action){
	const {type, payload}= action;

	switch(type){
		case "ADDORDER":
			return [...state, payload];     //for adding =>Add the payload value only
		default:
			return state;
	}
}