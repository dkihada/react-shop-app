import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../config';
import { Basket } from '../basket/basket';
import { Preloader } from '../preloader/preloader';
import { GoodsList } from './goodsList/goodsList';
import './main.css';

function Main() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className='container content'>
      <Basket quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
}

export { Main };
