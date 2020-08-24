

export const namespace = 'SPACEX/LAUNCHES'

export const requestLaunches = data => ({
    type: `${namespace}_REQUEST`,
    data
})


export const createAction = (status,data) => {
    let action = {
        type:`${namespace}_${status}`,
        data
    };
    return action;
}