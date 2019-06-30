import React, {Component} from 'react';
import {db} from "../../base";

class StartGame extends Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
  }

  start() {
    let userListRef = db.ref('session').child('users');
    let newUserRef = userListRef.push();
    let postId = newUserRef.key;
    newUserRef.set({ships: this.props.field});

    fetchOpponentsKey(postId, this.props);


    function fetchOpponentsKey(postId, props) {
      db.ref('session').once('value').then((snapshot) => {
        let allUsers;
        let opponent;

        allUsers = (snapshot.val()).users || 'Anonymous';
        for (let user in allUsers) {
          if (user !== postId) {
            opponent = user;
          }
        }
        if (opponent === undefined) {
          fetchOpponentsKey(postId, props);
        } else {
          fetchOpponentsShips(opponent, props);
          fetchOpponentsShots(opponent, props);
        }
      });
    }

    function fetchOpponentsShips(opponentsKey, props) {
      db.ref("session").child("users").child("" + opponentsKey).once('value').then(function (snapshot) {
        if(snapshot.val().ships !== undefined){
          // console.log(snapshot.val().ships)
          props.onStartGame(snapshot.val().ships)
        }
      });
    }

    function fetchOpponentsShots() {

    }
  }

  render() {
    return (
     <div style={{width: "10%"}}>
       <button onClick={() => {
         this.start()
       }} style={{width: "100%"}}>START
       </button>
     </div>
    );
  }
}

export default StartGame;