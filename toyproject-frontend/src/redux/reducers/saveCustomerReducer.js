import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function saveCustomerReducer(
  state = initialState.savedCustomer,
  action
) {
  switch (action.type) {
    case actionTypes.CREATE_CUSTOMERS_SUCCESS:
      return action.payload;
    case actionTypes.UPDATE_CUSTOMERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}