import { AUTHAPI } from "../../../config/AUTH";

export const logoutService = async () => {
  const res = await AUTHAPI.api.post(AUTHAPI.paths.logout);
  return res.data;
};
