import { createContext, useEffect, useState } from "react";

export const SomAmbienteContext = createContext({});

export const SomAmbienteProvider = ({ children }) => {
    const [musicaDeFundo, setMusicaDeFundo] = useState(new Audio('/assets/sons/ambiente/ambiente2.wav'));
    const [musicaStatus, setMusicaStatus] = useState(false);

    const toggleMusica = () => {
        if (!musicaStatus) {
            musicaDeFundo.loop = true;
            musicaDeFundo.volume = .5;
            musicaDeFundo.play();
        } else {
            musicaDeFundo.pause();
        }
        setMusicaStatus(!musicaStatus);
    }

    useEffect(() => {
        toggleMusica()
    }, [])

    return (
        <SomAmbienteContext.Provider value={{toggleMusica, musicaStatus}}>
            {children}
        </SomAmbienteContext.Provider>
    )
}