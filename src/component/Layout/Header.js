import React from 'react'

import Classes from "./Header.module.css";
import HeadImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
// import { useSelector } from 'react-redux';

const Header = (props) => {

  // const itemInCart = useSelector((stete) => stete.items);
  // const itemsArr = useSelector((stete) => stete);
  // console.log(itemInCart);
  // console.log(itemsArr);
  return (
    <React.Fragment>
      <header className={Classes.header}>
        <h1>Food Order App</h1>
        <HeaderCartButton showCart={props.showCart} />
      </header>

      <div className={Classes["main-image"]}>
        <img src={HeadImage} alt="Food order App" />
      </div>
    </React.Fragment>
  );
}

export default Header