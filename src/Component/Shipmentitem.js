import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';import '../CssFile/Shipment.css';
import '../CssFile/Shipment.css';
import '../CssFile/menu.css';
//import Dropdown from './Dropdown';





class ShipmentItem extends Component{


  constructor(props){
    super(props);
    
    this.state= {
      
      hit: [],
      name:props.name,

    }


  }




componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    
    const uri='https://maheshpandey9919.000webhostapp.com/newproject/services/services/shipmentItem.php?shipmentName='+this.state.name;
    //console.log(uri)

      fetch(proxyurl+uri,{
        method: 'GET',
        })
      .then(response =>  response.json())
      .then(resData => {
        //const Data=resData;

    const Data = resData;

    console.log(Data);
      //console.log(resData);
    this.setState({hit:Data});
      // const persons = resData.results;

    //console.log(persons);
    //const arr2=persons.map(pe => {return pe.supplierName});
    
        
     //const arr=persons.map(pe => {return pe.supplier});
     //console.log(arr);
        
      });
    }


  render(){
    console.log(this.state.name);
    
    return (
      
      <div className="table_menu">
      <h4>Shipment Details of {this.state.name}</h4>
      <Paper>
      <Table >
        <TableHead >
          <TableRow >
            <TableCell className="table_head">ITEMS</TableCell>
            <TableCell align="left" className="table_head">QUANTITY(in cases)</TableCell>
        
          </TableRow>
        </TableHead>

        <TableBody>
          {this.state.hit.map(row => (
            <TableRow key={row.id}>
              <TableCell className="table_column">
                {row.item}
              </TableCell>
              <TableCell align="left" className="table_column">{row.quantity}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
      
     

        
       </div>
      )
  }
}

export default ShipmentItem;
