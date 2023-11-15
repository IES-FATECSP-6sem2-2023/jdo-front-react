import { AuthContaProvider } from '../contexts/AuthContaContext';
import { SomAmbienteProvider } from '../contexts/SomAmbienteContext';
import { TabuleiroProvider } from '../contexts/TabuleiroContext';

const GlobalProvider = ({children}) => {
    return (
        <AuthContaProvider>
            <SomAmbienteProvider>
                <TabuleiroProvider>
                    {children}
                </TabuleiroProvider>
            </SomAmbienteProvider>
        </AuthContaProvider>
    )
}

export default GlobalProvider