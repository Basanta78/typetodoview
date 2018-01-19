import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Topics from '../Pages/Topics';
import AuthButton from '../Components/AuthButton';
import '../css/index.css';


const TodoRoute: React.SFC<{}> = () => (
  <div className="main-container">
  <h1> TODO APP </h1>
  {/* <Provider store = { store }> */}
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
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      {/* <Route path = "/Todo" component = {MainWrapper}/> */}
      {/* <Route path = "/Logout" component = {Logout} /> */}
      {/* <Route path = "/Login" component = {Login}/> */}
      {/* <Route path = "/Register" component = {Register}/> */}
      {/* <PrivateRoute path="/AddTodo" component={MainWrapper}/> */}
      </Switch>
    </div>
  </Router>
  {/* </Provider> */}
  </div>
)





export default TodoRoute;