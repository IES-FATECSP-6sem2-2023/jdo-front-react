import { AuthContaProvider } from '../contexts/AuthContaContext';

const GlobalProvider = ({children}) => {
    return (
        <AuthContaProvider>
            {children}
        </AuthContaProvider>
    )
}

export default GlobalProvider