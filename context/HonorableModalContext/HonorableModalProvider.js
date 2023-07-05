import { createContext, useEffect, useState } from 'react';
import HonorableModal from '~/components/home/HonorableModal';

export const HonorableModalContext = createContext();

const HonorableProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [data, setDataRepo] = useState({});
    function setData(title, data) {
        setTitle(title);
        setDataRepo(data);
    }
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [isOpen])
    return <HonorableModalContext.Provider value={{ isOpen, setIsOpen, setData, data, title }}>
        <HonorableModal />
        {children}
    </HonorableModalContext.Provider>
}

export default HonorableProvider