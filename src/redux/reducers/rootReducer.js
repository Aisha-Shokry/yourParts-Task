import { combineReducers } from "redux";
import Devices from "./DevicesReducer";
import ChangeView from "./ChangeViewReducer";
import Details from "./DetailsReducer";

const rootReducer = combineReducers({
  Devices,
  changed: ChangeView,
  details: Details,
});

export default rootReducer;
