import axios from "axios";
import React from "react";
import { logoutService } from "../../../features/login/services/logout";
import { useAuth } from "../../hooks/useAuth";
import useFetch from "../../hooks/useFetch";

const Nav = () => {
  const { logout } = useAuth();

  const { data, error, isLoading, setCanFetch } = useFetch(
    logoutService,
    false
  );

  const testInterceptor = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users", {
        withCredentials: true,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav style={navStyle}>
      <ul>
        <li>Home</li>
      </ul>

      <button
        onClick={() => {
          setCanFetch(true);
          logout();
        }}
      >
        Logout
      </button>

      <button onClick={testInterceptor}>test interceptor</button>
    </nav>
  );
};

export default Nav;

const navStyle = {
  display: "flex",
  height: "50px",
  background: "red",
  width: "100%",
};
