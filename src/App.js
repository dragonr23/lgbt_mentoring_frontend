import React, { Component } from 'react';
import SECRET_KEY from './config.js';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Profile from './views/Profile';
import Search from './views/Search';
import Groups from './views/Groups';
import Login from './views/Login';
import Logout from './views/Logout';
import Register from './views/Register';
import Message from './views/Message';
import Footer from './components/footer';
import Header from './components/header';
import OldMessage from './views/OldMessage';
import LGBTANEWYORK from './views/LGBTANEWYORK';
import TRANSRIGHTS from './views/TRANSRIGHTS';
import FLANNELMEETUP from './views/FLANNELMEETUP';
import PRIDE from './views/PRIDE';

let jwt = require('jsonwebtoken')

class App extends Component {
  constructor() {
  super();

  this.state = {
    logged_in: false,
    token: '',
    username: ''
  }
}

handleLogin = async(e) => {
  e.preventDefault();

  let email = e.target.elements.email.value
  let password  = e.target.elements.pass.value

  const URL = 'http://127.0.0.1:5000/authenticate/login';

  let token = jwt.sign(
    { 'email': email, 'password':password},
    SECRET_KEY,
    {expiresIn: '1h'}
  );

  let response = await fetch(URL, {

    'headers': {
      'Content-Type': 'application/json',
      'token': token,

    }
  });

  let data = await response.json()

  console.log(data);

  //setup message saying logged in the water is fine or error

  if (data.message == 'success') {
    this.setState({ 'logged_in' : true , 'token': data.token });

    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.username)

    alert('You are now logged in. The water is fine.')
  } else {
    alert(data.message)
  }
}

handleRegister = async(e) => {
  e.preventDefault();

  let email = e.target.elements.email.value
  let password  = e.target.elements.password.value
  let username = e.target.elements.username.value
  let zipcode = e.target.elements.zipcode.value
  let sexuality = e.target.elements.sexuality.value
  let gender = e.target.elements.gender.value
  let religion = e.target.elements.religion.value


  const URL = 'https://lgbt-mentors-backend.herokuapp.com/authenticate/register';

  // encrypt a token with the proper payload info to send to our api

  let token = jwt.sign(
    {
      'email': email,
      'password':password,
      'username': username,
      'zipcode': zipcode,
      'sexuality': sexuality,
      'gender': gender,
      'religion': religion
   },
    SECRET_KEY,
    {expiresIn: '1h'}
  );

  // send the token to register the user_id
  let response = await fetch(URL, {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json',
      'token': token
    }
  });

  let data = await response.json()

  //set up a message that says registered or error

  if (data.message == 'success') {
    alert('You are now registered!')
  } else {
    alert(data.message)
  }
}

handleMessage = async(e) => {
    e.preventDefault();

    alert('handle message has been handled')

}

  render(){
    return (
      <div className="App">
        <Header logged_in={this.state.logged_in} />

        <div className="container">
          <Switch>


            <Route exact path='/' render={() => <Home />}/>


            <Route exact path='/Profile' render={() => <Profile />}/>
            <Route exact path='/Profile' render={() => <p>Login please</p>}/>




            <Route exact path='/Search' render={() => <Search />}/>
            <Route exact path='/Groups' render={() => <Groups />}/>
            <Route exact path='/Login' render={() => <Login handleLogin={this.handleLogin}/>}/>
            <Route exact path='/Register' render={() => <Register handleRegister={this.handleRegister}/>}/>
            <Route exact path='/Logout' render={() => <Logout />}/>
            <Route exact path='/Message' render={() => <Message username={this.state.username} />}/>
            <Route exact path='/OldMessage' render={() => <OldMessage username={this.state.username} />}/>
            <Route exact path='/LGBTANEWYORK' render={() => <LGBTANEWYORK />}/>
            <Route exact path='/TRANSRIGHTS' render={() => <TRANSRIGHTS />}/>
            <Route exact path='/FLANNELMEETUP' render={() => <FLANNELMEETUP />}/>
            <Route exact path='/PRIDE' render={() => <PRIDE />}/>

          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
