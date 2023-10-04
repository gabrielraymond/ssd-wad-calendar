type API_PROPS = {
  [key: string]: string;
};

const API_URL: API_PROPS = {
  LOCAL: "http://localhost:4000/api",
  DEV: "http://localhost:4000/api",
  PROD: "http://localhost:4000/api",
};

// authentication
const LOGIN = "/user/login";

export { API_URL, LOGIN };
