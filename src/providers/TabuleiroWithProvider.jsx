import { TabuleiroProvider } from '../contexts/TabuleiroContext';
import Tabuleiro from '../componentes/tabuleiro/Tabuleiro';

const TabuleiroWithProvider = ({ musicaAtiva, toggleMusica }) => {
    return (
        <TabuleiroProvider>
            <Tabuleiro musicaAtiva={musicaAtiva} toggleMusica={toggleMusica} />
        </TabuleiroProvider>
    )
}

export default TabuleiroWithProvider