


import {get} from './HTTP';

export const LAUNCHES_URL = 'https://api.spaceXdata.com/v3/launches';



export const getLaunches = (reqParams) => {
  return get(LAUNCHES_URL, reqParams)
    .then((response) => response)
    .catch((error) =>
      ({ error: `${error.message}.Please try after some time.` })
    );
};
