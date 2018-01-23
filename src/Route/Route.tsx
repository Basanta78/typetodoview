import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import '../css/index.css';
import Home from '../Pages/Home';
import About from '../Pages/About';
import reduxThunk from 'redux-thunk';
import Topics from '../Pages/Topics';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/todo';
import AuthButton from '../Components/AuthButton';
import MainWrapper from '../Components/MainWrapper';
import { Store, createStore, compose, applyMiddleware } from 'redux';
import { stateType } from '../domain/stateType';


export const store: Store<stateType> = createStore(
  rootReducer,
  compose(applyMiddleware(reduxThunk)),
  // (window as any).__REDUX_DEVTOOLS_EXTENSION__  && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const TodoRoute: React.SFC<{}> = () => (
  <div className="main-container">
  <h1> TODO APP </h1>
  <Provider store={store}>
  <Router>
    <div>
      <div className="header navbar navbar-expand-lg navbar-light bg-light clearfix">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/Todo">Todo</Link></li>
        <li><Link to="/AddTodo">Protected Todo</Link></li>
      </ul>
      <AuthButton/>
      </div>
      <hr/>

      <Switch>
      <Route exact={true} path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/Todo" component={MainWrapper}/>
      
      </Switch>
    </div>
  </Router>
  </Provider>
  </div>
)





export default TodoRoute;