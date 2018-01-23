import * as todoServices from '../services/todo-services';
import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { stateType } from '../domain/stateType';
import { todoResponse } from '../domain/todoResponse';


export const getTodo = (page:number) => {
  let pageNo = page || 1
  return ((dispatch: Dispatch<stateType>) => {
    dispatch(fetchTodoStart())
   return todoServices.getRequest('todo/'+pageNo)
    .then(res => {
     return dispatch(receiveTodo(res.data.data))
    })
    .catch((err) =>{
      return dispatch(fetchTodoError())
      })
    })
  }

//Action creators
export const fetchTodoStart = createAction('FETCH_TODO_START');
export const receiveTodo = createAction('RECEIVE_TODO',(payload:todoResponse)=>payload);
export const fetchTodoError = createAction('FETCH_TODO_ERROR');

