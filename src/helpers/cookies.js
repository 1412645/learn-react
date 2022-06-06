import JsCookies from "js-cookie";

const Cookies = {
  get(key) {
    return JsCookies.get(key);
  },
  remove(key) {
    return JsCookies.remove(key);
  },
};

export default Cookies;
