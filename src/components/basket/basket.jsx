import './basket.css';

function Basket(props) {
  const { quantity, handleBasketShow = Function.prototype } = props;

  return (
    <div className='basket' onClick={handleBasketShow}>
      <div className='basket__btn buttons is-justify-content-flex-end'>
        <button className='button is-info'>
          <i className='fas fa-shopping-basket'></i>
        </button>
        {quantity ? (
          <span className='basket__quantity tag is-danger'>{quantity}</span>
        ) : null}
      </div>
    </div>
  );
}

export { Basket };
