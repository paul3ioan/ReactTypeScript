import { combineReducers } from '@reduxjs/toolkit';
import ToDoListReducer from './reducers/ToDoListReducers'
/**
 * Register application wide reducers here
 * Reducers will be bind to the root state using the namespace given
 * in the object passed to the combineReducers function
 */
const rootReducer = combineReducers({
  ToDoList: ToDoListReducer,
});
export default rootReducer;
