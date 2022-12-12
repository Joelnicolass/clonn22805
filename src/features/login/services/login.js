import { AUTHAPI } from "../../../config/AUTH";

export const loginService = async (email, password) => {
  const res = await AUTHAPI.api.post(AUTHAPI.paths.login, { email, password });
  return res.data;
};
