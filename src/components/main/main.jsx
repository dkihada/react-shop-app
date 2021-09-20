import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../../context';
import { API_KEY, API_URL } from '../../config';
import { Basket } from '../basket/basket';
import { Preloader } from '../preloader/preloader';
import { GoodsList } from './goodsList/goodsList';
import { BasketList } from '../basket/basketList/basketList';
import './main.css';
import { Alert } from '../basket/alert/alert';

function Main() {
  const { setGoods, loading, order, isBasketShow, alertName } =
    useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className='container content'>
      <Basket quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export { Main };
