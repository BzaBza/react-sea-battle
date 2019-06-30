import {connect} from 'react-redux'
import SetShips from './setShips'
import { setShips } from "../../actions/setShip";

const mapStateToProps = state => {
  return {
    field: state.setShipReducer.field,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onSetShips: (field) => {
      dispatch(setShips(field))
    }
  }
};

const SetShipsContainer = connect(
 mapStateToProps,
 mapDispatchToProps
)(SetShips);

export default SetShipsContainer;
