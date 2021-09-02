import './basket.css';

function Basket(props) {
  const { quantity } = props;

  return (
    <div className='basket'>
      <div className='basket__btn buttons is-justify-content-flex-end'>
        <a className='button is-info'>
          <i className='fas fa-shopping-basket'></i>
        </a>
        {quantity ? (
          <span class='basket__quantity tag is-danger'>{quantity}</span>
        ) : null}
      </div>
    </div>
  );
}

export { Basket };
