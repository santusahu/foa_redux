import React from "react";
import Modal from "../UI/Modal";

import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const cart = (props) => {
  const DUMMY_CartItem = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      amount: 2,
    },
    {
      id: "m21",
      name: "Finest",
      description: "Finest fish and veggies",
      price: 22.99,
      amount: 5,
    },
  ];

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {DUMMY_CartItem.map((item) => {
        return (
          <CartItem
            id={item.id}
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal hideCart={props.hideCart}>
      {cartItem}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$34.54</span>
      </div>

      <div className={classes.actions}>
        <button
          onClick={() => props.hideCart()}
          className={classes["button--alt"]}
        >
          close
        </button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
};

export default cart;
