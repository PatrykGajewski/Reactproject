import React from 'react';

import './productDetails.css'
class ProductDetails extends React.Component{
    render(){
        //klasa action zawierac bedzie nazwe, cene
        const {id,img,name,price,desc}=this.props.item;
        return(
            <div className="product-list">
                <div className="product-details__image-wrapper">
                    <img className="product-details__image" src={img}></img>
                </div>
                
                <div className="product-details__action-wrapper">
                    <h1>{name}</h1>
                    <p>{price}</p>
                    <button onClick={()=> alert(`Youb bought ${name}`)}>Buy it</button>
                </div>
                <article className="product-details__description">{desc}</article>
                <button className="product-details__close-button" onClick={this.props.closeView}>Close</button>
            </div>
        );
    }

}

export default ProductDetails;