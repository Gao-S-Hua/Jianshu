import {combineReducers} from 'redux';
import headerReducer from '../common/header/store/reducer';
import homeReducer from '../pages/home/store/reducer'
export default combineReducers(
    {header : headerReducer,
    home : homeReducer}
)


