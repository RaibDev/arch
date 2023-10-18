import React, { useState, useEffect } from 'react';

import Pizza from '../components/Pizza/Pizza';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import Skeleton from '../components/Pizza/Skeleton';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://651e7b8944a3a8aa4768728b.mockapi.io/items')
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setIsLoading(!isLoading);
      })
      .catch(err => console.log('Произошла ошибка запроса', err));

      window.scrollTo(0,0);  //  При первом рендере Home обнуляем скролл, чтобы показать страницу с самого начала
  }, []); 
  return (
    <div className='container' >
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
      {
        isLoading ? 
        [...new Array(6)].map((_, index) => <Skeleton key={index} />) :  //  Еще не получен массив данных, создаем фейковый для рендера скелетона
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
  );
};

export default Home;