function BasketItem(props) {
  const { mainId, displayName, price, quantity } = props;

  return (
    <tr>
      <td>{displayName}</td>
      <td>{quantity}</td>
      <td>{price.regularPrice}</td>
      <td>{price.regularPrice * quantity}</td>
      <td>
        <button className='delete'></button>
      </td>
    </tr>
  );
}

export { BasketItem };
