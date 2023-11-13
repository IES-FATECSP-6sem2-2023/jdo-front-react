import { AuthContaProvider } from '../contexts/AuthContaContext';
import { TabuleiroProvider } from '../contexts/TabuleiroContext';

const GlobalProvider = ({children}) => {
    return (
        <AuthContaProvider>
            <TabuleiroProvider>
                {children}
            </TabuleiroProvider>
        </AuthContaProvider>
    )
}

export default GlobalProvider