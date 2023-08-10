import productList from '../productList.json';

import {BiCart} from 'react-icons/bi';
import './Cart.css';

import { useDispatch, useSelector } from 'react-redux';
import {removeFromCart,clearAllItems} from '../redux/CartSlice';

export default function Cart(){
  const {cartProductIds} = useSelector(state => state.cart);
  const cartProductData = productList.products.filter(product => cartProductIds.includes(product.id))
  // console.log(cartProductIds);
  // console.log(cartProductData);
  const dispatch = useDispatch();

  return (
    <div className="box">
      <h3>Item in cart</h3>
      <div className="boxCart">
        {cartProductData.map(product => {
          return (
            <figure key={product.id}>
            <img src={product.imageUrl}  alt={product.name} />
            <figcaption>
              <dl>
                <dt>{product.name}</dt>
                <dd>{product.detail}</dd>
                <dd>
                  <button 
                  type="button"
                  onClick={() => dispatch(removeFromCart(product.id))}
                  >삭제</button>
                </dd>
              </dl>
            </figcaption>
          </figure>
          )
        })}
      </div>
      <footer>
          <p>
            <button 
            type="button"
            onClick={() => dispatch(clearAllItems())}
            >비우기</button></p>

        { cartProductData.length < 1  && ( <div>
            <BiCart />
            <p>
              장바구니가 비었습니다. <br />
              카트에 하목을 추가하기 않았습니다.
            </p>
          </div>)
          }

        </footer>
    </div>
  )
}

// 57 - 5:7