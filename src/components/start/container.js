import {connect} from 'react-redux'
import StartGame from './startGame'
import {startGame, fetchUserRef, gamesFlag} from "../../actions/setShip";
import {fetchOpponentsShots} from "../../actions/shot";

const mapStateToProps = state => {
  return {
    field: state.setShipReducer.field,
    opponentsField: state.setShipReducer.opponentsField,
    flag: state.setShipReducer.flag,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onStartGame: (shipsCells) => {
      dispatch(startGame(shipsCells))
    },
    onFetchUserRef: (ref) => {
      dispatch(fetchUserRef(ref))
    },
    onChangeFlag: (flag) => {
      dispatch(gamesFlag(flag))
    },
    onFetchOpponentsShots: (field) => {
      dispatch(fetchOpponentsShots(field))
    }
  }
};

const StartGameContainer = connect(
 mapStateToProps,
 mapDispatchToProps
)(StartGame);

export default StartGameContainer;
