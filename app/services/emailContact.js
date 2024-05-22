import axiosConfig from "./axiosConfig";
import config from "./config.json";

export const postContactEmail = (values) => {
  return axiosConfig.post(`${config.local}/api/contactEmail`, values);
};
