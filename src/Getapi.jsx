import axios from "axios";
import React, { useEffect, useState } from "react";

const Getapi = ({
  addtocart,
  category,
  wishlist,
  toggleWishlist,
  page,
  darkMode,
}) => {

  const [product, setProduct] = useState([]);


  const [form, setForm] = useState({
    title: "",
    price: "",
    images: "",
    description: "",
  });


  // =========================
  // GET PRODUCTS
  // =========================

  useEffect(() => {

    axios
      .get("https://dummyjson.com/products")
      .then((res) => {

        setProduct(res.data.products);

      });

  }, []);


  // =========================
  // DELETE
  // =========================

  function dellPro(iddd) {

    console.log("deleted");

    axios
      .delete(
        `https://dummyjson.com/products/${iddd}`
      )
      .then((res) => {

        console.log(res);

        setProduct(
          product.filter(
            (obj) => obj.id !== iddd
          )
        );

      });

  }


  // =========================
  // ADD PRODUCT
  // =========================

  function addProduct(e) {

    e.preventDefault();

    console.log(form);

    axios
      .post(
        "https://dummyjson.com/products/add",
        form
      )
      .then((res) => {

        console.log(
          "the product is created",
          res.data
        );

        setProduct([
          ...product,
          res.data
        ]);


        setForm({
          title: "",
          price: "",
          images: "",
          description: "",
        });

      });

  }


  // =========================
  // UPDATE
  // =========================

  const [idd, setIdd] = useState(null);


  function updatePro(item) {

    console.log(item.id);

    setIdd(item.id);

    setForm({

      title: item.title,

      price: item.price,

      description: item.description,

      images: item.images,

    });

  }


  // =========================
  // SAVE UPDATE
  // =========================

  function saveUpdate(e) {

    e.preventDefault();

    console.log("the data saved");


    const updateData = {

      title: form.title,

      price: form.price,

      description: form.description,

      images: form.images,

    };


    axios
      .put(
        `https://dummyjson.com/products/${idd}`,
        updateData
      )
      .then((res) => {

        console.log(res.data);


        setProduct(

          product.map((user) =>

            user.id == idd
              ? res.data
              : user

          )

        );

      });


    setIdd(null);


    setForm({

      title: "",

      price: "",

      description: "",

      images: "",

    });

  }


  // =========================
  // CANCEL UPDATE
  // =========================

  function cancelUpdate() {

    setIdd(null);

    setForm({

      title: "",

      price: "",

      description: "",

      images: "",

    });

  }


  // =========================
  // FILTER
  // =========================

  const filteredProducts = product.filter(
    (item) => {

      // ALL
      if (category === "all") {
        return true;
      }


      // OFFERS
      if (category === "offers") {

        return item.price < 50;

      }


      // BEST SELLERS
      if (category === "best") {

        return item.rating >= 4.5;

      }


      // CATEGORIES
      return item.category === category;

    }
  );


  return (

    <>


      {/* ========================= */}
      {/* ADD / UPDATE FORM */}
      {/* ========================= */}

      {page === "products" && (

        <form
          onSubmit={
            idd
              ? saveUpdate
              : addProduct
          }
          className="container mt-4"
        >

          <div
            className={`card shadow-lg border-0 rounded-4 p-4 ${
              darkMode
                ? "bg-secondary text-white"
                : "bg-white text-dark"
            }`}
          >

            <h3 className="text-center mb-4 fw-bold">

              {idd
                ? "Update Product"
                : "Add New Product"}

            </h3>


            {/* TITLE */}

            <div className="mb-3">

              <label className="form-label fw-semibold">
                Product Title
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter the title"
                value={form.title}
                onChange={(e) =>

                  setForm({
                    ...form,
                    title: e.target.value
                  })

                }
              />

            </div>


            {/* PRICE */}

            <div className="mb-3">

              <label className="form-label fw-semibold">
                Price
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter the price"
                value={form.price}
                onChange={(e) =>

                  setForm({
                    ...form,
                    price: e.target.value
                  })

                }
              />

            </div>


            {/* IMAGE */}

            <div className="mb-3">

              <label className="form-label fw-semibold">
                Image URL
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter the image URL"
                value={form.images}
                onChange={(e) =>

                  setForm({
                    ...form,
                    images: e.target.value
                  })

                }
              />

            </div>


            {/* DESCRIPTION */}

            <div className="mb-3">

              <label className="form-label fw-semibold">
                Description
              </label>

              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter the description"
                value={form.description}
                onChange={(e) =>

                  setForm({
                    ...form,
                    description: e.target.value
                  })

                }
              ></textarea>

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              className="btn btn-primary w-100"
            >

              {idd
                ? "Update Product"
                : "Add Product"}

            </button>


            {/* CANCEL */}

            {idd && (

              <button
                type="button"
                onClick={cancelUpdate}
                className="btn btn-secondary w-100 mt-2"
              >
                Cancel
              </button>

            )}

          </div>

        </form>

      )}


      {/* ========================= */}
      {/* PRODUCT CARDS */}
      {/* ========================= */}

      <div className="container mt-5">

        <div className="row g-4">

          {filteredProducts.map(
            (item) => (

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


                  {/* IMAGE */}

                  <img
                    src={item.images}
                    className="card-img-top"
                    alt={item.title}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />


                  <div className="card-body d-flex flex-column">


                    {/* TITLE */}

                    <h5 className="card-title fw-bold">
                      {item.title}
                    </h5>


                    {/* PRICE */}

                    <h4 className="text-success fw-bold">
                      ${item.price}
                    </h4>


                    {/* DESCRIPTION */}

                    <p
                      className={
                        darkMode
                          ? "card-text text-light"
                          : "card-text text-muted"
                      }
                    >
                      {item.description}
                    </p>


                    {/* RATING */}

                    <h6 className="text-warning mb-3">
                      ⭐ {item.rating}
                    </h6>


                    {/* BUTTONS */}

                    <div className="mt-auto">


                      {/* CART */}

                      <button
                        onClick={() =>
                          addtocart(item)
                        }
                        className="btn btn-primary w-100 mb-2"
                      >
                        🛒 Add to Cart
                      </button>


                      {/* WISHLIST */}

                      <button
                        onClick={() =>
                          toggleWishlist(item)
                        }
                        className="btn btn-warning w-100 mb-2"
                      >

                        {wishlist.some(
                          (obj) =>
                            obj.id === item.id
                        )
                          ? " Remove Wishlist"
                          : " Wishlist"}

                      </button>


                      {/* DELETE */}

                      <button
                        onClick={() =>
                          dellPro(item.id)
                        }
                        className="btn btn-success w-100 mb-2"
                      >
                        Delete the Product
                      </button>


                      {/* UPDATE */}

                      <button
                        onClick={() =>
                          updatePro(item)
                        }
                        className="btn btn-danger w-100"
                      >
                        Update the Product
                      </button>


                    </div>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </>

  );
};

export default Getapi;