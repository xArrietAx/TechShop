import { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const [Cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  })

  return (
    <Context.Provider value={{
      currentPage, 
      setCurrentPage,
      Cart,
      setCart
    }}>
      {children}
    </Context.Provider>
  );
};
