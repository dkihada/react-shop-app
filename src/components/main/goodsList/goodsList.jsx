import { useContext } from 'react';
import { ShopContext } from '../../../context';
import { GoodsItem } from './goodsItem/goodsItem';

function GoodsList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Ничего не найдено</h3>;
  }

  return (
    <div className='columns is-flex-wrap-wrap mt-2 is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd'>
      {goods.map((item) => {
        return <GoodsItem key={item.mainId} {...item} />;
      })}
    </div>
  );
}

export { GoodsList };
