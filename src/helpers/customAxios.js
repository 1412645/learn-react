import axios from "axios";
import Cookies from "./cookies";

export const JWT_USER = "auth_token";

const customAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // timeout: 100000,
  headers: {},
});

const requestHandler = (request) => {
  const token = Cookies.get(JWT_USER);
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
};

const responseHandler = (response) => {
  // check status code to resole each case
  console.log(response);
  if (response.status === 401) {
    window.location = "/login";
  }

  return response;
};

const errorHandler = (error) => {
  console.log(error);
  // return Promise.reject(error.response);
  // window.location = "/login";
  return error.response;
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;
