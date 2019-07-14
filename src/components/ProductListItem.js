import React from 'react';

import './productListItem.css';

//zwykły (głupi) komponent, funkcja strzałkowa
const ProductListItem=({id,img,name,price,desc, selectItem})=>{
    const onClickHandler=()=> selectItem(id);
    return(
        <li className="product-list-item" onClick={onClickHandler}>
            <div className="product-list-item__image-wrapper">
                <img className="product-list-item__image" src={img} alt="Alternative"></img>
            </div>
            <div className="product-list-item__element">
                {name}
            </div>
            <div className="product-list-item__element">$
                {price}
            </div>
        </li>
    );
}

export default ProductListItem;