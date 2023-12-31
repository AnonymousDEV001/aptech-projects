import React, { useEffect, useState } from "react";
import ImagesCss from "./Css/Images.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productRemove } from "../../ReduxStore/Reducers/productSlice";

function Images() {
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [shownImages, setShownImages] = useState(4);

  const state = useSelector((state) => state.productFetch);
  const auth = useSelector((state) => state.auth.user);

  const deleteProduct = async (id) => {
    try {
      const url = "http://127.0.0.1:8000/deleteproduct";
      await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + String(auth.access),
        },
        body: JSON.stringify({ id: id }),
      });
          } catch (error) {
      console.log(error.message)
    }

    dispatch(productRemove(id));
  };

  useEffect(() => {
    if (state.productDetails.products !== null) {
      return setImages(state.productDetails.products);
    }
  }, [state]);

  return (
    <div className="flex center">
    <div className={ImagesCss.images}>
      <h3 className="active">Images</h3>
      <Link to={"/addimage"}>
        <button>Add Image</button>
      </Link>
      <div className={ImagesCss.imageCards}>
        {images.slice(0, shownImages).map((product) => {
          return (
            <div key={product.id} className={ImagesCss.imageCard}>
              <img src={product.ImageUrl} />
              <div className={ImagesCss.options}>
                <Link to={`/updateproduct/${product.id}`}>
                  <p>Edit</p>
                </Link>
                <p
                  onClick={() => {
                    deleteProduct(product.id);
                  }}
                >
                  Delete
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={ImagesCss.loadBtn}>
        <button
          style={shownImages > images.length ? { display: "none" } : {}}
          onClick={() => {
            setShownImages(shownImages + 4);
          }}
        >
          LOAD MORE
        </button>
      </div>
    </div>
    </div>
  );
}

export default Images;
