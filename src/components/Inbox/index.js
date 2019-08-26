import React, { Component } from 'react';
import './index.css';

class Inbox extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-12">

          <div className="card">

            <div className="card-title message-title">Lost In Detroit</div>
            <div className="card-subtitle message-subtitle">January 18, 2019</div>
            <div class="card-text message_text">
              <p> Hi Test! I wanted to reachout with you and see if you would be willing to share your experieces.</p>


            </div>
          </div>

        </div> {/* this is the end of column2*/}
      </div>


    );
  }
}

export default Inbox;
