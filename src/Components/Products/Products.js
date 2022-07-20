import Product from './Product/Product';
import React from 'react';
const Products = (props) => {

  return (
    <div>
      {props.Data.map(
        (product) => <Product
          titleClick={() => props.changeLanguage('en')}
          deletep={props.deleteProduct}
          id={product.id}
          key={product.id}
          ptitle={product.ptitle}
          prise={product.prise}
          src={product.src}
        />

      )}
    </div>
  )
}
const areEqual = (a, b) => {
  return a.Data === b.Data;
}
export default React.memo(Products,areEqual);