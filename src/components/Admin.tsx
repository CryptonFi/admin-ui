import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react';
import '../App.css';
import Header from './Header';
import { ContractsList } from './UserContracts/ContractsList';

function Admin() {
    return (
        <TonConnectUIProvider
            manifestUrl="https://cryptonfi.github.io/ui/tonconnect-manifest.json"
            uiPreferences={{ theme: THEME.LIGHT }}
        >
            <div className="app">
                <Header />
                <div className="main">
                    <div className="xl:w-1/2 lg:w-3/4 md:w-10/12 sm:w-11/12">
                        <ContractsList />
                    </div>
                </div>
            </div>
        </TonConnectUIProvider>
    );
}

export default Admin;
