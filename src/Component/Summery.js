import React, {Component} from 'react';
import '../CssFile/Shipment.css';
import {Pie,Doughnut,Bar} from 'react-chartjs-2';


export default class Summery extends Component{


	constructor(props){
		super(props);
		
		this.state= {
			
			chartData:{
				labels:['Loss'],
				datasets:[
							{
							
								data:[78],
								backgroundColor:[
									'rgba(255, 99, 132, 0.6)',
									'rgba(54, 161, 235, 0.6)',
									'rgba(255, 206, 86, 0.6)',
									
								],		
							}				
				          ]
						},
			chartData2:{
				labels:['Recieved','In-transit','Pending'],
				datasets:[
							{
								label:'Quantity',
								data:[35,45,23],
								backgroundColor:[
									'rgba(255, 99, 132, 0.6)',
									'rgba(54, 161, 235, 0.6)',
									'rgba(255, 206, 86, 0.6)',
									
								],		
							}				
				          ]
						},
			chartData3:{
				labels:['Sent','Worksheet','Approved'],
				datasets:[
							{
								label:'Quantity',
								data:[25,34,60],
								backgroundColor:[
									'rgba(255, 99, 132, 0.6)',
									'rgba(54, 161, 235, 0.6)',
									'rgba(255, 206, 86, 0.6)',
									
								],		
							}				
				          ]
						}				
		}

	}







	render()
	{
		return(
			<React.Fragment>
			<div >
			<h5 style={{color:'white'}}>Store1</h5>
			<div style={{display:'inline-block',
					width:'25%',marginLeft:'5%',
					backgroundColor:'#4a4a4a',
					borderRadius: '7px'}}>
			    <Doughnut 
				 data={this.state.chartData}
				 options={{
						 	legend:{
						 		labels: {
							                fontColor: "black",
							                
							            }
						 	},
						 	
					}}

				 
				 

				 /> 

			    <p>Item loss running Monitor</p>
			  </div>
			  <div style={{display:'inline-block',
					  marginLeft:'2%',width:'25%',
					  backgroundColor:'#4a4a4a',
					  borderRadius: '7px'}}>
			    <Pie 
				 data={this.state.chartData2}
				 options={{
				 	legend:{
				 		labels: {
					                fontColor: "black",
					                
					            }
				 	}
				 }}
				 /> 
			    <p>Shipment Chart</p>
			  </div>
			  <div style={{display:'inline-block',
					  marginLeft:'2%',
					  width:'25%',
					  backgroundColor:'#4a4a4a',
					  borderRadius: '7px'}}>
			    <Bar 
				 data={this.state.chartData3}
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
			    <p>Order Chart</p>
			  </div>
			


			
			</div>

			<div>
			<h5 style={{color:'white'}}>Store2</h5>
			<div style={{display:'inline-block',
					width:'25%',
					marginLeft:'5%',
					backgroundColor:'#4a4a4a',
				 	borderRadius: '7px'}}>
			    <Doughnut 
				 data={this.state.chartData}
				 options={{
						 	legend:{
						 		labels: {
							                fontColor: "black",
							                
							            }
						 	},
						 	
					}}

				 
				 

				 /> 

			    <p>Item loss running Monitor</p>
			  </div>
			  <div style={{display:'inline-block',
					  marginLeft:'2%',
					  width:'25%',
					  backgroundColor:'#4a4a4a',
					  borderRadius: '7px'}}>
			    <Pie 
				 data={this.state.chartData2}
				 options={{
				 	legend:{
				 		labels: {
					                fontColor: "black",
					                
					            }
				 	}
				 }}
				 /> 
			    <p>Shipment Chart</p>
			  </div>
			  <div style={{display:'inline-block',
					  marginLeft:'2%',
					  width:'25%',
					  backgroundColor:'#4a4a4a',
					  borderRadius: '7px'}}>
			    <Bar 
				 data={this.state.chartData3}
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
			    <p>Order Chart</p>
			  </div>
			


			
			</div>
			</React.Fragment>


			);
	}
}