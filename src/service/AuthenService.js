import customAxios from "./customAxios";

export default {
  authentication(params) {
    return customAxios(true).get("/auth/authen", { params });
  },
  refreshToken(body) {
    return customAxios(true).post("/auth/refreshToken", { ...body });
  },
};
