import { createContext, useState } from 'react';

export const FilterProjectsContext = createContext();

const FilterProjectsProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState('');
  return (
    <FilterProjectsContext.Provider value={{ activeIndex, setActiveIndex, search, setSearch }}>
      {children}
    </FilterProjectsContext.Provider>
  );
};

export default FilterProjectsProvider;
