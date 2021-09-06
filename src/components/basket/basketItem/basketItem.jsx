function BasketItem(props) {
  const { mainId, displayName, price, quantity, removeFromBasket } = props;

  return (
    <tr>
      <td>{displayName}</td>
      <td>
        <i className='fas fa-minus-circle mr-4'></i>
        {quantity} <i className='fas fa-plus-circle ml-4'></i>
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
