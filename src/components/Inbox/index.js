import React, { Component } from 'react';
import './index.css';


function store(room, user2, user1){

  let username = localStorage.getItem('username')
  localStorage.setItem('observableroom', room)

  if (username == user2) {
    localStorage.setItem('user2', user1)
  } else {
      localStorage.setItem('user2', user2)
  }




}

function Inbox(props) {
  console.log(props.rooms)

  // localStorage.setItem("oldreciever", props.room)



    return (
      <div className="row">
        <div className="col-md-12">

          {props.rooms &&
            props.rooms.map( room =>



            <a href="/OldMessage" onClick={()=> //localStorage.setItem('observableroom', room.room)
            store(room.room, room.user2, room.user1)
            }>
              <div className="card chatcards">

                <div className="card-title message-title">A Chat Between {room.user1} and {room.user2}</div>
                <div class="card-text message_text">
                  <p> Send A Message</p>


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
