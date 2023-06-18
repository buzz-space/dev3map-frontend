import { createContext, useState } from 'react';
import HonorableModal from '~/components/home/HonorableModal';

export const HonorableModalContext = createContext();

const HonorableProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <HonorableModalContext.Provider value={{ isOpen, setIsOpen }}>
        <HonorableModal isOpen={isOpen} setIsOpen={setIsOpen} />
        {children}
    </HonorableModalContext.Provider>
}

export default HonorableProvider