import React, {Component} from "react";
import Mapshow from '../Component/Map';
import Summery from '../Component/Summery';

export default class FirstScreen extends Component{
	constructor(props) {
    super(props);
    this.state = {
      
	selectedvalue:'map',
	email:localStorage.getItem('email')
      
    };
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(event,index)
  {
  	this.setState({selectedvalue:index});
  }
  


	render(){
		//console.log(this.state.selectedvalue)

		return(
			<React.Fragment>
			<div style={{marginTop:'5%',marginLeft:'45%'}}>
			<button style={{backgroundColor:'white',display:'inline-block',marginLeft:'2%'}}
			 selected={this.state.selectedvalue === 'map'}
             onClick={event => this.handleClick(event, 'map')}	
			>
			MapView
			</button>
			<button style={{backgroundColor:'white',display:'inline-block',marginLeft:'2%'}}
			selected={this.state.selectedvalue === 'Summery'}
            onClick={event => this.handleClick(event, 'Summery')}
			>Summary</button>
		</div>
		<div>

				{this.state.selectedvalue=='map'?<Mapshow/>:<Summery/>}
			</div>
		</React.Fragment>
		

		)
	}
}