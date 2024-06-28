import React, { createContext, useState, useEffect, useContext } from "react";

const SearchContext = createContext();

export const MyProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const filterData = products?.filter((produit) => {
    const matchSearch = produit.name.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
  });

  const contextValue = {
    filterData,
    search,
    setSearch,
    products,
    setProducts
  };

  return (
    <SearchContext.Provider
      value={ contextValue }
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useMyContext = () => {
    return useContext(SearchContext);
}

export { SearchContext };
