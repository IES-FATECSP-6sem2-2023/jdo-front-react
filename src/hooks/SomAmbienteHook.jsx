import { useContext } from "react";
import { SomAmbienteContext } from "../contexts/SomAmbienteContext";

const useSomAmbiente = () => {
    const context = useContext(SomAmbienteContext);
    return context;
};

export default useSomAmbiente;