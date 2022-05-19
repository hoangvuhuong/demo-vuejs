import axios from "axios";

export default () => {
  var lang = localStorage.getItem("lang");
  var jwt = localStorage.getItem("jwt");
  // var jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMzY3ODE5MTcxIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.ujIsY8wK37PozZttq-QOxhVj3FdeHUE9WM6z2x0PSBQ';

  if (!lang)
    lang = 'vi';

  let customAxios = axios.create({
    baseURL: process.env.VUE_APP_HOST + ':' + process.env.VUE_APP_PORT + process.env.VUE_APP_CONTEXT_PATH,
    headers: {
      "Accept-Language": lang,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${jwt}`
    },
  });

  customAxios.interceptors.response.use(
    res => res,
    err => {
      const status = err.response?.status || 500;
      switch (status) {
        case 401:
          window.location.href = "/login"
          break;
        case 403:
          window.location.href = "/dashboard"
          break;
        default:
          throw err;
      }
    }
  );
  return customAxios;
};