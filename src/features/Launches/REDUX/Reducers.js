
export const spacex_launches = (state = {value :null},action) => {
    if(action.type === 'SPACEX/LAUNCHES_UPDATED'){
        return {...{value:action.data}}
    }
    return state;
}

export const spacex_launches_loading = (state = {value :false},action) => {
    if(action.type === 'SPACEX/LAUNCHES_LOADING'){
        return {...{value:action.data}}
    }
    return state;
}