import React, { useState, useEffect } from 'react';
import { getOrder } from '../http/orderFinal';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useHistory } from 'react-router';
import { RateProduct } from './RateProduct';

export function OrderHistory() {

  const [products, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getOrder()
      .then(response => setProducts(response.data));
  }, []);

  const onProductSelected = (product) => {
    console.log(product);
    history.push(`/rateProduct/${product.id}`)

  }
  return (
    <React.Fragment>
      <Header />
      <div className='products-order-history'>
        <h1> Mis pedidos</h1>
        <ul>
          {products.map((product, index) => (
            <li
              key={product.id}
            >
              <div className='product-order'>
                <img src={product.photo} />
                <p>{product.name}</p>
              </div>
              <button
                onClick={() => onProductSelected(product)}

              >VALORAR EL PRODUCTO</button>
              {/* <Link to={`/rateProduct/${product.id}`}>VALORAR EL PRODUCTO</Link> */}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </React.Fragment>
  )
}