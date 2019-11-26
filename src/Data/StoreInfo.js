import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import '../CssFile/menu.css';
//import Dropdown from './Dropdown';





class StoreInfo extends Component{


	constructor(props){
		super(props);
		
		this.state= {
			
			chartData: {},
			

		}


	}




componentDidMount() {
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		const uri='https://maheshpandey9919.000webhostapp.com/newproject/services/services/adminlist.php';
		//console.log(uri)

    	fetch(proxyurl+uri,{
        method: 'GET',
        })
    	.then(response =>  response.json())
    	.then(resData => {

    	console.log(resData);
    	// const persons = resData.results;

		//console.log(persons);
		//const arr2=persons.map(pe => {return pe.supplierName});
		
      	
 		 //const arr=persons.map(pe => {return pe.supplier});
 		 //console.log(arr);
        this.setState({
         chartData:{
				labels:['Sent','Worksheet','Approved'],
				datasets:[
							{
								label:'Quantity',
								data:[10,20,10],
								fill: false,
								

							}
				          ]

			}});
      })
  	}


	render(){
		
		return (
			
			<div >
			<h2>StoreInfo</h2>
			
			<Line 
				 data={this.state.chartData}
					  
			/>
				
			 </div>
			)
	}
}

export default StoreInfo;
