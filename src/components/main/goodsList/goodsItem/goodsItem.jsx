import './goodsItem.css';

function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addToBasket = Function.prototype,
    banner,
  } = props;

  const imgBackground = displayAssets.map((item) => item.full_background);

  return (
    <div className='column is-one-quarter goods-item'>
      {banner ? (
        <span className='tag is-warning goods-item__tag'>{banner.name}</span>
      ) : null}
      <div
        id={mainId}
        className='card is-flex is-flex-direction-column'
        style={{ height: '100%' }}
      >
        <div className='card-image'>
          <figure className='image is-4by3'>
            <img className='mt-3' src={imgBackground} alt={displayName} />
          </figure>
        </div>

        <div className='px-5 pt-5 is-flex-grow-1'>
          <div className='media'>
            <div className='media-content'>
              <p className='title is-4'>{displayName}</p>
            </div>
          </div>

          <div>{displayDescription}</div>
        </div>
        <div className='card-content'>
          <div className='is-flex is-justify-content-space-between is-align-items-center mt-5'>
            <button
              onClick={() => {
                addToBasket({
                  mainId,
                  displayName,
                  price,
                });
              }}
              className='button is-rounded'
            >
              Купить
            </button>
            <span className='is-size-4 has-text-weight-medium '>
              {price.regularPrice} $
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { GoodsItem };
