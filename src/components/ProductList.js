import React from 'react';
import ProductListItem from './ProductListItem';

import './productList.css';

class ProductList extends React.Component{
    render(){
        //funckja map przechodzi po każdym elemencie i zwraca nową listę tylko z nazwami
        console.log("w tej funkcji juz")
        console.log(this.props.products)
        
        const productItems=this.props.products.map(product=><ProductListItem 
            id={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
            desc={product.desc}                       
            category={product.category} 
                                                   
            selectItem={this.props.selectItem}
        />
        );
        return(
            <div>
                <ul className="product-list">
                    {productItems}
                </ul>
            </div>
        )
    }

}
export default ProductList;