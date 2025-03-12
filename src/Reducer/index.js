import { combineReducers } from "redux";
import filterReducer from "./filterreducer.js";
import orderreducer from "./orderreducer.js";
import tablereducer from "./tablereducer.js";

const reducer = combineReducers(
	{
		tablereducer : tablereducer,
		filterreducer : filterReducer,
		orderreducer : orderreducer
	}
)
export default reducer;