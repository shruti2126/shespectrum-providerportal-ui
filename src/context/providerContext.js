"use client";
import React, { createContext, useContext, useReducer } from "react";

// Define the initial state
const initialState = {
  providerDetails: {
    name: "Dr. First Last",
    mobileNumber: "1234567890",
    email: "K8l5o@example.com",
  }, // This will hold the provider's data
};

// Define actions
const ProviderReducer = (state, action) => {
  switch (action.type) {
    case "SET_PROVIDER_DETAILS":
      return { ...state, providerDetails: action.payload };
    case "CLEAR_PROVIDER_DETAILS":
      return { ...state, providerDetails: null };
    default:
      return state;
  }
};

// Create context
const ProviderContext = createContext();

// Create a custom hook to use the ProviderContext
export const useProviderContext = () => {
  return useContext(ProviderContext);
};

// Create a provider component
export const ProviderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProviderReducer, initialState);

  return (
    <ProviderContext.Provider value={{ state, dispatch }}>
      {children}
    </ProviderContext.Provider>
  );
};
