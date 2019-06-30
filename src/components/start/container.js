import {connect} from 'react-redux'
import StartGame from './startGame'
import {startGame} from "../../actions/setShip";

const mapStateToProps = state => {
  return {
    field: state.setShipReducer.field,
    opponentsField: state.setShipReducer.opponentsField,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onStartGame: (shipsCells) => {
      dispatch(startGame(shipsCells))
    }
  }
};

const StartGameContainer = connect(
 mapStateToProps,
 mapDispatchToProps
)(StartGame);

export default StartGameContainer;
