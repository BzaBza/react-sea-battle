import {connect} from 'react-redux'
import Grid from '../grid/grid'

const mapStateToProps = state => {
  return {
    field: state.setShipReducer.field,
    opponentsShots: state.shotReducer.opponentsShots,
  }
};
const mapDispatchToProps = dispatch => {
  return {
  }
};

const GridContainer = connect(
 mapStateToProps,
 mapDispatchToProps
)(Grid);

export default GridContainer;
