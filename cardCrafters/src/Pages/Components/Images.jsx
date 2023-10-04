import React, { useEffect, useState } from "react";
import ImagesCss from "./Css/Images.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Images() {
  const [images, setImages] = useState([]);
  const [shownImages, setShownImages] = useState(4);

  const state = useSelector((state) => state.productFetch);

  useEffect(() => {
    if (state.productDetails.products !== null) {
      return setImages(state.productDetails.products);
    }
  }, [state]);

  return (
    <div className={ImagesCss.images}>
      <h3 className="active">Images</h3>
      <Link to={'/addimage'}>
      <button>Add Image</button>
      </Link>
      <div className={ImagesCss.imageCards}>
        {images.slice(0, shownImages).map((product) => {
          return (
            <div key={product.id} className={ImagesCss.imageCard}>
              <img src={product.ImageUrl} />
              <div className={ImagesCss.options}>
                <p>Edit</p>
                <p>Delete</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={ImagesCss.loadBtn}>
        <button
        style={shownImages > images.length ?{display:"none"}:{}}
          onClick={() => {
            setShownImages(shownImages + 4);
          }}
        >
          LOAD MORE
        </button>
      </div>
    </div>
  );
}

export default Images;
