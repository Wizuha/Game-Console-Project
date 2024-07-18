import React, { createContext, useState, useEffect, useContext } from "react";

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
    const number = purchases.filter((item) => item.id_console === purchase.id_console).length;
    if(number <= 2 && number > 0 && quantity < 2 ) {
      setQuantity((quantity) => quantity + 1);
      setNbPurchases(nbPurchases + 1);
    }
    else if(number === 0 && quantity <= 2 ){
        setPurchases([...purchases,purchase]);
        setQuantity((quantity) => quantity + 1);
        setNbPurchases(nbPurchases + 1);
    }
    else{
      alert("Le produit ne peut pas être ajouté plus de 2 fois.");
    }
  };

  const handleDecrease = (purchase) => {
    const number = purchases.filter((item) => item.id_console === purchase.id_console).length;
    if(number == 2){
      setQuantity(quantity - 1);
      setNbPurchases(nbPurchases - 1);
    }
    else if(number == 1)
    setQuantity(quantity > 1 ? quantity - 1 : 0);
    setPurchases(purchases.filter((item)=> item.id_console !== purchase.id_console ));
    setNbPurchases(nbPurchases - 1);

  };

  const deletePurchase = (purchase) => {
    setPurchases(
      purchases.filter((item) => item.id_console !== purchase.id_console)
    );
    setNbPurchases(nbPurchases - 1);
  };

  const tabPurchase = (purchase) => {
    const count = purchases.filter(
      (item) => item.id_console === purchase.id_console
    ).length;
    if (count < 2) {
      setNbPurchases(nbPurchases + 1);
      setPurchases([...purchases, purchase]);
      setQuantity(quantity + 1);
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
    deletePurchase,
    handleIncrease,
    handleDecrease,
    quantity,
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
