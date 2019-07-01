import React, {Component} from 'react';
import {db} from "../../base";

class StartGame extends Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    StartGame.finish = StartGame.finish.bind(this);
  }

  start() {
    function initGame(currentGameId, props) {
      let usersRef = db.ref(`session/open/${currentGameId}/users`);
      usersRef.once('value', (snapshot) => {
        if (snapshot.val() === undefined || snapshot.val() === null || Object.keys(snapshot.val()).length < 2) {
          let newUser = usersRef.push();
          let postId = newUser.key;
          usersRef.child(`${postId}`).set({ships: props.field});
          usersRef.child(`${postId}`).update({shots: ""});
          props.onFetchUserRef(postId);
          fetchOpponentsKey(postId, props, usersRef, currentGameId);
        }
      });
    }

    this.props.onChangeFlag(!this.props.flag);

    db.ref('session/open').once('value', (snapshot) => {
      if (snapshot.exists()) {
        let currentGameId = Object.keys(snapshot.val())[0];
        initGame(currentGameId, this.props);
      } else {
        let newGame = db.ref(`session/open`).push();
        let currentGameId = newGame.key;
        initGame(currentGameId, this.props)
      }
    });

    function fetchOpponentsKey(postId, props, usersRef, currentGameId) {
      db.ref(`session/open/${currentGameId}/users`).once('value').then((snapshot) => {
        let allUsers;
        let opponent;

        allUsers = (snapshot.val()) || 'Anonymous';
        for (let user in allUsers) {
          if (user !== postId) {
            opponent = user;
          }
        }
        if (opponent === undefined) {
          fetchOpponentsKey(postId, props, usersRef, currentGameId);
        } else {
          fetchOpponentsShips(opponent, props, usersRef);
          fetchOpponentsShots(opponent, usersRef, props);
        }
      });
    }

    function fetchOpponentsShips(opponentsKey, props, usersRef) {
      usersRef.child(`${opponentsKey}`).once('value').then(function (snapshot) {
        if (snapshot.val().ships !== undefined) {
          props.onStartGame(snapshot.val().ships)
        }
      });
    }

    function fetchOpponentsShots(opponent, usersRef, props) {
      usersRef.child(`${opponent}/shots`).on('value', function (snapshot) {
        console.log(Object.values(snapshot.val()), "snapshot.val()");
        props.onFetchOpponentsShots(Object.values(snapshot.val()))
      });
    }
  }

  static finish() {
    db.ref(`session/open`).remove();
  }

  render() {
    return (
     <div style={{width: "10%"}}>
       <button disabled={this.props.flag} onClick={() => {
         this.start()
       }} style={{width: "100%"}}>START
       </button>
       <button onClick={() => {
         StartGame.finish()
       }} style={{width: "100%"}}>FINISH
       </button>
     </div>
    );
  }
}

export default StartGame;