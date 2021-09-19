import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  };

  value.addItemToBasket = (itemId) => {
    dispatch({ type: 'ADD_ITEM_TO_BASKET', payload: { mainId: itemId } });
  };

  value.removeItemToBasket = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM_TO_BASKET', payload: { mainId: itemId } });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { mainId: itemId } });
  };

  value.handleBasketShow = () => {
    dispatch({ type: 'HANDLE_BASKET_SHOW' });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
