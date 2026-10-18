import React, { useState } from "react";
import Welcome from "./Welcome";
import Shop from "./Shop";

const App = () => {

  const [cart, setCart] = useState([]);

  const [showShop, setShowShop] = useState(false);

  const [darkMode, setDarkMode] = useState(true);


  // ADD TO CART
  const addtocart = (item) => {

    setCart([...cart, item]);

  };


  // REMOVE FROM CART
  const removeFromCart = (id) => {

    setCart(
      cart.filter((item) => item.id !== id)
    );

  };


  return (
    <>

      {!showShop ? (

        <Welcome
          setShowShop={setShowShop}
        />

      ) : (

        <Shop
          cart={cart}
          cartCount={cart.length}
          addtocart={addtocart}
          removeFromCart={removeFromCart}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

      )}

    </>
  );
};

export default App;