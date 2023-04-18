import { combineReducers } from "redux";
import filterReducer from "./filterreducer";
import orderreducer from "./orderreducer";
import tablereducer from "./tablereducer";

const reducer = combineReducers(
	{
		tablereducer : tablereducer,
		filterreducer : filterReducer,
		orderreducer : orderreducer
	}
)
export default reducer;