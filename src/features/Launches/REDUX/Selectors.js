
import {createSelector} from 'reselect';

export const selectLaunces = createSelector(
    state => state.spacex_launches,
    data  => data.value 
) 