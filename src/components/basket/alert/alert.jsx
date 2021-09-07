import { useEffect } from 'react';

import './alert.css';

function Alert(props) {
  const { name = '', closeAlert = Function.prototype } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [name]);

  return (
    <div className='notification is-link is-warning alert-item'>
      Вы добавили в корзину <span className='has-text-weight-bold'>{name}</span>
      !
    </div>
  );
}

export { Alert };
