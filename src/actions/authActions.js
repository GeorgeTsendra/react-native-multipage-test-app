import {
    AUTHUSERNAME,
    AUTHPASSWORD,
    Authentication,
    logout,
    loginedSuccess,
  } from '../constants/redux';

import {
    makeGetRequest,
    } from '../helpers'

import {
  APIkey,
  SharedSecret,
} from '../constants/general'

  export const setAuthUsername = payload => ({
    type: AUTHUSERNAME,
    payload,
  });

  export const setAuthPass = payload => ({
    type: AUTHPASSWORD,
    payload,
  });

  export const loginSuccess = () => ({
    type: loginedSuccess,
  });

  export const logoutSuccess = () => ({
    type: logout,
  });


  
  // export function authentication() {
  //   const ulrhendler = `http://www.last.fm/api/auth/?api_key=${APIkey}`;
  
  //   return dispatch => {
  //     return makeGetRequest(`${ulrhendler}`)
  //       .then(async responseData => {
  //         if (responseData.status !== 200) {
  //           throw new Error(responseData.statusText);
  //         } else {
  //           try {
  //             return await responseData;
  //           } catch (e) {
  //             return new Promise((res, rej) => {
  //               if (e.message === 'Unexpected end of JSON input') {
  //                 res(e);
  //               } else {
  //                 rej(e);
  //               }
  //             });
  //           }
  //         }
  //       })
  //       .then(response => {
  //         return dispatch({
  //           type: Authentication,
  //           payload: response,
  //         });
  //       })
  //       .catch(err => {
  //         console.error(err);
  //       });
  //   };
  // }
  