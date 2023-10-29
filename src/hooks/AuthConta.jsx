import { useContext } from "react";
import { AuthContaContext } from "../contexts/AuthContaContext";

const useAuthConta = () => {
    const context = useContext(AuthContaContext);
    return context;
};

export default useAuthConta;