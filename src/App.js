import React from 'react';
import './App.css';
import ProductCard from './Props.js/Props';


const products = [
  {
    productId: '1',
    productPic: 'https://tse4.mm.bing.net/th?id=OIP.2w2LcHYoF9KaB0YcUGZPVwHaFH&pid=Api&P=0',
    productName: 'Shoes',
    brand: 'Adidas',
    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '7$',
    rating: 4,
  },
  {
    productId: '2',
    productPic: 'https://tse3.explicit.bing.net/th?id=OIP.ocTLttMq9pnqtl9IwAu2nQHaKB&pid=Api&P=0',
    productName: 'T-shirt',
    brand: 'Nike',
    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '10$',
    rating: 3.5,
  },
  {
    productId: '3',
    productPic: 'https://tse1.mm.bing.net/th?id=OIP.73TalkWaZlwPohcUW-tYHgHaHa&pid=Api&P=0',
    productName: 'Ball',
    brand: 'Pooma',
    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '60$',
    rating: 3.5,
  },
  {
    productId: '4',
    productPic: 'https://tse3.mm.bing.net/th?id=OIP.C-GCdhnFYS1iNNKe1lI74QHaHa&pid=Api&P=0',
    productName: 'Watch',
    brand: 'Titan',
    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '70$',
    rating: 4.5,
  },
  {
    productId: '5',
    productPic: 'https://tse3.mm.bing.net/th?id=OIP.yyyo3tDdKWQsCEHbEWYrVQHaHb&pid=Api&P=0',
    productName: 'Wall clock',
    brand: 'Sonata',
    productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '80$',
    rating: 2.5,
  }
]


function App() {
  return (
    <div className="App">
      {products.map((product)=>(
        <ProductCard productId={product.productId} productPic={product.productPic} productName={product.productName} brand={product.brand} productDescription={product.productDescription} price={product.price} rating={product.rating}/>

      ))}
     
    </div>
  );
}

export default App;
