import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import{fruitsAndVegetables} from './mocks/mock';
import findSelectedProduct from './utils/findSelectedItem';
import ProductDetails from './components/productDetails';

class App extends React.Component {
  state={selectedItem: null}

  selectItem=id=>{
    const selectedItem=findSelectedProduct(fruitsAndVegetables,id);
    this.setState({selectedItem});
  }
  deselectItem=()=>{
    this.setState({selectedItem: null});
  }

  render() {
    return(
      <div>
        {
          this.state.selectedItem ?
            //ładowany widok wybranego obiektu, tego nie zmieniam
           <ProductDetails item={this.state.selectedItem} closeView={this.deselectItem}/> 
          :
           <ProductList products={fruitsAndVegetables} selectItem={this.selectItem}/>
        }

      </div>
    );

  }
}

export default App;
