import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

import { cartAction } from "../../store/index"; // redux
import Checkout from "./Checkout";

// import { ACTION_TYPE } from '../../App';

const Cart = (props) => {
  const [isChackOut, setIsChackOut] = useState(false);
  const [dataIsSending, setDataIsSending] = useState(false);

  // console.log(ACTION_TYPE);
  const itemsArr = useSelector((stete) => stete);
  const { items, totalPrice } = itemsArr;

  const itemInCart = items.length;
  console.log();

  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(
      cartAction.removeFromCart({
        id,
        type: "remove",
      })
    );
  };

  const addItemHandler = (id) => {
    dispatch(
      cartAction.removeFromCart({
        id,
        type: "add",
      })
    );
  };

  /* items in cart */
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => {
        return (
          <CartItem
            id={item.id}
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={removeHandler.bind(this, item.id)}
            onAdd={addItemHandler.bind(this, item.id)}
          />
        );
      })}
    </ul>
  );

  const orderHandeler = (event) => {
    setIsChackOut(true);
  };

  /*  get user Detail From Chackout componet and save order */
  const saveDataHandeler = async (userDetails) => {
    setDataIsSending(true);
    const jsonObj = JSON.stringify({
      userDetails,
      items,
    });

    try {
      const url = "kkkkk";
      const response = await fetch(`${url}`, {
        method: "POST",
        body: jsonObj,
      });
      if(!response.ok){
        throw new Error("Somthing Went Wrong")
      }
    } catch(err) {
      console.log(err);
    }

    console.log(jsonObj);
  };

  // JSX code
  return (
    <Modal hideCart={props.hideCart}>
      {/* items in cart */}
      {cartItem}

      {/* Total Amount of the cart */}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${totalPrice.toFixed(2)}`}</span>
      </div>

      {/* order and cancel button */}
      {!isChackOut && !!itemInCart && (
        <div className={classes.actions}>
          <button
            onClick={() => props.hideCart()}
            className={classes["button--alt"]}
          >
            close
          </button>
          <button className={classes.button} onClick={orderHandeler}>
            order
          </button>
        </div>
      )}

      {/* Cheackout order user form */}
      {isChackOut && (
        <Checkout hideCart={props.hideCart} onConfirm={saveDataHandeler} />
      )}
    </Modal>
  );
};

export default Cart;
