import { useEffect, useContext } from 'react';
import { ShopContext } from '../../../context';

import './alert.css';

function Alert() {
  const { alertName: name = '', closeAlert = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div className='notification is-link is-warning alert-item'>
      Вы добавили в корзину <span className='has-text-weight-bold'>{name}</span>
      !
    </div>
  );
}

export { Alert };
