import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";

export const useAuth = () => {
  const { login, logout, user, isAuth } = useContext(AuthContext);
  return { login, logout, user, isAuth };
};
