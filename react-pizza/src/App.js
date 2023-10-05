// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

import Pizza from './components/Pizza/Pizza';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Sort from './components/Sort/Sort';
// import pizzas from './assets/pizza.json'
import './scss/app.scss';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://651e7b8944a3a8aa4768728b.mockapi.io/items')
      .then(res => res.json())
      .then(data => {
        setItems(data);
      })
      .catch(err => console.log('Произошла ошибка запроса', err));
  }, []); 

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {
            items.map((obj) => {
              return <Pizza 
                key={obj.id} 
                {...obj}
                // name={obj.name} 
                // price={obj.price} 
                // imgUrl={obj.imageUrl} 
                // sizes={obj.sizes}
                // types={obj.types} 
              />
            })
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
