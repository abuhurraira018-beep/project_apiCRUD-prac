import React from "react";

const Sidebar = ({
  setPage,
  setCategory
}) => {

  return (

    <div
      className="text-white"
      style={{
        position: "sticky",
        top: "20px",
        height: "fit-content",
      }}
    >

      <h5 className="text-center mb-4">
        SHOP MENU
      </h5>


      {/* HOME */}

      <button
        onClick={() =>
          setPage("home")
        }
        className="btn btn-outline-light w-100 mb-2"
      >
         Home
      </button>


      {/* PRODUCTS */}

      <button
        onClick={() => {

          setCategory("all");

          setPage("products");

        }}
        className="btn btn-outline-light w-100 mb-2"
      >
         Products
      </button>


      {/* CATEGORIES */}

      <button
        onClick={() =>
          setPage("category")
        }
        className="btn btn-outline-light w-100 mb-2"
      >
         Categories
      </button>


      {/* OFFERS */}

      <button
        onClick={() =>
          setPage("offers")
        }
        className="btn btn-outline-light w-100 mb-2"
      >
         Offers
      </button>


      {/* WISHLIST */}

      <button
        onClick={() =>
          setPage("wishlist")
        }
        className="btn btn-outline-light w-100 mb-2"
      >
         Wishlist
      </button>


      {/* CART */}

      <button
        onClick={() =>
          setPage("cart")
        }
        className="btn btn-outline-light w-100 mb-2"
      >
        🛒 Cart
      </button>


      {/* BEST SELLERS */}

      <button
        onClick={() =>
          setPage("best")
        }
        className="btn btn-outline-light w-100 mb-2"
      >
         Best Sellers
      </button>

    </div>

  );
};

export default Sidebar;