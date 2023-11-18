import { SomAmbienteProvider } from '../contexts/SomAmbienteContext';
import { TabuleiroProvider } from '../contexts/TabuleiroContext';

const GlobalProvider = ({children}) => {
    return (
        
            <SomAmbienteProvider>
                <TabuleiroProvider>
                    {children}
                </TabuleiroProvider>
            </SomAmbienteProvider>
        
    )
}

export default GlobalProvider