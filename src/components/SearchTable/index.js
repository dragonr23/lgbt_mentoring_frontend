import React, { Component } from 'react';


import './index.css';

function SearchTable(props) {
    console.log(props.data)
    return (

      <div className="row">
            <div className="col-md-12">

            <table className="table-dark table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Zipcode</th>
                  <th>Sexuality</th>
                  <th>Gender</th>
                  <th>Religion</th>
                  <th> Message </th>

                </tr>
              </thead>
              <tbody>

                {props.data &&
                  props.data.map( mentor =>

                  <tr>
                    <td>{mentor.username}</td>
                    <td>{mentor.zipcode}</td>
                    <td>{mentor.sexuality}</td>
                    <td>{mentor.gender}</td>
                    <td>{mentor.religion}</td>
                    <td><button
                    className="btn btn-info" onClick={()=> alert('Sending Message')}>Start Chat</button></td>

                  </tr>
                  )

                }
              </tbody>
            </table>
          </div>
        </div>
      )}

export default SearchTable;
