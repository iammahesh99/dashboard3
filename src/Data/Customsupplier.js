import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';
import '../CssFile/menu.css';
//import Dropdown from './Dropdown';





class Customsupplier extends Component{


  constructor(props){
    super(props);
    
    this.state= {
      
      chartData: {},
      name:props.name,

    }


  }




componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    
    
    const uri='54.225.125.93:7161/RmsReSTServices/services/private/PurchaseOrders/recent/purchaseOrderSearch?suppliers='+this.state.name;
    //console.log(uri);

      fetch(proxyurl+uri,{
        method: 'GET',
        Params:{
          suppliers:this.state.name,
        },
        headers: {
            'Authorization':'Basic ' + btoa('RMS_ADMIN'+ ':' +'PaSsw0rd.1'),
            'Content-Type':'application/xml',
        'Accept':'application/json', 
        'Accept-Versioning':'false',
        'Accept-Language':'en-US,en;q=0.8'
        }})
    .then(response =>  response.json())
    .then(resData => {
      
      const persons = resData.results;

    //console.log(persons);
    //const arr2=persons.map(pe => {return pe.supplierName});
    let b=0;
    let c=0;
    let d=0;
    let k=[];

        persons.map(pe => {
                        if(pe.status==='S')
                          {
                            b=b+1;
                          }


                          if(pe.status==='W')
                          {
                            c=c+1;
                          }

                          if(pe.status==='A')
                          {
                            d=d+1;
                          }
                          return k=[b,c,d];
                        });
        
     //const arr=persons.map(pe => {return pe.supplier});
     //console.log(arr);
        this.setState({
         chartData:{
        labels:['Sent','Worksheet','Approved'],
        datasets:[
              {
                label:'Quantity',
                data:k,
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 161, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 109, 132, 0.6)'
                ]

              }
                  ]

      }});
      })
    }


  render(){
    console.log(this.state.name);
    
    return (
      
      <div className="menu">
      <h2>supplier Details of {this.state.name}</h2>
      
      <Pie 
         data={this.state.chartData}
            
     />

        
       </div>
      )
  }
}

export default Customsupplier;
