import React, { Component } from 'react';


import './index.css';

function SearchForm(props) {
  console.log("SEARCH FORM GO")

    return (
      <form onSubmit={props.getMentors} className="row">
        <div className="form-group col-md-2 search-form">
          <label>Username</label>
          <input type="text" className="form-control search-form" name="username" />
        </div>
        <div className="form-group col-md-2">
          <label>City</label>
          <input type="text" className="form-control search-form" name="zipcode" />
        </div>
        <div className="form-group col-md-2">
          <label>Sexuality</label>
          <input type="text" className="form-control search-form" name="sexuality" />
        </div>
        <div className="form-group col-md-2">
          <label>Gender</label>
          <input type="text" className="form-control search-form" name="gender" />
        </div>
        <div className="form-group col-md-2">
          <label>Religion</label>
          <input type="text" className="form-control search-form" name="religion" />
        </div>
        <button type="submit" className="btn btn-primary search-btn">Find Mentor</button>
      </form>
    );

}

export default SearchForm;
