import {createAction} from "@reduxjs/toolkit"
import { todoData } from "../../interfaces/interface";
export const getTodos = createAction< todoData[]>("GET_ALL_TODOS");
export const addTodo = createAction<todoData>("ADD_NEW_TODO");
export const removeTodo = createAction<string>("REMOVE_TODO_FROM_LIST");
export const selectedTodo = createAction<todoData>("SELECT_TODO");