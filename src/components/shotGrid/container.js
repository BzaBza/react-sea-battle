import {connect} from 'react-redux'
import ShotGrid from "./shotGrid";
import {shot} from "../../actions/shot";

const mapStateToProps = state => {
  return {
    field: state.setShipReducer.field,
    opponentsField: state.setShipReducer.opponentsField,
    shots: state.shotReducer.shots,
    userRef: state.setShipReducer.userRef,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onShot: (field) => {
      dispatch(shot(field))
    }
  }
};

const ShotGridContainer = connect(
 mapStateToProps,
 mapDispatchToProps
)(ShotGrid);

export default ShotGridContainer;
