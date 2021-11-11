import axios from "axios";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router";

interface UserProvider {
  singup: (userData: userData) => void;
  singin: (userData: userData) => void;
  token: string;
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  catalogue: any;
}
interface UserProps {
  children: ReactNode;
}
interface userData {
  name?: string;
  password?: string;
  email?: string;
  age?: number;
}
export const LoginContext = createContext<UserProvider>({} as UserProvider);
interface infos {
  user: any;
  accessToken: string;
}
export const LoginProvider = ({ children }: UserProps) => {
  const [token, setToken] = useState("");
  const [auth, setAuth] = useState(false);
  const history = useHistory();
  const [catalogue, setCatalogue] = useState([]);
  const singup = (userData: userData) => {
    axios
      .post<infos>(
        "https://server-json-hamburgueria.herokuapp.com/register",
        userData
      )
      .then((response) => console.log(response));
  };
  const singin = (userData: userData) => {
    axios
      .post<infos>(
        "https://server-json-hamburgueria.herokuapp.com/login",
        userData
      )
      .then((response) => {
        setToken(response.data.accessToken);
        localStorage.setItem(
          "@BurguerKenzie:Token",
          JSON.stringify(response.data.accessToken)
        );
      })
      .then((_) => {
        setAuth(true);
        localStorage.setItem("@BurguerKenzie:Auth", JSON.stringify(true));
        history.push("/Home");
      });
    axios
      .get("https://server-json-hamburgueria.herokuapp.com/catalogue")
      .then((response) => {
        setCatalogue(response.data);
        localStorage.setItem(
          "@BurguerKenzie:Catalogue",
          JSON.stringify(response.data)
        );
      });
  };
  return (
    <LoginContext.Provider
      value={{ singup, singin, token, auth, setAuth, catalogue }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export const useLogin = () => useContext(LoginContext);
