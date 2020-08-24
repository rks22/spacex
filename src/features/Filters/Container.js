import { connect } from 'react-redux';
import { selectLaunchesFilters} from './REDUX/Selectors';
import {Filters} from './index';
import {requestLaunches} from '../Launches/REDUX/Actions';


export const mapStateToProps = state => {
  return {
    filters: selectLaunchesFilters(state)
  };
};

export const mapDispatchToProps = {
    requestLaunches
};
  


export const FiltersContainer = connect(
  mapStateToProps,mapDispatchToProps
)(Filters);
