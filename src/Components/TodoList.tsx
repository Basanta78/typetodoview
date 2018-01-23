import '../css/index.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { stateType } from '../domain/stateType';
import ListItem from './todoItem';
// import { Dispatch } from 'redux';

const TodoList = (props:any) => {
  return(
    <div>
    <ul>
      {props.state.map((todoList:any,index:number)=>{return(<ListItem todoList={todoList} key={index}/>)})}
      </ul>   
  </div>
  )
}
const matchStatetoProps = (state: stateType) =>({state:state.todoList})
// const matchDispatchtoProps = (dispatch:Dispatch<stateType>) => {
//   return {
    
//   }
// }
const TodoItemApp = connect<any,any>(matchStatetoProps)(TodoList)
export default TodoItemApp;
// export default TodoList;