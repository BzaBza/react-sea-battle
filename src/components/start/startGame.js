import React, {Component} from 'react';
import {db} from "../../base";

class StartGame extends Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
  }

  start() {
    this.props.onChangeFlag(!this.props.flag)
    let userListRef = db.ref('session').child('users');
    let newUserRef = userListRef.push();
    let postId = newUserRef.key;
    newUserRef.set({ships: this.props.field});
    newUserRef.update({shots: ""});
    this.props.onFetchUserRef(postId);
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

    function fetchOpponentsShots(opponent,props) {
      userListRef.child("" + opponent).child("shots").on('child_changed', function(childSnapshot, prevChildKey) {
        console.log(childSnapshot, "childSnapshot", prevChildKey, "prevChildKey")
      });
    }
  }

  render() {
    return (
     <div style={{width: "10%"}}>
       <button disabled={this.props.flag} onClick={() => {
         this.start()
       }} style={{width: "100%"}}>START
       </button>
     </div>
    );
  }
}

export default StartGame;