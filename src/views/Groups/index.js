import React, { Component } from 'react';
import './index.css';
import Inbox from '../../components/Inbox'

class Groups extends Component {

  constructor() {
  super();

  this.state = {



  }
}



componentWillMount() {


}

  render() {
    return(

      <div className="container">
        <h1>Join A Group</h1>

        <div className="col-md-10 offset-md-1">
          <div className="row">


            <div className="col-md-3">

            <a href="/LGBTANEWYORK"><div className="card">
              <img src="http://placehold.it/250x250" alt="Placeholder" className="card-img"/>
              <div className="card-title"><b>LGTBA+ New York</b></div>
            </div></a>
            </div>


            <div className="col-md-3">
            <a href="/TRANSRIGHTS"><div className="card">
              <img src="http://placehold.it/250x250" alt="Placeholder" className="card-img"/>
              <div className="card-title"><b>Trans Rights</b></div>
            </div></a>
            </div>


            <div className="col-md-3">
            <a href="/FLANNELMEETUP"><div className="card">
              <img src="http://placehold.it/250x250" alt="Placeholder" className="card-img"/>
              <div className="card-title"><b>Boston Flannel Meetup</b></div>
            </div></a>
            </div>


          </div>
          <div className="row">


            <div className="col-md-3">

            <a href="/PRIDE"><div className="card">
              <img src="http://placehold.it/250x250" alt="Placeholder" className="card-img"/>
              <div className="card-title"><b>Pride</b></div>
            </div></a>
            </div>




          </div>



        </div>
      </div>
  );

  }
}

export default Groups;
