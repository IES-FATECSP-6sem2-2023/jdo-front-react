import { useContext } from "react";
import { TabuleiroContext } from "../contexts/TabuleiroContext";

const useTabuleiro = () => {
    const context = useContext(TabuleiroContext);
    return context;
};

export default useTabuleiro;