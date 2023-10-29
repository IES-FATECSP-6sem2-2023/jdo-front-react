import { createContext, useEffect, useState } from "react";
import AuthService from "/src/services/AuthService";

export const AuthContaContext = createContext({});

export const AuthContaProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_bd");
    
        if (userToken && usersStorage) {
          const hasUser = JSON.parse(usersStorage)?.filter(
            (user) => user.email === JSON.parse(userToken).email
          );
    
          if (hasUser) setUser(hasUser[0]);
        }
      }, []);

      const signin = (email, senha) => {
        const response = AuthService.authLoginConta(email, senha);
        return response;
      };
    
      const signup = (nome, userName, email, senha) => {
        const response = AuthService.authCadastroConta(nome, userName, email, senha);
        return response;
      };
    
      const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
      };

    return (
        <AuthContaContext.Provider value={{user, signin, signup, signout}}>
            {children}
        </AuthContaContext.Provider>
    )
}