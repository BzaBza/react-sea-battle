import {connect} from 'react-redux'
import Grid from './grid'

const mapStateToProps = state => {
  return {
    ships: state.setShipReducer.ships,
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
