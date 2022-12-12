import React, { useReducer } from 'react';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const authInitialState = {
  user: null,
  isAuth: false,
};

export const AUTH_TYPES = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_TYPES.LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };

    case AUTH_TYPES.LOGOUT:
      return {
        ...state,
        user: null,
        isAuth: false,
      };

    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, authInitialState);

  const login = user => {
    localStorage.setItem(
      'auth',
      JSON.stringify({
        user,
        isAuth: true,
      }),
    );

    dispatch({
      type: 'LOGIN',
      payload: user,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const { state, login } = useContext(AuthContext);
  return { state, login };
};
