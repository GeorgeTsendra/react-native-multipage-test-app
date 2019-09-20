import {
    pageData, changeTab
  } from '../constants/redux';

import {
    makeGetRequest,
  } from '../helpers'

import {
    NewsAPIkey,
  } from '../constants/general'

  export const setActiveNav = payload => ({
    type: changeTab,
    payload,
  });


  export function getBictoinsData() {
    const ulrhendler = `https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-17&sortBy=publishedAt&apiKey=${NewsAPIkey}`;
  
    return dispatch => {
      return makeGetRequest(`${ulrhendler}`)
        .then(async responseData => {
          if (responseData.status !== 200) {
            throw new Error(responseData.statusText);
          } else {
            try {
              return await responseData;
            } catch (e) {
              return new Promise((res, rej) => {
                if (e.message === 'Unexpected end of JSON input') {
                  res(e);
                } else {
                  rej(e);
                }
              });
            }
          }
        })
        .then(res => res.json())
        .then(response => {
          return dispatch({
            type: pageData,
            payload: response,
          });
        })
        .catch(err => {
          console.error(err);
        });
    };
  }


  export function getBusinessData() {
    const ulrhendler = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NewsAPIkey}`;
  
    return dispatch => {
      return makeGetRequest(`${ulrhendler}`)
        .then(async responseData => {
          if (responseData.status !== 200) {
            throw new Error(responseData.statusText);
          } else {
            try {
              return await responseData;
            } catch (e) {
              return new Promise((res, rej) => {
                if (e.message === 'Unexpected end of JSON input') {
                  res(e);
                } else {
                  rej(e);
                }
              });
            }
          }
        })
        .then(res => res.json())
        .then(response => {
          return dispatch({
            type: pageData,
            payload: response,
          });
        })
        .catch(err => {
          console.error(err);
        });
    };
  }

  export function getAppleData() {
    const ulrhendler = `https://newsapi.org/v2/everything?q=apple&from=2019-05-16&to=2019-05-16&sortBy=popularity&apiKey=${NewsAPIkey}`;
  
    return dispatch => {
      return makeGetRequest(`${ulrhendler}`)
        .then(async responseData => {
          if (responseData.status !== 200) {
            throw new Error(responseData.statusText);
          } else {
            try {
              return await responseData;
            } catch (e) {
              return new Promise((res, rej) => {
                if (e.message === 'Unexpected end of JSON input') {
                  res(e);
                } else {
                  rej(e);
                }
              });
            }
          }
        })
        .then(res => res.json())
        .then(response => {
          return dispatch({
            type: pageData,
            payload: response,
          });
        })
        .catch(err => {
          console.error(err);
        });
    };
  }


  export function getTechCrunchData() {
    const ulrhendler = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${NewsAPIkey}`;
  
    return dispatch => {
      return makeGetRequest(`${ulrhendler}`)
        .then(async responseData => {
          if (responseData.status !== 200) {
            throw new Error(responseData.statusText);
          } else {
            try {
              return await responseData;
            } catch (e) {
              return new Promise((res, rej) => {
                if (e.message === 'Unexpected end of JSON input') {
                  res(e);
                } else {
                  rej(e);
                }
              });
            }
          }
        })
        .then(res => res.json())
        .then(response => {
          return dispatch({
            type: pageData,
            payload: response,
          });
        })
        .catch(err => {
          console.error(err);
        });
    };
  }

  export function getWallStreetData() {
    const ulrhendler = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${NewsAPIkey}`;
  
    return dispatch => {
      return makeGetRequest(`${ulrhendler}`)
        .then(async responseData => {
          if (responseData.status !== 200) {
            throw new Error(responseData.statusText);
          } else {
            try {
              return await responseData;
            } catch (e) {
              return new Promise((res, rej) => {
                if (e.message === 'Unexpected end of JSON input') {
                  res(e);
                } else {
                  rej(e);
                }
              });
            }
          }
        })
        .then(res => res.json())
        .then(response => {
          return dispatch({
            type: pageData,
            payload: response,
          });
        })
        .catch(err => {
          console.error(err);
        });
    };
  }