import axios from "axios";
import Cookies from "../helpers/cookies";
export const JWT_USER = "auth_token";

const getClient = (url, header) => {
  // const requestHeader = JSON.parse(JSON.stringify(header));
  const token = Cookies.get(JWT_USER);

  const options = {
    baseURL: url,
    headers: JSON.parse(JSON.stringify(header)),
  };

  if (token) {
    options.headers["Authorization"] = `Bearer ${token}`;
  }

  const client = axios.create(options);

  // Add a request interceptor
  client.interceptors.request.use(
    (requestConfig) => requestConfig,
    (requestError) => {
      console.log("requestError: ", requestError);
      return Promise.reject(requestError);
    }
  );

  // Add a response interceptor
  client.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log("error: ", error);
      return Promise.reject(error);
    }
  );

  return client;
};

// const fetchApi = (url, method, body = {}, params, header = {}) => {
//   // get token at cookie
//   const requestHeader = JSON.parse(JSON.stringify(header));
//   const token = Cookies.get(JWT_USER);

//   // add Bearer token
//   if (token) {
//     requestHeader["Authorization"] = `Bearer ${token}`;
//   }

//   // add param request

//   const result = axios.interceptors.request.use(
//     function (config) {
//       // console.log("aaaaa");
//       // Do something before request is sent
//       return config;
//     },
//     function (error) {
//       // Do something with request error
//       return Promise.reject(error);
//     }
//   );

//   // Add a response interceptor
//   axios.interceptors.response.use(
//     function (response) {
//       // Any status code that lie within the range of 2xx cause this function to trigger
//       // Do something with response data
//       console.log("response: ", response);
//       return response;
//     },
//     function (error) {
//       // Any status codes that falls outside the range of 2xx cause this function to trigger
//       // Do something with response error
//       return Promise.reject(error);
//     }
//   );

//   console.log("result: ", result);

//   return axios({
//     method: method,
//     url: url,
//     data: body,
//     headers: requestHeader,
//   });
// };

const fetchApi = (url, method, body = {}, params, header = {}) => {
  const clientApi = getClient(url, header);

  return clientApi({
    method: method,
    data: body,
  });
};

export default fetchApi;
