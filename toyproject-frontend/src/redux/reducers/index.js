import { combineReducers } from "redux";
import customerListReducer from "./customerListReducer";
import saveCustomerReducer from "./saveCustomerReducer";

const rootReducer = combineReducers({
  customerListReducer,
  saveCustomerReducer
});

export default rootReducer;