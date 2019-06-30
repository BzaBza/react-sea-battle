import {combineReducers} from 'redux';
import setShipReducer from "./setShipReducer";
import shotReducer from "./shotReducer";

export default combineReducers({
  setShipReducer,
  shotReducer
});