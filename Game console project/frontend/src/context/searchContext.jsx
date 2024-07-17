import React, { createContext, useState, useEffect, useContext } from "react";

const SearchContext = createContext();

export const MyProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [likes, setLikes] = useState([]);
  const [nbLikes, setNbLikes] = useState(0);
  const [purchases, setPurchases] = useState([]);
  const [nbPurchases, setNbPurchases] = useState(0);

  const tabPurchase = (purchase) => {
    const count = purchases.filter(
      (item) => item.id_console === purchase.id_console
    ).length;
    if (count < 2) {
      setNbPurchases(nbPurchases + 1);
      setPurchases([...purchases, purchase]);
      console.log("addition au prix finale");
    } else {
      alert("Vous ne pouvez pas acheter ce produit plus de deux fois !");
      console.log(purchases);
    }
  };

  useEffect(() => {
    if (purchases.length > 0) {
      console.log(purchases);
    }
  }, [purchases]);

  const filterData = products?.filter((produit) => {
    const matchSearch = produit.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchSearch;
  });

  const contextValue = {
    filterData,
    search,
    setSearch,
    products,
    setProducts,
    nbPurchases,
    tabPurchase,
    purchases,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(SearchContext);
};

export { SearchContext };
