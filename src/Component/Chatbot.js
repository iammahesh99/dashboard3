import React,{Component} from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../chat';
import '../CssFile/Style.css';





class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state={
      sub:'hell'
      

    };
    this.clear=this.clear.bind(this);
    
  }

  

 scrollToBottom = () => {
  this.messagesEnd.scrollIntoView({ behavior: "smooth" });
}

componentDidMount() {
  this.scrollToBottom();
}

componentDidUpdate() {
  this.scrollToBottom();
}

clear(e){
  const value=e.target.value;
  
   
      this.setState({value:''})
    
  
}
  
    

  render() {
    const { feed,sendMessage } = this.props;
    //console.log(feed);
    const message=feed.map((entry,index) =>( 
              index%2==0?<h6  key={entry.text} className='user'> {entry.text}</h6>:  <h6  key={entry.text} className='dummy'> {entry.text}</h6>
               ));
    
    return (
      <div >
          <div className='ui'>
              <h1>Try Me! </h1>
              
                     {message}

                 <div style={{ float:"left", clear: "both" }}
                   ref={(el) => { this.messagesEnd = el; }}>
                  </div>

                 
          </div>

        <div>

        <input type="text"
        
        className='input'  
        placeholder="Type message.." 
        onKeyDown={ (e) => e.keyCode===13? (sendMessage(e.target.value), this.clear(e)):null }>
        </input>
        </div>
      </div>
  
      );
  }
}

const mapStateToProps = state =>({
  feed:state
});

export default connect(mapStateToProps,{
  sendMessage
})(Chatbot);

