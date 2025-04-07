// src/contexts/OpenModalContext.tsx
import React, { createContext, useContext, useState } from 'react';

const OpenModalContext = createContext(undefined);

export const OpenModalProvider = ({ children }) => {
  const [sharedOpenModalValue, setSharedOpenModalValue] = useState(false);

  return (
    <OpenModalContext.Provider value={{ sharedOpenModalValue, setSharedOpenModalValue }}>
      {children}
    </OpenModalContext.Provider>
  );
};

export const useOpenModalSharedState = () => {
  const context = useContext(OpenModalContext);
  return context;
};
