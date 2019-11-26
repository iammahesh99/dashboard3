import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../CssFile/menu.css';
import '../CssFile/Home.css';
import Cube from "react-3d-cube";




      //<img src={require('../Image/corn.jpg')} className={classes.paper} />





const styles = theme => ({

  root: {
    
   
    marginLeft: theme.spacing(2),
   
    marginRight:theme.spacing(2),
    paddingBottom:theme.spacing(2),
    direction:"column",
    alignItems:"center",
    justify:"center",


    
    

  },

  
  
  paper: {
    textAlign: 'center',
    height:'80px',
    color: theme.palette.text.secondary,
  },


  
});



class ItemMonitor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemCount:0,
      hit:[],
  
      
    };
    this.delevent=props.delevent.bind(this);
  }

componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const uri='https://maheshpandey9919.000webhostapp.com/newproject/services/services/under_stock.php';
    //console.log(uri)

      fetch(proxyurl+uri,{
        method: 'GET',
        })
      .then(response =>  response.json())
      .then(resData => {
        //const Data=resData;

    const Data = resData;

    let a=0;
    const arr=Data.map(self=>{return self.self_name});
    Data.map(pe => {return a=a+1});
    this.setState({itemCount:a});
    this.setState({hit:arr});
    
        
     //const arr=persons.map(pe => {return pe.supplier});
  
        
      });
    }
    





  
render(){
  const { classes}= this.props;
  return (

<React.Fragment>
 <Grid className={classes.root}>


 <Grid container spacing={6}>
          <Grid item xs={3}>
                              
           <Paper className={classes.paper}>
           <Typography variant="h6" component="h2">
              High Selling
            </Typography>
            <Typography component="p" style={{color:'red'}}>
               N 
            </Typography>
           </Paper>
                                  
                                     
            </Grid>
             <Grid item xs={3}>
             <Paper className={classes.paper} onClick={this.delevent}>
                <Typography variant="h6" component="h2">
                Low Selling
              </Typography>
              <Typography component="p" style={{color:'red'}}>
                 {this.state.itemCount}
            </Typography>  
            </Paper>         
              </Grid>
            <Grid item xs={3}>
            <Paper className={classes.paper}>
                                    
                  <Typography variant="h6" component="h2">
                   Planogram Compliance
                </Typography>
                <Typography component="p" style={{color:'red'}}>
                  anything
                </Typography>
                </Paper>
                                    
             </Grid>

             <Grid item xs={3}>
            <Paper className={classes.paper}>
                                    
                  <Typography variant="h6" component="h2">
                    Other Analysis
                </Typography>
                <Typography component="p" style={{color:'red'}}>
                  anything
                </Typography>
                </Paper>
                                    
             </Grid>
                              
 </Grid>

 </Grid>


</React.Fragment>
 
  );
}
}
ItemMonitor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemMonitor);
