import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm'
import SearchTable from '../../components/SearchTable'
import './index.css';

class Search extends Component {
  constructor() {
  super();

  this.state = {
    'data': [],
    'mentors': []

  }
}

getMentors = async(e) => {
  console.log('got to mentors')
  e.preventDefault();

  console.log('got to mentors')


  let username = e.target.elements.username.value;
  // let email = e.target.elements.email.value;
  let zipcode = e.target.elements.zipcode.value;
  let sexuality = e.target.elements.sexuality.value;
  let gender = e.target.elements.gender.value;
  // let religion = e.target.elements.year.value;


  let URL = 'https://lgbt-mentors-backend.herokuapp.com/api/retrieve';

  console.log(URL);

  let response = await fetch(URL, {
    "method": "GET",
    "headers": {
    'Content-Type': "application/json",
    "Username": username,
    // "Email": email,
    "Zipcode":zipcode,
    "Sexuality":sexuality,

    "Gender": gender,
    // "Religion": religion,

  }

  });
  let data = await response.json()
  data = data.users;
  this.setState({ data : data })

  // let mentors = data.user;
  //
  //
  // this.setState({ mentors })


}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Find A Mentor</h1>
            <SearchForm getMentors={this.getMentors}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
            {/* TODO: Add event table*/}
            <SearchTable
            data = {this.state.data}
            mentors={this.state.mentors}/>
            </div>
          </div>
      </div>
    );
  }
}

export default Search;
