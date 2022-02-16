import {createReducer,PayloadAction,createSlice } from '@reduxjs/toolkit';
import type { todoData } from '../../interfaces/interface';
import {selectedTodo, getTodos, addTodo, removeTodo} from '../actions/ToDoListActions'
const testList :todoData[] = [{
  key:1,
  title:"funny",
  body:"ceva foarte foarte important",
  type:3,
  status:3,
},
{
  key:2,
  title:"funny",
  body:"ceva foarte foarte important",
  type:3,
  status:2,
},
{
  key:3,
  title:"funny",
  body:"ceva foarte foarte important",
  type:3,
  status:1,
},
{
  key:4,
  title:"funny",
  body:"ceva foarte foarte important",
  type:3,
  status:1,
},
{
  key:5,
  title:"funny",
  body:"ceva foarte foarte important",
  type:3,
  status:3,
},
{
  key:6,
  title:"funny",
  body:"ceva foarte foarte important",
  type:3,
  status:1,
},
{
  key:7,
  title:"funny",
  body:"ceva foarte foarte important",
  type:3,
  status:1,
},

]
const initialState : todoData[] = testList
// console.log(initialState)
// const ToDoListReducer = createSlice({
//   name: 'counter',
//   // `createSlice` will infer the state type from the `initialState` argument
//   initialState,
//   reducers: {
//     getTodos: state =>state,
//     // decrement: state => {
//     //   state.value -= 1
//     // },
//     // // Use the PayloadAction type to declare the contents of `action.payload`
//     // incrementByAmount: (state, action: PayloadAction<number>) => {
//     //   state.value += action.payload
//     // }
//   }
// })
const ToDoListReducer = createReducer(initialState, builder =>
  builder
    .addCase(getTodos, (state, action) => ({ ...state, list:action.payload}))
    .addCase(selectedTodo,(state=[], action) =>({...state, ...action.payload}))
    .addCase(removeTodo, (state, action) => {})
    .addCase(addTodo, (state, action) => ({...state,data:action.payload}))
);


export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;

export default ToDoListReducer;