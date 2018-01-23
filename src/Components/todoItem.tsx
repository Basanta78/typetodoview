import '../css/index.css';
import * as React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { stateType } from '../domain/stateType';
// import { Dispatch } from 'redux';

interface Iprops {
  todoList:{
    id: string,
    task: string,
    details: string,
    tags: string[]
  }
}
const ListItem = (props: Iprops) => {
      return (      
        <Fragment>
           <div className="row"> 
          <li className="list-group-item list-group-item-info " > Task:{props.todoList.task} </li>
          </div>
          <div className="row">
            <li className="list-group-item list-group-item-info" >Details:{props.todoList.details}</li>
            <ul>
            {props.todoList.tags.map((tag:any,index) =><div className="badge badge-primary" key={index}>{tag.tag}</div>)}
          </ul> 
        </div> 
        <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" type="submit"  id={props.todoList.id}>Edit</button>
          <button className="btn btn-danger" type="submit"  id={props.todoList.id}>Delete</button>
        </Fragment>    
    ) 
    }
const matchStatetoProps = (state:stateType) =>({state:state.todoList})
// const matchDispatchtoProps = (dispatch:Dispatch<stateType>) => {
//   // return {
//   //   deleteTodo:( id, index ) => {
//   //     dispatch(deleteTodo(id,index));
//   //   }
//   // }
// }
const ListItemApp = connect<any,any>(matchStatetoProps)(ListItem)

export default ListItemApp;