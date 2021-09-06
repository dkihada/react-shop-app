import { BasketItem } from '../basketItem/basketItem';
import './basketList.css';

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.regularPrice * el.quantity;
  }, 0);

  return (
    <div className='card basket-list'>
      <h3>Товаров в корзине: {order.length}</h3>
      <div className='basket-list__close' onClick={handleBasketShow}>
        <i className='fas fa-times'></i>
      </div>
      <table className='table is-striped'>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Количество</th>
            <th>Цена (шт)</th>
            <th>Сумма </th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {order.length ? (
            order.map((item) => (
              <BasketItem
                key={item.mainId}
                {...item}
                removeFromBasket={removeFromBasket}
              />
            ))
          ) : (
            <tr>
              <th>Корзина пуста</th>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <th>Общая стоимость: {totalPrice} $</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export { BasketList };
