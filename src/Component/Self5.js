import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import PropTypes from 'prop-types';
import Understockitemdetail from '../Component/Understockitemdetail';


import '../CssFile/menu.css';
const styles = theme => ({
  
  paper: {
    
    textAlign: 'center',
    color: theme.palette.text.secondary,
   	height:'140px',
   	marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
   paper1: {
    width:'80%',
   	height:'100%',
   	
  },

  
});

class Self5 extends Component {

   constructor(props) {
    super(props);
    this.state = {
      anchorEl:null,
      understock:props.understock,
      name:'hello',
      a:false,
      b:false,
      c:false,
      d:false,
      e:false,
      f:false,
      g:false,
      
    };
     this.handleClick= this.handleClick.bind(this);
     this.handleClose= this.handleClose.bind(this);
}

   handleClick = (event,index) => {
    this.setState({anchorEl:event.currentTarget});
    this.setState({name:index})
    
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };
  componentDidMount(){
  	this.state.understock.map(data=>{
       if(data.item==='dairymilk' & data.self_name==='self5')
              {
                 this.setState({a:true});
               }
        if(data.item==='ferrero' & data.self_name==='self5')
              {
                 this.setState({b:true});
               }
        if(data.item==='hershey' & data.self_name==='self5')
              {
                 this.setState({c:true});
               }
        if(data.item==='kitkat' & data.self_name==='self5')
              {
                 this.setState({d:true});
               }
        if(data.item==='munch' & data.self_name==='self5')
              {
                 this.setState({e:true});
               }
        if(data.item==='nutties' & data.self_name==='self5')
              {
                 this.setState({f:true});
               }
        if(data.item==='snickers' & data.self_name==='self5')
              {
                 this.setState({g:true});
               }


    });
  }

 

render(){
	 const open = Boolean(this.state.anchorEl);
 	 const id = open ? 'simple-popover' : undefined;
 	 const { classes}= this.props;
 	 console.log(this.state.anchorEl);
  return (
    <div className="menu1">
      <h2 className="header">Chocklets</h2>
      <Grid container >
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.a? 'red': null}}>
              <img src={require('../Image/self5/dairymilk.jpg')} className={classes.paper1} 
              />
             
              
              
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.b? 'red': null}}>
              <img src={require('../Image/self5/ferrero.jpg')} className={classes.paper1} 
              title="Remaining item is 24"  aria-label="add"
              />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.c? 'red': null}}>
              <img src={require('../Image/self5/hershey.jpg')} className={classes.paper1} 
              title="Remaining item is 34"  aria-label="add"/>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.d? 'red': null}}>
              <img src={require('../Image/self5/kitkat.jpg')} className={classes.paper1}
              selected={this.state.name === 'kitkat'}
              onClick={event => this.handleClick(event, 'kitkat')} 
              title="Remaining item is 8"  aria-label="add"/>
              </Paper>
            </Grid>
      </Grid>
        <Grid container >
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.e? 'red': null}}>
              <img src={require('../Image/self5/munch.jpg')} className={classes.paper1} 
              title="Remaining item is 15"  aria-label="add"/>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.f? 'red': null}}>
              <img src={require('../Image/self5/nutties.jpg')} className={classes.paper1} 
              title="Remaining item is 92"  aria-label="add"/>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.g? 'red': null}}>
              <img src={require('../Image/self5/snickers.jpg')} className={classes.paper1} 
              selected={this.state.name === 'snickers'}
              onClick={event => this.handleClick(event, 'snickers')}
              title="Remaining item is 91"  aria-label="add"/>
              </Paper>
            </Grid>
        </Grid>
      


      <Popover
        id={id}
        open={open}
        anchorEl={this.state.anchorEl}
        onClose={this.handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {this.state.understock.map(item2 =>
        {
          if(item2.item==this.state.name)
          {
            return <Typography style={{float:'left'}}>
            {this.state.name} --Current_SOH - {item2.SOH}, Predictable_SOH--{item2.predict_item}
            </Typography>
          }

        }
        )}
        
        <Understockitemdetail itemname={this.state.name} />
        <button style={{backgroundColor:'red'}} onClick={this.handleClose}>Close</button>
      </Popover>

      
    </div>
  );
  }
}
Self5.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Self5);