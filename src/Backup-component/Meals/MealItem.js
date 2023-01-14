import React from 'react'
import { useDispatch } from 'react-redux';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import { cartAction } from '../../store';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    const dispatch = useDispatch();

    const addtocart = (itemQty) => {
      const saveItemIs = {
        id: props.id,
        name: props.name,
        price: props.price,
        amount: +itemQty,
      };

      dispatch(cartAction.addToCart({ item: saveItemIs,type:'AddItem'}));
      // console.log(saveItemIs);
    };


  return (
    <li className={classes.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm addtocart={addtocart} />
      </div>
    </li>
  );
}

export default MealItem