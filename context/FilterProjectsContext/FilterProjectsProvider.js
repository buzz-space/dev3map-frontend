import { createContext, useState } from 'react';

export const FilterProjectsContext = createContext();

const FilterProjectsProvider = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return <FilterProjectsContext.Provider value={{ activeIndex, setActiveIndex }}>{children}</FilterProjectsContext.Provider>
}

export default FilterProjectsProvider