import { combineReducers } from "redux";
import Devices from "./Devices";
import ChangeView from "./ChangeView";
import Details from "./Details";


const rootReducer = combineReducers({
  Devices,
  changed: ChangeView,
  details:Details
});

export default rootReducer;
