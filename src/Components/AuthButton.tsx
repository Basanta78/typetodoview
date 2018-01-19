import * as React from 'react';
import {
  Link,
} from 'react-router-dom';
// import Logout from './Logout';
// import { connect } from 'react-redux';

const AuthButton: React.SFC<{}> = () => {
  return(
  
    <div>
    <button className="btn btn-secondary"><Link to="/Login">Login</Link></button>
    <button className="btn btn-default"><Link to="/Register">Register</Link> </button>
    </div> 
)
}
// const mapStateToProps = (state) =>({state:state.auth})
// const AuthButtonApp = connect(mapStateToProps)( AuthButton )
export default AuthButton;
