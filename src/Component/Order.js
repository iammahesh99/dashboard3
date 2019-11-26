import React, {Fragment,Component}from 'react';
import Chart from '../Data/Chart';
import Customsupplier from '../Data/Customsupplier';
import PropTypes from 'prop-types';
import '../CssFile/menu.css';

class Order extends Component {
 constructor(props) {
    super(props);
    this.state={
      data:'All',

    };
    this.handleChange = this.handleChange.bind(this);
    
  }

  static defaultProps = {
    visuals: ['All','1001', '30001']
  }
  


  handleChange(event) {
    //logging for testing
    //console.log('testing value in Dropdown.js: ', event.target.value);

    this.setState({data:event.target.value});

    
  }
  
  render() 
  {
    console.log(this.state.data);
    const MyComponent=this.state.data=="All"?<Chart name={this.state.data} />:<Customsupplier name={this.state.data} />
    
    let visualOptions = this.props.visuals.map(visual => {
      return <option key={visual} value={visual}>{visual}</option>
    });
    
    
    
    return (
      <div className="header">

        <label>Select Suppliers</label><br />
          <select id="soflow" ref="visual" value={this.props.value} onChange={this.handleChange}>
            {visualOptions}
          </select>
          {MyComponent}
          
          
         
      </div>
      );
  }
}
Order.propTypes = {
  visualChange: PropTypes.func,
  visuals: PropTypes.array,
  value: PropTypes.string
};

export default Order;
