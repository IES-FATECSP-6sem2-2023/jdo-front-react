import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import AuthService from "/src/services/AuthService";
import ContaService from '/src/services/ContaService';

export const AuthContaContext = createContext({});

export const AuthContaProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const userToken = localStorage.getItem("userToken");
      if (userToken) {
        let getSession = JSON.parse(localStorage.getItem("userLogin"));
        setUser(getSession)
      }
    }, []);

    const atualizaUser = async (id) => {
      try {
          const data = await ContaService.getConta(id);
          const token = Math.random().toString(36).substring(2);
          localStorage.setItem("userLogin", JSON.stringify(data));
          localStorage.setItem("userToken", token);
          setUser(data);
      } catch (error) {
          console.error(error);
          toast.error("Erro ao salvar informações!\nTente novamente!");
          throw error;
      }
  };
  

    const signin = async (email, senha) => {
      try {
        const responseLogin = await AuthService.authLoginConta(email, senha);
        atualizaUser(responseLogin.id);
        toast.success("Login realizado com sucesso!");
        return true;
      } catch (error) {
        console.error(error);
        toast.error("E-mail ou Senha inválidos!");
        return false;
      }
    };
    
    const signup = async (nome, userName, email, senha) => {
      try {
        const responseCadastro = await AuthService.authCadastroConta(nome, userName, email, senha);
        if (responseCadastro) {
          toast.success("Cadastro realizado com sucesso!");
          return true;
        }
      } catch (error) {
        console.error(error);
        toast.error("User ou E-mail já existente!");
        return false;
      }
    };
    
    const signout = () => {
      setUser(null);
      localStorage.removeItem("userToken");
      localStorage.removeItem("userLogin");
    };

    return (
      <AuthContaContext.Provider value={{user, signed: !!user, atualizaUser, signin, signup, signout}}>
        {children}
      </AuthContaContext.Provider>
    )
}