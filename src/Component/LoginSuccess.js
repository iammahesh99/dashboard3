import React, {Fragment,Component}from 'react';
import MiniDrawer from '../Layout/Nav.js';
import Order from '../Component/Order.js';
import Inventory from '../Component/Inventory';
import Home from '../Component/Home';
import Shipment from '../Component/Shipment';
import Mapshow from '../Component/Map';
import Report from '../Component/Report';
import FirstScreen from '../Component/FirstScreen';





import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import Cube from './Demo.js';
//<Demo />
//<Mapshow />

class LoginSuccess extends Component {
 constructor(props) {
    super(props);
    this.state={
      onLogout:props.onLogout,
      user:props.user
    };
    
  }

  
  render() 
  {
    
    return (
      <BrowserRouter>
      <div>
     
     <MiniDrawer
     onLogout={this.state.onLogout}
     user={this.state.user}
     />
     
       <Switch>
          <Route path="/" exact component={FirstScreen} />
          <Route path="/StoreView" exact component={Home} />
          <Route path="/Order"  component={Order} />
          <Route path="/Inventory" component={Inventory} />  
          <Route path="/Shipment" component={Shipment} />
          <Route path="/Report" component={Report} />
          

        </Switch>

      
      </div>
      </BrowserRouter>

      );
  }
}
export default LoginSuccess;
