// import logo from './logo.svg';
import Pizza from './components/Pizza/Pizza';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Sort from './components/Sort/Sort';
import pizzas from './assets/pizza.json'
import './scss/app.scss';

function App() {
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
            pizzas.map((obj) => {
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
