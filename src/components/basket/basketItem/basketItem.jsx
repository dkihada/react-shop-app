import { useContext } from 'react';
import { ShopContext } from '../../../context';
import './basketItem.css';

function BasketItem(props) {
  const { mainId, displayName, price, quantity } = props;

  const { removeFromBasket, addItemToBasket, removeItemFromBasket } =
    useContext(ShopContext);

  return (
    <tr>
      <td>{displayName}</td>
      <td>
        <i
          className='fas fa-minus-circle mr-4 remove-item-basket'
          onClick={() => removeItemFromBasket(mainId)}
        ></i>
        {quantity}{' '}
        <i
          className='fas fa-plus-circle ml-4 add-item-basket'
          onClick={() => addItemToBasket(mainId)}
        ></i>
      </td>
      <td>{price.regularPrice} $</td>
      <td>{price.regularPrice * quantity} $</td>
      <td>
        <button
          className='delete'
          onClick={() => removeFromBasket(mainId)}
        ></button>
      </td>
    </tr>
  );
}

export { BasketItem };
