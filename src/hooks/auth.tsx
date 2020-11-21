import React, { createContext, useState, useContext } from "react";
import { Router } from "react-router-dom";

import Swal from "sweetalert2";

interface IAuthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@minha-carteira:logged");

    return !!isLogged;
  });

  function openAlert() {
    Swal.fire(
      "Oops..",
      "Confira se seu e-mail ou senha estão corretos ",
      "error"
    );
  }

  function signIn(email: string, password: string) {
    if (email === "teste@teste.com" && password === "123456") {
      localStorage.setItem("@minha-carteira:logged", "true");
      setLogged(true);
    } else {
      openAlert();
    }
  }

  function signOut() {
    localStorage.removeItem("@minha-carteira:logged");
    setLogged(false);
  }

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
