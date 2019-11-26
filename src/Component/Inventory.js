import React, {Fragment,Component}from 'react';
import StoreInfo from '../Data/StoreInfo';
import PropTypes from 'prop-types';
import '../CssFile/menu.css';

class Inventory extends Component {
 constructor(props) {
    super(props);
    this.state={
      data:'All',

    };
    this.handleChange = this.handleChange.bind(this);
    
  }

  static defaultProps = {
    visuals: ['All','Apple', 'Android']
  }
  


  handleChange(event) {
    //logging for testing
    //console.log('testing value in Dropdown.js: ', event.target.value);
    this.setState({data:event.target.value},() =>{


    });
    
  }
  
  render() 
  {
    
    
    let visualOptions = this.props.visuals.map(visual => {
      return <option key={visual} value={visual}>{visual}</option>
    });
    
    
    
    return (
      <div className="header">

        <label>Select Item</label><br />
          <select id="soflow" ref="visual" value={this.props.value} onChange={this.handleChange}>
            {visualOptions}
          </select>
          <StoreInfo/>
          
          
          
         
      </div>
      );
  }
}
Inventory.propTypes = {
  visualChange: PropTypes.func,
  visuals: PropTypes.array,
  value: PropTypes.string
};

export default Inventory;
