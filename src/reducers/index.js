import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import WorkReducer from './WorkReducer';
import { reducer as FormReducer } from 'redux-form';


export default combineReducers({
    AuthReducer,
    WorkReducer,
    form: FormReducer
})