import { combineReducers } from 'redux';
import {Devices} from './Devices';
import {ChangeView} from './ChangeView';

export default combineReducers({
  Devices,
  // changed:ChangeView
});
