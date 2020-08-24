

export const namespace = 'SPACEX/LAUNCHES_FILTER'


export const createFilterAction = (status,data) => {
    let action = {
        type:`${namespace}_${status}`,
        data
    };
    return action;
}