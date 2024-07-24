import React, { createContext, useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchContext = createContext();

export const MyProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [likes, setLikes] = useState([]);
  const [nbLikes, setNbLikes] = useState(0);
  const [purchases, setPurchases] = useState([]);
  const [nbPurchases, setNbPurchases] = useState(0);
  const [quantity, setQuantity] = useState(0);


  const handleIncrease = (purchase) => {
    const existingPurchase = purchases.find((item) => item.id_console === purchase.id_console);
    if (existingPurchase){
      if (existingPurchase.quantity < 2) {
        setPurchases(
          purchases.map((item) => item.id_console === purchase.id_console
            ? { ...item, quantity: item.quantity + 1 }
            : item));
        setNbPurchases(nbPurchases + 1);
      } else{
          toast.error("Le produit ne peut pas être ajouté plus de 2 fois.");
      }
    }else{
      setPurchases([...purchases,{ ...purchase, quantity: 1 }])
      setNbPurchases(nbPurchases + 1);
    }
  };

  const handleDecrease = (purchase) => {
    if(purchase.quantity > 1){
      setPurchases(
        purchases.map((item) => item.id_console === purchase.id_console
          ? {...item, quantity : item.quantity - 1}
          : item));
      setNbPurchases(nbPurchases - 1);
    }else{
      setPurchases(purchases.filter((item) => item.id_console !== purchase.id_console));
      setNbPurchases(nbPurchases < 1 ? 0 : nbPurchases - 1 )
    }
  };

  const deletePurchase = (purchase) => {
    setPurchases(
      purchases.filter((item) => item.id_console !== purchase.id_console)
    );
    setNbPurchases(nbPurchases - 1);
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
    purchases,
    deletePurchase,
    handleIncrease,
    handleDecrease,
    quantity,
    purchases
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
