import React, {Component} from "react";
import ReactMapGL, { Marker, Popup ,GeolocateControl} from "react-map-gl";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import IconButton from '@material-ui/core/IconButton';
import {
  Route,
  Link
} from "react-router-dom";


// <GeolocateControl
          
//           positionOptions={{enableHighAccuracy: true}}
//           trackUserLocation={true}
//         />


export default class Mapshow extends Component{

	 constructor(props) {
            super(props);
            this.state = {
              viewport:{


                			    latitude: 27.736,
                			    longitude: 22.661,
                			    width: "100vw",
                			    height: "84vh",
                			    zoom:1.10,
                          overflow: 'hidden',
                          hash: true,
                          wrapAroundWorld: false
 			    
                			  },
        	   selectedPark:false,
             hit:[],
             
              
            }
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

    
    
    this.setState({hit:resData});
                          
    
        
     //const arr=persons.map(pe => {return pe.supplier});

      });
    }


  


  render(){

  return (
    <div style={{marginTop:'8px'}}>
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiaWFtbWFoZXNoOTkiLCJhIjoiY2szNWlzdGoyMDgzYTNrcWo4MWJvMjA5aiJ9.XQhVwd6mB7rc0E2tw3V0Gw"
        mapStyle="mapbox://styles/iammahesh99/ck35locda017h1cp6omsgkor2"
        
        wrapAroundWorld ={false}
        hash={true}
        onViewportChange={(viewport) => {
                      this.setState({viewport})}}
        
        
        
        style={{height:'400px'}}
        
        
      >
      
      
        
          <Marker
            
            latitude={-37.890080}
            longitude={145.273570}
          >
               <IconButton aria-label="location" 
               onMouseOver={e => {
                            e.preventDefault();
                            this.setState({selectedPark:true})
                            
                          		}}
                onMouseOut={() => {
                             this.setState({selectedPark:null});
                            }}>
              		<Link to="/StoreView" style={{ textDecoration: 'none',color:'red'}}>
              		
          
            		<LocationOnIcon />
            		</Link>
          
       			 </IconButton>
            
          </Marker>

          <Marker
            
            latitude={-33.703180}
            longitude={151.100730}
          >
               <IconButton aria-label="location2" 
               style={{color:'green'}}>
          
            		<LocationOnIcon />
          
       			 </IconButton>
            
          </Marker>
       

        {this.state.selectedPark ? (
          <Popup
           latitude={-37.890080}
            longitude={145.273570}
            >
            <div>
              <h3>Store1</h3>
              <h4>Understock Item</h4>
              {this.state.hit.map(content =>(
                <li>{content.item}</li>
              ))}

            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
}