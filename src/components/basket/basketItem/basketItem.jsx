import './basketItem.css';

function BasketItem(props) {
  const {
    mainId,
    displayName,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    addItemToBasket = Function.prototype,
    removeItemFromBasket = Function.prototype,
  } = props;

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
