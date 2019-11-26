import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';import '../CssFile/Shipment.css';
import '../CssFile/Shipment.css';
import '../CssFile/menu.css';

import {
  Route,
  Link
} from "react-router-dom";

//import Dropdown from './Dropdown';





class Understockitemdetail extends Component{


  constructor(props){
    super(props);
    
    this.state= {
       anchorEl:null,
      itemname:props.itemname,
      data1:[],
      data2:[],
      data3:[],
      data4:[],
    };
    this.handleClick= this.handleClick.bind(this);
    this.handleClose= this.handleClose.bind(this);


  }
  handleClick = (event) => {
    this.setState({anchorEl:event.currentTarget});
    
    
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };


  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const uri='https://maheshpandey9919.000webhostapp.com/newproject/services/services/understock_item.php?item='+this.state.itemname;
    const uri2='https://maheshpandey9919.000webhostapp.com/newproject/services/services/understock_transitItem.php?item='+this.state.itemname;
    const uri3='https://maheshpandey9919.000webhostapp.com/newproject/services/services/understock_buddy.php?item='+this.state.itemname;
    const uri4='https://maheshpandey9919.000webhostapp.com/newproject/services/services/understock_backstore.php?item='+this.state.itemname



Promise.all([
            fetch(proxyurl+uri,{ method: 'GET', }),
            fetch(proxyurl+uri2,{ method: 'GET', }),
            fetch(proxyurl+uri3,{ method: 'GET', }),
            fetch(proxyurl+uri4,{ method: 'GET', }),
        ])
        .then(([res1, res2,res3,res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]))
        .then(([resdata1, resdata2,resdata3,resdata4]) => this.setState({
            data1: resdata1, 
            data2: resdata2,
            data3: resdata3, 
            data4: resdata4
        }));

      
    }




  render(){
    // console.log(this.state.data3);
    // console.log(this.state.data4);
    // const open = Boolean(this.state.anchorEl);
    // const id = open ? 'simple-popover' : undefined;
    
    
    
    
    return (
      
      <div className="table_menu">
      <Paper>
      <Table >
        <TableHead >
          <TableRow >
            <TableCell align="center" className="table_head">Position</TableCell>
             <TableCell align="center" className="table_head">Status</TableCell>
            <TableCell align="center" className="table_head">ID</TableCell>
            <TableCell align="center" className="table_head">Quantity</TableCell>
            <TableCell align="center" className="table_head">Other</TableCell>
        
          </TableRow>
        </TableHead>

        <TableBody>
            <TableRow>
              <TableCell align="center" className="table_head">
                Back Office
              </TableCell>
              <TableCell align="center" className="table_column">
              --
              </TableCell>
              {this.state.data3.map(item1 =>(
                <TableCell align="center" className="table_column" key='1'>
                {item1.itemid}
                </TableCell>
              ))}
              {this.state.data3.map(item1 =>(
                <TableCell align="center" className="table_column" key='2'>
                {item1.quantity}
                </TableCell>
              ))}

              
               <TableCell align="center" className="table_column">
              --
              </TableCell>
              
            </TableRow>

            <TableRow>
            <TableCell align="center" className="table_head">
                Warehouse
              </TableCell>
              <TableCell align="center" className="table_column">
                Recieved
              </TableCell>
              
              {this.state.data1.map(item1 =>(
                <TableCell align="center" className="table_column" key='1'>
                {item1.itemid}
                </TableCell>
              ))}
              {this.state.data1.map(item1 =>(
                <TableCell align="center" className="table_column" key='2'>
                {item1.quantity}
                </TableCell>
              ))}
              <TableCell align="center" className="table_column">
                --
              </TableCell>
              
              
              
            </TableRow>


            <TableRow >
              <TableCell align="center" className="table_head">
                Shipment
              </TableCell>
              <TableCell align="center" className="table_column">
                InTransit
              </TableCell>
              {this.state.data2.map(item1 =>(
                <TableCell align="center" className="table_column" key='3'>
                {item1.itemid}
                </TableCell>
              ))}
              {this.state.data2.map(item1 =>(
                <TableCell align="center" className="table_column" key='4'>
                {item1.quantity}
                </TableCell>
              ))}
               <TableCell align="center" className="table_column">
                --
              </TableCell>
              
            </TableRow>

            <TableRow >
              <TableCell align="center" className="table_head">
                Buddy Store
              </TableCell>
              <TableCell align="center" className="table_column">
              --
              </TableCell>
              {this.state.data4.map(item1 =>(
                <TableCell align="center" className="table_column" key='1'>
                {item1.itemid}
                </TableCell>
              ))}
              {this.state.data4.map(item1 =>(
                <TableCell align="center" className="table_column" key='2'>
                {item1.quantity}
                </TableCell>
              ))}
               <TableCell align="center" className="table_column">
              --
              </TableCell>
              
            </TableRow>
          
        </TableBody>
      </Table>
    </Paper>

      
     

        
       </div>
      )
  }
}

export default Understockitemdetail;
