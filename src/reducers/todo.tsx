import { INITIALSTATE } from '../constants/todo-state';
import { actionTypes } from '../constants/action-types';
import { Reducer } from 'redux';
import { stateType } from '../domain/stateType';
// import { fetchTodo } from '../constants/action-types'; 

const Todo:Reducer<stateType> =(state: stateType= INITIALSTATE, action:any) => {
  switch (action.type) {
    case actionTypes.FETCH_TODO_ERROR:
      return {...state, 
        didInvalidate: true
    }
    case actionTypes.FETCH_TODO_START:
    return {...state, 
      didInvalidate: false,
      isFetching: true
    }
    case actionTypes.RECEIVE_TODO:
      return {...state, 
        isFetching: false,
        didInvalidate: false,
        todoList: action.payload.Todos,
        metadata: action.payload.metadata
      }
    default:
      return { ...state }
    }
  }

export default Todo;