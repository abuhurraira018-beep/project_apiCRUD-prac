import React from "react";

const Welcome = ({ setShowShop }) => {

  return (

    <div className="vh-100 d-flex justify-content-center align-items-center bg-dark text-white">

      <div className="text-center">

        <h1 className="display-2 fw-bold">
          🛍️ Welcome to Shopping Hub
        </h1>

        <p className="lead mb-4">
          Discover amazing products in one place
        </p>

        <button
          className="btn btn-primary btn-lg px-5"
          onClick={() => setShowShop(true)}
        >
          Shop Now
        </button>

      </div>

    </div>

  );
};

export default Welcome;