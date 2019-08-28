import React, { Component } from 'react';
import './index.css';

function Inbox(props) {
  console.log(props.rooms)


    return (
      <div className="row">
        <div className="col-md-12">

          {props.rooms &&
            props.rooms.map( room =>

            <a href="/">
              <div className="card chatcards">

                <div className="card-title message-title">A Chat Between {room.user1} and {room.user2}</div>
                <div class="card-text message_text">
                  <p> Send A Message </p>


                </div>
              </div>
            </a>
          )
        }



        </div> {/* this is the end of column2*/}
      </div>


    );

}

export default Inbox;
