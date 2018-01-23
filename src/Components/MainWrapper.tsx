import '../css/index.css';
import * as React from 'react';
import TodoWrapper from './TodoList';
import { connect } from 'react-redux';
import { getTodo } from '../actions/fetch-todo';
import { stateType } from '../domain/stateType';
import { SFC } from 'react';
import { Dispatch } from 'redux';


const MainComponent:SFC =(props) => {
  return (
    <div className="mainWrapper">
    <TodoWrapper />
    </div>
  )
}

const MainWrapper = (Component:SFC) => {
  return class MajorComponent extends React.Component<any,any>{
    componentDidMount() {
      this.props.getTodo(1);
    }
    render(){
      return <Component {...this.props} />
    }
  }
}
const MainWrapperComponent = MainWrapper(MainComponent);
const matchStatetoProps = (state:stateType) =>({state})

const matchDispatchtoProps = (dispatch:Dispatch<stateType>) => {
  return{
  getTodo: (page:number) => {
    dispatch(getTodo(page))
  }
  }
}

const containerWrapper = connect<any,any>(matchStatetoProps,matchDispatchtoProps)(MainWrapperComponent);
export default containerWrapper;