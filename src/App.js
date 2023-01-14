// import react from "react";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import { useCallback, useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = useCallback(()=> {   
      setCartIsShown(true);
  },[])
    
  const hideCart =  useCallback(()=> {  
    setCartIsShown(false);
  },[]);

  return (
    <>
      {cartIsShown && <Cart hideCart={hideCart} />}
      <Header showCart={showCart} />
      <Meals />
    </>
  );
}

export default App;
