import React, { useEffect, useState } from "react";
import ImagesCss from "./Css/Images.module.css";

function Images() {
  const [images, setImages] = useState([]);
  const [shownImages, setShownImages] = useState(4);
  useEffect(() => {
    let fetchingData = async () => {
      let url = "http://127.0.0.1:8000/getproducts/";
      let response = await fetch(url);
      response = await response.json();
      setImages(response);
      console.log(response[0].ImageUrl);
    };
    fetchingData();
  }, []);
  return (
    <div className={ImagesCss.images}>
      <h3 className="active">Images</h3>
      <button>Add Image</button>
      <div className={ImagesCss.imageCards}>
        {images.slice(0, shownImages).map((product) => {
          return (
            <div className={ImagesCss.imageCard}>
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
