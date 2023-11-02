import { createContext, useEffect, useState } from "react";
import ContaService from '/src/services/ContaService';
import AuthService from "/src/services/AuthService";

export const AuthContaContext = createContext({});

export const AuthContaProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
      const userToken = localStorage.getItem("userToken");
      if (userToken) {
       let getSession = JSON.parse(localStorage.getItem("userLogin"));
       console.log(getSession);
       setUser(getSession)
      }
    }, []);

    const sessionUser = async (id) => {
      const data = await ContaService.getConta(id);
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem("userLogin", JSON.stringify(data))
      localStorage.setItem("userToken", token)
      setUser(data);
    }

    const signin = async (email, senha) => {
      try {
        const responseLogin = await AuthService.authLoginConta(email, senha);
        if (responseLogin) {
          sessionUser(responseLogin.id);
        } 
      } catch (e) {
        alert("Conta não encontrada!")
        return false;
      }
      return true;
    };
    
      const signup = async (nome, userName, email, senha) => {
        try {
          const responseCadastro = await AuthService.authCadastroConta(nome, userName, email, senha);
          if (responseCadastro) {
            alert("Cadastro realizado com sucesso!")
          }
        } catch(e) {
          alert("Erro ao fazer Cadastro!")
          return false;
        }
        return true;
      };
    
      const signout = () => {
        setUser(null);
        localStorage.removeItem("userToken");
        localStorage.removeItem("userLogin");
      };

    return (
        <AuthContaContext.Provider value={{user, signed: !!user, signin, signup, signout}}>
            {children}
        </AuthContaContext.Provider>
    )
}