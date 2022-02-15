import React, { useState, useContext, createContext, useEffect } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setuser] = useState(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();
    const { "nextauth.user_session": user } = parseCookies();

    if (token) {
      api.get(`/user/${user}`).then((res) => {
        setuser(res.data);
      });
    }
  }, []);

  async function authenticat({ email, password }) {
    const response = await api.post("/login", { email, password });

    setCookie(undefined, "nextauth.token", response.data.token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    setCookie(undefined, "nextauth.user_session", response.data._id, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
    setuser(response.data);
    Router.push("/dashboard");
    
  }

  function logOut() {
    setuser(null);
    destroyCookie(null, "nextauth.token");
    destroyCookie(null, "nextauth.user_session");
    Router.push("/");
  }
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, authenticat, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
