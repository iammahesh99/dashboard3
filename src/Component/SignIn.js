import React, { Component } from 'react'
import firebase from 'firebase'
import LoginSuccess from '../Component/LoginSuccess'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// componentWillMount () {
//     firebase.auth().onAuthStateChanged(user => {
//       this.setState({ user })
//     })
//   }




class SignIn extends Component {
  constructor () {
    super()
    this.state = {
    user: null,
    
  };
    this.handleAuth = this.handleAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  

  
  }
  

    componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const uri='https://maheshpandey9919.000webhostapp.com/newproject/services/services/store_login.php?email=maheshpandey9919@gmail.com';
    // //console.log(uri)

    //   fetch(proxyurl+uri,{
    //     method: 'GET',
    //     })
    //   .then(response =>  response.json())
    //   .then(resData => {
    //     //const Data=resData;
    //     console.log(resData)
        
    //  //const arr=persons.map(pe => {return pe.supplier});
  
        
    //   });
  }


  
  handleAuth (e) {
    e.preventDefault();
    

    const provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({
        prompt: 'select_account'
      });
     
 
    firebase.auth().signInWithPopup(provider) 
    .then((result) => {
      const user = result.user;
      
    });

    


  }

 handleLogout () {
    firebase.auth().signOut()
      .then(result => console.log('Te has desconectado correctamente'))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  renderMessages () {
    if (this.state.user) {
      return (<div>
        <LoginSuccess
        onLogout={this.handleLogout}
        user={this.state.user}
        />
        </div>)
    } else {
      return <div style={{marginTop:'20%',marginLeft:'37%'}}>
      
      <button style={{width:'350px',
      fontSize: '32px',
      backgroundColor:'white'
      }}
    
      onClick={this.handleAuth}><img width='38'
      style={{float: 'left'}}
      

      src={require('../Image/Google-icon.jpg')}  />
      Login with Google</button>
          </div>
    }
  }

  render () {
    console.log(this.state.user)

    return (
      <div>
        
        
        <div>
          
          {this.renderMessages()}
        </div>
      </div>
    )
  }
}

export default SignIn;
