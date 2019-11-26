import React, {Component} from 'react';
import '../CssFile/Shipment.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import Dropdown from './Dropdown';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ShipmentItem from '../Component/Shipmentitem';
import ShipmentAnalysis from '../Component/ShipmentAnalysis';





class Shipment extends Component{


	constructor(props){
		super(props);
		
		this.state= {
			
			hit: [],
			selectedIndex: null,
			open:false,
			

		};
		this.handleListItemClick = this.handleListItemClick.bind(this);


	}

	handleListItemClick = (event, index) => {
		this.setState({open:!this.state.open})
    	this.setState({selectedIndex:index});
  }
  




componentDidMount() {
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		const uri='https://maheshpandey9919.000webhostapp.com/newproject/services/services/shipment.php';
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
		console.log(this.state.selectedIndex);
		console.log(this.state.hit);
		
		return (
			<React.Fragment>
			<ShipmentAnalysis />
			
			<div className="shipment">

				<div className="container2">
				<h2>Shipment Detail</h2>
						<List>

						{ this.state.hit.map((item) => {return <ListItem key={item.id}  
						button
						selected={this.state.selectedIndex === item.shpmentDetail}
						onClick={event => this.handleListItemClick(event, item.shpmentDetail)}
			          	>

						{item.shpmentDetail} recieved on {item.date}
						
					
						</ListItem> })}
						
						
						  </List>
				</div>
				<div className="container3">
				{this.state.open ? <ShipmentItem name={this.state.selectedIndex} /> :null   }
				</div>
			 

			
			 </div>
			 </React.Fragment>
		        
			)
	}
}

export default Shipment;
