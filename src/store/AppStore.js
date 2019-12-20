import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext();
const initialState = { currentYear: 2019, currentPos: 1 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeYear':
      return {
        currentYear: action.payload,
        currentPos: 1
      };
    case 'changePos':
      return {
        currentYear: state.currentYear,
        currentPos: action.payload
      };
    default:
      throw new Error(`Invalid action.type: ${action.type}`);
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);
