import React, { useRef } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  // formSubmitHandler 
  const formSubmitHandler = event => {
    event.preventDefault()
    const itemQty =  amountInputRef.current.value

    props.addtocart(itemQty);
  }

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: props.id,
          type: "number",
          min: 1,
          max: 5,
          defaultValue: 1,
        }}
      />

      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
