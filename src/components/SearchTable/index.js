import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import './index.css';

function SearchTable(props) {
    console.log(props.data)
    return (

      <div className="row">
            <div className="col-md-12 full-span">

            <table className="table-dark table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>City</th>
                  <th>Sexuality</th>
                  <th>Gender</th>
                  <th>Religion</th>
                  <th> Message </th>

                </tr>
              </thead>
              <tbody>

                {props.data &&
                  props.data.map( mentor =>

                  <tr className="table-row">
                    <td className="table-data">{mentor.username}</td>
                    <td className="table-data">{mentor.zipcode}</td>
                    <td className="table-data">{mentor.sexuality}</td>
                    <td className="table-data">{mentor.gender}</td>
                    <td className="table-data">{mentor.religion}</td>
                    <td className="table-data"> <a href="Message" onClick={()=> localStorage.setItem("reciever", mentor.username)}> <button
                    className="btn btn-info" >Start Chat</button></a></td>

                  </tr>
                  )

                }
              </tbody>
            </table>
          </div>
        </div>
      )}

export default SearchTable;
