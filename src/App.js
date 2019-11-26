import React, {Fragment,Component}from 'react';
import './App.css';

import LoginSuccess from './Component/LoginSuccess';

import SignIn from './Component/SignIn';

import {BrowserRouter, Route, Switch,Link} from 'react-router-dom';
//import Cube from './Demo.js';
//<Demo />
//<Mapshow />


// <Link to="/homepage" style={{ textDecoration: 'none',color:'black'}}
      //  onClick={this.handleClick}>
      // Just Click
      // </Link>

class App extends Component {
 constructor(props) {
    super(props);
    this.state={
      click:false,
    }
    
  }
handleClick=()=>{
  this.setState({click:!this.state.click})
}
  
  render() 
  {
    
    return (
      <BrowserRouter>
      <div>
      
      <Switch>
      <Route path="/" exact component={SignIn } />
       
       </Switch>
      
      
      </div>
      </BrowserRouter>

      );
  }
}
export default App;
