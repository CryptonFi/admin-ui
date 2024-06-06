import { FC, useState } from 'react';
import { MINTABLE_ADDRESSES } from '../api/config';
import { Address, toNano } from '@ton/core';
import { useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';
import { MintToken } from '../api/mint';

interface MintProps {}

const Mint: FC<MintProps> = ({}) => {
    const [jettonType, setJettonType] = useState<string | undefined>();
    const [tonConnectUI] = useTonConnectUI();
    const userAddress = useTonAddress();

    const onClick = () => {
        if (jettonType && userAddress) {
            const jettonAddr = Address.parse(MINTABLE_ADDRESSES[jettonType]);
            MintToken(tonConnectUI, jettonAddr, Address.parse(userAddress), toNano(10))
                .then(() => console.log('successfully sent transaction'))
                .catch(console.error);
        }
    };

    return (
        <div className="flex flex-col my-10 mx-5">
            <h1 className="text-2xl mb-2">Mint testnet tokens</h1>
            <select
                id="jetton"
                name="jetton"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onChange={(e) => setJettonType(e.target.value)}
            >
                {Object.keys(MINTABLE_ADDRESSES).map((i) => (
                    <option key={i} value={i}>
                        {i}
                    </option>
                ))}
            </select>
            <button
                onClick={onClick}
                className={`mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
            >
                Mint 10 Jettons
            </button>
        </div>
    );
};

export default Mint;
