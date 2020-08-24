

import {getInitialFilterState} from '../API';


const initialState = getInitialFilterState();

export const spacex_filters = (state = {value :initialState},action) => {
    if(action.type === 'SPACEX/LAUNCHES_FILTER_UPDATED'){
        return {...state,...{value:action.data}}
    }
    return state;
}

