import {combineReducers} from 'redux';
import isConnectReducer from "./connectWithServerReduceer";
import setShipReducer from "./setShipReducer";

export default combineReducers({
  isConnectReducer,
  setShipReducer
});