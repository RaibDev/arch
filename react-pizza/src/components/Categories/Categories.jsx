import React, {useState} from 'react';

import { pizzaCategories } from '../../utils/constants';

function Categories() {
  const [activeIndex, setActiveIndex ] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className="categories">
      <ul>
        {pizzaCategories.map((value, i) => {
          return <li key={i} onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>{value}</li>
        })}
      </ul>
    </div>
  );
};

export default Categories;