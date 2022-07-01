import customAxios from "./customAxios";

const fetchApi = (url, method, data = {}, params, headers = {}) => {
  return customAxios({
    url,
    method,
    data,
    params,
    headers,
  });
};

export default fetchApi;
