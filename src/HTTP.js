
// @flow 


const __checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  };
  
  const __parseJSON = response => {
    return response.json();
  };

  const __parseParamsToQuery = params => {
    if (!params) return '';
    return (
      '?' +
      Object.keys(params)
        .map(key => key + '=' + encodeURI(params[key]))
        .join('&')
    );
  };

  export const get = (url, params) => {
    const queryString = __parseParamsToQuery(params);
    return fetch(`${url}${queryString}`)
      .then(__checkStatus)
      .then(__parseJSON);
  };