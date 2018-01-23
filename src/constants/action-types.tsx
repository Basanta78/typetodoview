import { Action, ActionWithPayload, ActionWithError } from '../domain/actions/base';
import { todoResponse } from '../domain/todoResponse';

export const FETCH_TODO_START= "FETCH_TODO_START";
export type FETCH_TODO_START = typeof FETCH_TODO_START;

export const RECEIVE_TODO= "RECEIVE_TODO";
export type RECEIVE_TODO = typeof RECEIVE_TODO;;

export const FETCH_TODO_ERROR= "FETCH_TODO_ERROR";
export type FETCH_TODO_ERROR = typeof FETCH_TODO_ERROR;



//Types of Actions
export type FetchTodoStart = Action<FETCH_TODO_START>
export type ReceiveTodo = ActionWithPayload<RECEIVE_TODO, todoResponse>
export type FetchTodoError = ActionWithError<FETCH_TODO_ERROR, todoResponse>

export type fetchTodo = ReceiveTodo |FetchTodoStart| FetchTodoError;


export const actionTypes ={
  FETCH_TODO_START,
  RECEIVE_TODO,
  FETCH_TODO_ERROR
}