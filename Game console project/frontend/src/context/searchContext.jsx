import React, { createContext, useState, useEffect, useContext } from "react";
import { stringify } from "uuid";

const SearchContext = createContext();

export const MyProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [likes, setLikes] = useState([]);
  const [nbLikes, setNbLikes] = useState(0);
  const [purchases, setPurchases] = useState(()=>{
    const savedPurchases = localStorage.getItem('purchases')
    return savedPurchases ? JSON.parse(savedPurchases) : [];
  });
  const [nbPurchases, setNbPurchases] = useState(() => {
    const savedNbPurchases = localStorage.getItem("nbPurchases");
    return savedNbPurchases ? JSON.parse(savedNbPurchases) : 0 ;
  });

  useEffect(() => {
    localStorage.setItem('purchases', JSON.stringify(purchases));
    localStorage.setItem('nbPurchases', JSON.stringify(nbPurchases));
  },[purchases,nbPurchases]);

  const tabPurchase = (product) => {
    const count = purchases.filter((item) => item.id === product.id).length;
    if (count < 2) {
      setNbPurchases(nbPurchases + 1);
      setPurchases([...purchases,product]);
      console.log("addition au prix finale");
    } else {
      alert("Vous ne pouvez pas acheter ce produit plus de deux fois !");
    }
  };

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
