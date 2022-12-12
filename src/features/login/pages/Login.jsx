import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../common/hooks/useAuth";
import useFetch from "../../../common/hooks/useFetch";
import useForm from "../../../common/hooks/useForm";
import { loginService } from "../services/login";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    data: form,
    handleChange,
    handleSubmit,
  } = useForm({
    email: "",
    password: "",
  });

  const { data, isLoading, error, setCanFetch } = useFetch(
    () => loginService(form.email, form.password),
    false
  );

  const onSubmited = async () => {
    setCanFetch(true);
  };

  useEffect(() => {
    if (data.user) {
      login(data.user);
      navigate("/", {
        replace: true,
      });
    }
  }, [data]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e, onSubmited);
        }}
      >
        <input
          type="text"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          id="password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      {isLoading && <p>Cargando...</p>}
      {error && <p>{JSON.stringify(error.message)}</p>}
    </div>
  );
};

export default Login;
