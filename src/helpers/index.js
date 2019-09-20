
  export async function makeGetRequest(url = '') {
    return fetch(url, {
      method: 'GET',
      withCredentials: true,
      headers: {
       
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }).then(responceData => {
      return responceData;
    });
  }
  
  export async function makeGetRequestAxios(url = '', params) {
    return axios({
      method: 'get',
      params,
      url,
      headers: {
      
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }).then(function(response) {
      return response;
    });
  }
  
  export async function makePostRequest(url = '', params = {}) {
    return fetch(url, {
      method: 'POST',
      withCredentials: true,
      headers: {
       
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(params),
    });
  }

