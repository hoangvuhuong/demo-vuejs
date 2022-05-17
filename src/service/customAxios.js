import axios from "axios";
import AuthenService from "./AuthenService";
import Utils from "@/utils/Utils";

export default (isPublic = false) => {
  let baseURL =
    process.env.VUE_APP_HOST +
    ":" +
    process.env.VUE_APP_PORT +
    process.env.VUE_APP_CONTEXT_PATH;
  let lang = localStorage.getItem("lang");
  if (!lang) lang = "vi";
  let headers = {
    "Accept-Language": lang,
    Accept: "application/json, application/pdf",
    "Content-Type": "application/json",
  };
  if (isPublic) {
    return axios.create({
      baseURL,
      headers,
    });
  }
  let refreshToken = Utils.getRefreshToken();

  let customAxios = axios.create({
    baseURL,
    headers,
  });

  customAxios.interceptors.request.use(
    (config) => {
      const accessToken = Utils.getAccessToken();
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  customAxios.interceptors.response.use(
    (res) => res,
    async (err) => {
      const originalConfig = err.config;
      const status = err.response?.status || 500;
      if (status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          let res = await AuthenService.refreshToken({
            refreshToken: refreshToken,
          });
          let accessToken = res.data?.data?.accessToken;
          Utils.setAccessToken(accessToken);
        } catch (error) {
          localStorage.clear();
          throw err;
        }
        return customAxios(originalConfig);
      }
      throw err;
    }
  );
  return customAxios;
};
