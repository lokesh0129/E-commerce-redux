import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const Reducers = combineReducers({
  allProducts: productReducer,
  product:selectedProductReducer
})

export default Reducers;