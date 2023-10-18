import React from "react";

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {

  return (
    <div className={styles.root}>
      <span>😒</span>
      <h1>Ничего не найдено</h1>
      <p className={styles.description}>К сожалению, в нашем интернет-магазине пока нет этой страницы</p>
    </div>
  );
};

export default NotFoundBlock;