
export const spacex_launches = (state = {value :null},action) => {
    if(action.type === 'SPACEX/LAUNCHES_UPDATED'){
        return {...{value:action.data}}
    }
    return state;
}