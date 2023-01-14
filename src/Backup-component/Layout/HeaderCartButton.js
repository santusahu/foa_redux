import React, { useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useSelector } from "react-redux";
const HeaderCartButton = (props) => {
  const [btnHigligted, setBtnHigligted] = useState(false);
  const itemsArr = useSelector((stete) => stete);
  // const { items: itemsInCart, totalPrice: cartItemTotPrice } = itemsArr;
  const { items: itemsInCart} = itemsArr;

  // console.log(itemsInCart);
  const totItemInCart = itemsInCart.reduce((curVal, item) => {
    return curVal + item.amount;
  }, 0);

  useEffect(() => {
    if (itemsInCart.length === 0) {
      return;
    }
    setBtnHigligted(true);
    const timer = setTimeout(() => {
      setBtnHigligted(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [itemsInCart]);

  const btnClasses = `${classes.button} ${btnHigligted ? classes.bump : ""}`;

  return (
    <button className={btnClasses} onClick={() => props.showCart()}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart </span>
      <span className={classes.badge}>{totItemInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
