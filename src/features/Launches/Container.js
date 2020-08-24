import { connect } from 'react-redux';
import { selectLaunces} from './REDUX/Selectors';
import {Launches} from './';
import {requestLaunches} from './REDUX/Actions';


export const mapStateToProps = state => {
  return {
    launches: selectLaunces(state)
  };
};

export const mapDispatchToProps = {
  requestLaunches
};
  


export const LaunchesContainer = connect(
  mapStateToProps,mapDispatchToProps
)(Launches);
