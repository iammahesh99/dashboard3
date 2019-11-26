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

class Self3 extends Component {

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
    this.setState({name:index});
    
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };
  componentDidMount(){
  	this.state.understock.map(data=>{
       if(data.item==='deo' & data.self_name==='self3')
              {
                 this.setState({a:true});
               }
        if(data.item==='kajal' & data.self_name==='self3')
              {
                 this.setState({b:true});
               }
        if(data.item==='lipliner' & data.self_name==='self3')
              {
                 this.setState({c:true});
               }
        if(data.item==='lipstic' & data.self_name==='self3')
              {
                 this.setState({d:true});
               }
        if(data.item==='nailpolish' & data.self_name==='self3')
              {
                 this.setState({e:true});
               }
        if(data.item==='sunscreen' & data.self_name==='self3')
              {
                 this.setState({f:true});
               }
        if(data.item==='toner' & data.self_name==='self3')
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
      <h2 className="header">Makeup</h2>
      <Grid container >
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.a? 'red': null}}>
              <img src={require('../Image/self3/deo.jpg')} className={classes.paper1} 
      
              />
             
              
              
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.b? 'red': null}}>
              <img src={require('../Image/self3/kajal.jpg')} className={classes.paper1} 
              selected={this.state.name === 'kajal'}
              onClick={event => this.handleClick(event, 'kajal')}
              title="Remaining item is 24"  aria-label="add"
              
              />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.c? 'red': null}}>
              <img src={require('../Image/self3/lipliner.jpg')} className={classes.paper1} 
              title="Remaining item is 34"  aria-label="add"/>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.d? 'red': null}}>
              <img src={require('../Image/self3/lipstic.jpg')} className={classes.paper1} 
              selected={this.state.name === 'lipstic'}
              onClick={event => this.handleClick(event, 'lipstic')}
              title="Remaining item is 8"  aria-label="add"/>
              </Paper>
            </Grid>
      </Grid>
        <Grid container >
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.e? 'red': null}}>
              <img src={require('../Image/self3/nailpolish.jpg')} className={classes.paper1} 
              title="Remaining item is 15"  aria-label="add"/>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.f? 'red': null}}>
              <img src={require('../Image/self3/sunscreen.jpg')} className={classes.paper1} 
              title="Remaining item is 92"  aria-label="add"/>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{ backgroundColor: this.state.g? 'red': null}}>
              <img src={require('../Image/self3/toner.jpg')} className={classes.paper1} 
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
Self3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Self3);