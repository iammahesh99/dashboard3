import React, {Component} from 'react';
import Self1 from '../Component/Self1';
import Self2 from '../Component/Self2';
import Self3 from '../Component/Self3';
import Self5 from '../Component/Self5';


export default class Frontview extends Component{
	constructor(props) {
    super(props);
    this.state = {
    	understock1:props.understock,
    	shelfname:props.shelfname,
      
      
    }
    
}
     showShelf(){
    	if(this.state.shelfname=='Shelf1')
    	{
    		return <Self1 understock={this.state.understock1}/>
    	}
    	else if(this.state.shelfname=='Shelf2')
    	{
    		return <Self2 understock={this.state.understock1}/>
    	}
    	else if(this.state.shelfname=='Shelf3')
    	{
    		return <Self3 understock={this.state.understock1}/>
    	}
    	else if(this.state.shelfname=='Shelf5')
    	{
    		return <Self5 understock={this.state.understock1}/>
    	}

    }

	render(){
		console.log(this.state.shelfname);

		return(
			<div>
			{this.showShelf()}
			
			</div>
			)
	}
}