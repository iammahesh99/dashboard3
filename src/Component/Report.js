import React, {Fragment,Component}from 'react';
import '../CssFile/menu.css';





class Report extends Component {
 constructor(props) {
    super(props);
    
  }

  
  render() 
  {
    
    return (
      
      <div>
     
     <iframe 
     style={{width:'800px',height:'500px',marginTop:'7%',marginLeft:'3%',backgroundColor:'#2F4F4F'}}
     src="https://app.powerbi.com/view?r=eyJrIjoiNjMzYTg4ZGEtOGVmMC00YTU3LTk3NGQtMDRhMTA1NGU3YTg3IiwidCI6IjQwNGIxOTY3LTY1MDctNDVhYi04YTZkLTczNzRhM2Y0NzhiZSJ9"
     >
     </iframe>
     
      
      </div>
      
      );
  }
}
export default Report;
