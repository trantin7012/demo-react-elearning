import { combineReducers } from "redux";
//import Reducer mới tạo vào store, đây là Store nơi chứa các reducer
import CourseReducer from './course'

import UserReducer from './user'
//đây là Store nơi chứa các reducer


const RootReducer = combineReducers({
    course:CourseReducer,
    user:UserReducer
});

export default RootReducer;