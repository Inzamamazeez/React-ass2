import React from 'react';
import './App.css';
import ProductCard from './Componentfiles/Card';

function App() {
  let products1details = 
    {
      productId: '1',
      productPic: 'https://tse4.mm.bing.net/th?id=OIP.2w2LcHYoF9KaB0YcUGZPVwHaFH&pid=Api&P=0',
      productName: 'Shoes',
      brand: 'Adidas',
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '7$',
      rating: 4,
    }
    let product2details=
    {
      productId: '2',
      productPic: 'https://tse3.explicit.bing.net/th?id=OIP.ocTLttMq9pnqtl9IwAu2nQHaKB&pid=Api&P=0',
      productName: 'T-shirt',
      brand: 'Nike',
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '10$',
      rating: 3.5,
    }
    let product3details=
    {
      productId: '3',
      productPic: 'https://tse1.mm.bing.net/th?id=OIP.73TalkWaZlwPohcUW-tYHgHaHa&pid=Api&P=0',
      productName: 'Ball',
      brand: 'Pooma',
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '60$',
      rating: 3.5,
    }
    let product4details=
    {
      productId: '4',
      productPic: 'https://tse3.mm.bing.net/th?id=OIP.C-GCdhnFYS1iNNKe1lI74QHaHa&pid=Api&P=0',
      productName: 'Watch',
      brand: 'Titan',
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '70$',
      rating: 4.5,
    }
     let product5details={
      productId: '5',
      productPic: 'https://tse3.mm.bing.net/th?id=OIP.yyyo3tDdKWQsCEHbEWYrVQHaHb&pid=Api&P=0',
      productName: 'Wall clock',
      brand: 'Sonata',
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '80$',
      rating: 2.5,
    }
    function alertMessageOne() {
      alert("Product is 1 , which is shoes of brand Adidas has of rupees 7$ is added in the cart , please proceed to pay !!! ")
    }
  
    function alertMessageTwo() {
      alert("Product is 2 , which is T-shirt of brand Nike has of rupees 10$ is added in the cart , please proceed to pay !!! ")
    }
  
    function alertMessageThree() {
      alert("Product is 3 , which is Ball of brand Pooma has of rupees 60$ is added in the cart , please proceed to pay !!! ")
    }
  
    function alertMessageFour() {
      alert("Product is 4 , which is  watch of brand Titan has of rupees 70$ is added in the cart , please proceed to pay !!! ")
    }
  
    function alertMessageFive() {
      alert("Product is 5 , which is wall clock of brand Sonata has of rupees 80$ is added in the cart , please proceed to pay !!! ")
    }
  
  return (
    <div className="App">
      <ProductCard  productDetails={products1details}
        AlertFunctions={alertMessageOne}/>
      <ProductCard productDetails={product2details}
        AlertFunctions={alertMessageTwo}/>
      <ProductCard productDetails={product3details}
        AlertFunctions={alertMessageThree}/>
      <ProductCard productDetails={product4details}
      AlertFunctions={alertMessageFour}/>
      <ProductCard productDetails={product5details}
        AlertFunctions={alertMessageFive}/>
    </div>
  );
}

export default App;
