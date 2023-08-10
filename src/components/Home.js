
import produList from '../productList.json';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart,removeFromCart} from '../redux/CartSlice';


export default function Home(){
  // const state = useSelector(state => state);
  const {cartProductIds} = useSelector(state => state.cart)
  console.log(cartProductIds)
  const dispatch = useDispatch();
  return (
  <div className='boxHome'>
    {produList.products.map((product) =>{
      return (
        <figure key={product.id}>
        <img src={product.imageUrl} alt={product.name} />
          <figcaption>
            <dl>
              <dt>{product.name}</dt>
              <dd>{product.price}</dd>
              <dd>

                {
                 !cartProductIds.includes(product.id) && (<button 
                type="button"
                onClick={() => {dispatch(addToCart(product.id))}}
                >추가</button>)
                }

              {
               cartProductIds.includes(product.id) && (<button 
                className="delete"
              type="button"
              onClick={() => {dispatch(removeFromCart(product.id))}}
              >삭제</button>)
              }

              </dd>
            </dl>
          </figcaption>
      </figure>
      )
    })}
  </div>
  );
}