import React, { useState } from "react";

const Cart = ({
  cart,
  removeFromCart
}) => {

  const [customer, setCustomer] = useState({

    name: "",

    email: "",

    phone: "",

    address: ""

  });


  const [ordered, setOrdered] = useState(false);


  // TOTAL

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price),
    0
  );


  // INPUT CHANGE

  function handleChange(e) {

    setCustomer({

      ...customer,

      [e.target.name]:
        e.target.value

    });

  }


  // BUY NOW

  function buyNow(e) {

    e.preventDefault();


    if (
      !customer.name ||
      !customer.email ||
      !customer.phone ||
      !customer.address
    ) {

      alert(
        "Please fill all customer details"
      );

      return;

    }


    if (cart.length === 0) {

      alert("Your cart is empty");

      return;

    }


    setOrdered(true);

  }


  return (

    <>

      <h2 className="fw-bold mb-4">
        🛒 Shopping Cart
      </h2>


      {ordered ? (

        <div className="alert alert-success shadow">

          <h4 className="fw-bold">
            ✅ Order Placed Successfully!
          </h4>

          <p className="mb-0">
            Thank you {customer.name}.
            Your order has been received.
          </p>

        </div>

      ) : (

        <div className="row g-4">


          {/* ========================= */}
          {/* CART PRODUCTS */}
          {/* ========================= */}

          <div className="col-lg-7">

            <div className="card shadow border-0 rounded-4 p-3">

              <h4 className="fw-bold mb-3">
                Your Products
              </h4>


              {cart.length === 0 ? (

                <div className="alert alert-info">
                  Your cart is empty.
                </div>

              ) : (

                cart.map((item) => (

                  <div
                    key={item.id}
                    className="card mb-3 border rounded-3"
                  >

                    <div className="row g-0 align-items-center">


                      {/* IMAGE */}

                      <div className="col-md-3">

                        <img
                          src={item.images}
                          className="img-fluid rounded-start"
                          alt={item.title}
                          style={{
                            height: "120px",
                            width: "100%",
                            objectFit: "cover"
                          }}
                        />

                      </div>


                      {/* DETAILS */}

                      <div className="col-md-6">

                        <div className="card-body">

                          <h5 className="fw-bold">
                            {item.title}
                          </h5>

                          <p className="text-success fw-bold">
                            ${item.price}
                          </p>

                          <span className="badge bg-success">
                            Added to Cart
                          </span>

                        </div>

                      </div>


                      {/* REMOVE */}

                      <div className="col-md-3 text-center">

                        <button
                          onClick={() =>
                            removeFromCart(
                              item.id
                            )
                          }
                          className="btn btn-danger"
                        >
                          Remove
                        </button>

                      </div>

                    </div>

                  </div>

                ))

              )}

            </div>

          </div>


          {/* ========================= */}
          {/* CUSTOMER DETAILS */}
          {/* ========================= */}

          <div className="col-lg-5">

            <div className="card shadow-lg border-0 rounded-4 p-4">

              <h3 className="fw-bold text-center mb-4">
                Customer Details
              </h3>


              <form onSubmit={buyNow}>


                {/* NAME */}

                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={customer.name}
                    onChange={handleChange}
                  />

                </div>


                {/* EMAIL */}

                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={customer.email}
                    onChange={handleChange}
                  />

                </div>


                {/* PHONE */}

                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Phone
                  </label>

                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Enter your phone"
                    value={customer.phone}
                    onChange={handleChange}
                  />

                </div>


                {/* ADDRESS */}

                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Address
                  </label>

                  <textarea
                    name="address"
                    className="form-control"
                    rows="3"
                    placeholder="Enter your address"
                    value={customer.address}
                    onChange={handleChange}
                  ></textarea>

                </div>


                {/* TOTAL */}

                <div className="border-top pt-3 mb-3">

                  <div className="d-flex justify-content-between">

                    <h5 className="fw-bold">
                      Total
                    </h5>

                    <h4 className="text-success fw-bold">
                      ${total.toFixed(2)}
                    </h4>

                  </div>

                </div>


                {/* CHECKOUT */}

                <button
                  type="button"
                  className="btn btn-outline-primary w-100 mb-2"
                  onClick={() =>
                    alert(
                      `Checkout Total: $${total.toFixed(2)}`
                    )
                  }
                >
                  💳 Checkout
                </button>


                {/* BUY NOW */}

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  🛍️ Buy Now
                </button>

              </form>

            </div>

          </div>

        </div>

      )}

    </>

  );
};

export default Cart;