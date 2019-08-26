import React, { Component } from 'react';
import './index.css';

class Home extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h1>LGBTQA+ MENTORS</h1>
            <div clasName="row">
              <img src='http://placehold.it/1000x250/' title='main' className='frontimgs'/>
            </div>
            <div className="row">


              <img src='http://placehold.it/500x250/' title='2ndrowimg' className='secondrow col-md-8'/>
              <p className='secondrow col-md-4'> This site is dedicated to matching the appropriate mentors with the right mentees. The LGBTQA+ community would like to connect with those with similar experiences. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quia modi, dolorum, recusandae blanditiis omnis ea, accusamus laudantium eaque ut eum voluptatibus odio eos. Aliquid tempora consectetur animi velit, architecto.</p>

            </div>

            <div className="row">


              <img src='http://placehold.it/300x300/' title='2ndrowimg' className='secondrow col-md-4'/>
              <img src='http://placehold.it/300x300/' title='2ndrowimg' className='secondrow col-md-4'/>
              <img src='http://placehold.it/300x300/' title='2ndrowimg' className='secondrow col-md-4'/>

            </div>


            </div>
          </div>
      </div>
    );
  }
}

export default Home;
