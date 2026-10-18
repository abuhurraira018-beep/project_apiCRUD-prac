import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Getapi from "./Getapi";
import Cart from "./Cart";

const Shop = ({
  cart,
  cartCount,
  addtocart,
  removeFromCart,
  darkMode,
  setDarkMode
}) => {

  const [page, setPage] = useState("products");

  const [category, setCategory] = useState("all");

  const [wishlist, setWishlist] = useState([]);


  // =========================
  // WISHLIST
  // =========================

  const toggleWishlist = (item) => {

    const alreadyExists = wishlist.some(
      (obj) => obj.id === item.id
    );


    if (alreadyExists) {

      setWishlist(
        wishlist.filter(
          (obj) => obj.id !== item.id
        )
      );

    } else {

      setWishlist([
        ...wishlist,
        item
      ]);

    }

  };


  return (
    <>

      {/* ========================= */}
      {/* NAVBAR */}
      {/* ========================= */}

      <nav className="navbar navbar-dark bg-dark px-4">

        <span className="navbar-brand fw-bold">
          🛍️ Shopping Hub
        </span>


        <div className="d-flex align-items-center gap-3">

          {/* DARK / LIGHT */}

          <button
            className="btn btn-outline-light rounded-pill px-4"
            onClick={() =>
              setDarkMode(!darkMode)
            }
          >

            {darkMode
              ? "☀️ Light"
              : "🌙 Dark"}

          </button>


          {/* CART */}

          <button
            className="btn btn-primary position-relative rounded-pill px-4"
            onClick={() => setPage("cart")}
          >

            🛒 Cart

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">

              {cartCount}

            </span>

          </button>

        </div>

      </nav>


      {/* ========================= */}
      {/* MAIN LAYOUT */}
      {/* ========================= */}

      <div className="container-fluid">

        <div className="row">


          {/* ========================= */}
          {/* SIDEBAR */}
          {/* ========================= */}

          <div className="col-md-3 col-lg-2 bg-dark min-vh-100 p-3">

            <Sidebar
              setPage={setPage}
              setCategory={setCategory}
            />

          </div>


          {/* ========================= */}
          {/* MAIN CONTENT */}
          {/* ========================= */}

          <div
            className={`col-md-9 col-lg-10 p-4 ${
              darkMode
                ? "bg-dark text-white"
                : "bg-light text-dark"
            }`}
            style={{
              minHeight: "100vh"
            }}
          >


            {/* ========================= */}
            {/* HOME */}
            {/* ========================= */}

            {page === "home" && (

              <div className="text-center py-5">

                <h1 className="fw-bold">
                  🛍️ Welcome to Shopping Hub
                </h1>

                <p className="lead">
                  Discover amazing products in one place
                </p>

                <button
                  className="btn btn-primary px-5"
                  onClick={() =>
                    setPage("products")
                  }
                >
                  Shop Now
                </button>

              </div>

            )}


            {/* ========================= */}
            {/* PRODUCTS */}
            {/* ========================= */}

            {page === "products" && (

              <>

                <h2 className="fw-bold mb-4">
                  Our Products
                </h2>

                <Getapi
                  addtocart={addtocart}
                  category={category}
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  page="products"
                  darkMode={darkMode}
                />

              </>

            )}


            {/* ========================= */}
            {/* CATEGORIES */}
            {/* ========================= */}

            {page === "category" && (

              <>

                <h2 className="fw-bold mb-4">
                   Categories
                </h2>


                <div className="row g-3">


                  {/* ALL */}

                  <div className="col-md-3">

                    <button
                      className="btn btn-outline-primary w-100 p-3"
                      onClick={() => {

                        setCategory("all");

                        setPage("products");

                      }}
                    >
                       All Products
                    </button>

                  </div>


                  {/* BEAUTY */}

                  <div className="col-md-3">

                    <button
                      className="btn btn-outline-primary w-100 p-3"
                      onClick={() => {

                        setCategory("beauty");

                        setPage("products");

                      }}
                    >
                       Beauty
                    </button>

                  </div>


                  {/* FRAGRANCES */}

                  <div className="col-md-3">

                    <button
                      className="btn btn-outline-primary w-100 p-3"
                      onClick={() => {

                        setCategory("fragrances");

                        setPage("products");

                      }}
                    >
                       Fragrances
                    </button>

                  </div>


                  {/* FURNITURE */}

                  <div className="col-md-3">

                    <button
                      className="btn btn-outline-primary w-100 p-3"
                      onClick={() => {

                        setCategory("furniture");

                        setPage("products");

                      }}
                    >
                       Furniture
                    </button>

                  </div>


                  {/* GROCERIES */}

                  <div className="col-md-3">

                    <button
                      className="btn btn-outline-primary w-100 p-3"
                      onClick={() => {

                        setCategory("groceries");

                        setPage("products");

                      }}
                    >
                      🛒 Groceries
                    </button>

                  </div>

                </div>

              </>

            )}


            {/* ========================= */}
            {/* OFFERS */}
            {/* ========================= */}

            {page === "offers" && (

              <>

                <h2 className="fw-bold mb-4">
                   Special Offers
                </h2>

                <Getapi
                  addtocart={addtocart}
                  category="offers"
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  page="offers"
                  darkMode={darkMode}
                />

              </>

            )}


            {/* ========================= */}
            {/* WISHLIST */}
            {/* ========================= */}

            {page === "wishlist" && (

              <>

                <h2 className="fw-bold mb-4">
                   My Wishlist
                </h2>


                {wishlist.length === 0 ? (

                  <div className="alert alert-info">
                    Your wishlist is empty.
                  </div>

                ) : (

                  <div className="row g-4">

                    {wishlist.map((item) => (

                      <div
                        className="col-12 col-sm-6 col-md-4 col-lg-3"
                        key={item.id}
                      >

                        <div
                          className={`card h-100 shadow border-0 rounded-4 overflow-hidden ${
                            darkMode
                              ? "bg-secondary text-white"
                              : "bg-white text-dark"
                          }`}
                        >

                          <img
                            src={item.images}
                            className="card-img-top"
                            alt={item.title}
                            style={{
                              height: "220px",
                              objectFit: "cover"
                            }}
                          />

                          <div className="card-body">

                            <h5 className="fw-bold">
                              {item.title}
                            </h5>

                            <h4 className="text-success">
                              ${item.price}
                            </h4>


                            <button
                              className="btn btn-primary w-100 mb-2"
                              onClick={() =>
                                addtocart(item)
                              }
                            >
                              🛒 Add to Cart
                            </button>


                            <button
                              className="btn btn-danger w-100"
                              onClick={() =>
                                toggleWishlist(item)
                              }
                            >
                              Remove Wishlist
                            </button>

                          </div>

                        </div>

                      </div>

                    ))}

                  </div>

                )}

              </>

            )}


            {/* ========================= */}
            {/* BEST SELLERS */}
            {/* ========================= */}

            {page === "best" && (

              <>

                <h2 className="fw-bold mb-4">
                   Best Sellers
                </h2>

                <Getapi
                  addtocart={addtocart}
                  category="best"
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  page="best"
                  darkMode={darkMode}
                />

              </>

            )}


            {/* ========================= */}
            {/* CART */}
            {/* ========================= */}

            {page === "cart" && (

              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
              />

            )}

          </div>

        </div>

      </div>

    </>
  );
};

export default Shop;