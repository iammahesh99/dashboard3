import React, {Component} from 'react';
import '../CssFile/Shipment.css';
import {Pie,Bar,Line} from 'react-chartjs-2';


export default class ShipmentAnalysis extends Component{


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
								data:[15,11,18],
								backgroundColor:[
									'rgba(255, 99, 132, 0.6)',
									'rgba(54, 161, 235, 0.6)',
									'rgba(255, 206, 86, 0.6)',
									
								],		

							}
				
				          ]


						}
		});
      })
  	}






	render()
	{
		return(
			<div style={{marginTop:'6%'}}>

			<div className="container">
			    <Bar 
				 data={this.state.chartData}
				 options={{
						 	legend:{
						 		labels: {
							                fontColor: "black",
							                
							            }
						 	},
						 	scales: {
						            yAxes: [{
						                ticks: {
						                    fontColor: "black",
						                    beginAtZero: true
						                }
						            }],
						            xAxes: [{
						                ticks: {
						                    fontColor: "black",
						                    beginAtZero: true
						                }
						            }]
		        				}
						 
						 }
					}

				 
				 

				 /> 

			    <p>This is Bar Chart</p>
			  </div>
			  <div className="container">
			    <Pie 
				 data={this.state.chartData}
				 options={{
				 	legend:{
				 		labels: {
					                fontColor: "black",
					                
					            }
				 	}
				 }}
				 /> 
			    <p>This is Pie Chart</p>
			  </div>
			  <div className="container">
			    <Line 
				 data={this.state.chartData}
				 options={{
						 	legend:{
						 		labels: {
							                fontColor: "black",
							                
							            }
						 	},
						 	scales: {
						            yAxes: [{
						                ticks: {
						                    fontColor: "black",
						                    beginAtZero: true
						                }
						            }],
						            xAxes: [{
						                ticks: {
						                    fontColor: "black",
						                    beginAtZero: true
						                }
						            }]
		        				}
						 
						 }
					}
				 /> 
			    <p>This is Line Chart</p>
			  </div>
			


			
			</div>


			);
	}
}