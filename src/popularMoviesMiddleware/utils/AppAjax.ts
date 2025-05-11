// libs
import axios from 'axios';

const METHOD_GET = 'GET';

const getHeaders = () => {
  const access_token =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTE1ZjNlNTI3ZjI5Y2ZlM2I1NjhlZGNmNmM1YTZhMiIsIm5iZiI6MS43NDY3ODc2MTcxNTgwMDAyZSs5LCJzdWIiOiI2ODFkZGQyMTMxODNhNjRkZmI5M2IzYWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aGOuyfemo8t0zyH4g7IWmWr7E1ocPUDbH3xxgtGSkqs';
  const headers = {
    Authorization: access_token,
  };
  return headers;
};

export function makeHttpRequest(url: any, method: string) {
  const headers = getHeaders();
  return new Promise((resolve, reject) => {
    try {
      if (!url) {
        reject(new Error('URL not present.'));
      } else {
        let options = {
          method,
          url,
          headers,
        };
        axios(options)
          .then(
            (response) => {
              if (response.status === 200) {
                resolve(response);
              } else {
                reject(response);
              }
            },
          )
          .catch((error: any) => {
            if (error && error.response && error.response.status === 400) {
              resolve(error.response.data);
              return;
            }
            resolve(error);
          });
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function get(url: any) {
  return makeHttpRequest(url, METHOD_GET);
}
