import React, { useEffect, useState } from "react";
import ProductCss from "./Css/ProductSection.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductSection() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [extraDetails, setExtraDetails] = useState({});
  const params = useParams();
  const productDetails = useSelector(
    (state) => state.productFetch.productDetails
  );

  useEffect(() => {
    try {
      if (productDetails.products !== null) {
        let product = productDetails.products.filter(
          (product) => product.id == params.id
        );
        setProduct(product[0]);
        setExtraDetails({
          specifications: JSON.parse(product[0].Specifications),
          additionalFeatures: JSON.parse(product[0].AdditionalFeatures),
        });
      }
    } catch (error) {
      console.log(error.message)
    }
  }, [productDetails]);

  function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    lens = document.getElementById("img-zoom-lens-id");
    /*insert lens:*/
    /*calculate the ratio between result DIV and lens:*/
    if (
      result.offsetWidth / lens.offsetWidth == 0 ||
      result.offsetHeight / lens.offsetHeight == 0
    ) {
      cx = 2;
      cy = 2;
    } else {
      cx = result.offsetWidth / lens.offsetWidth;
      cy = result.offsetHeight / lens.offsetHeight;
    }
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize =
      img.width * cx + "px " + img.height * cy + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - lens.offsetWidth / 2;
      y = pos.y - lens.offsetHeight / 2;
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) {
        x = img.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > img.height - lens.offsetHeight) {
        y = img.height - lens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
    }
    function getCursorPos(e) {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }
  function showMag() {
    document.querySelector("#img-zoom-lens-id").style.display = "block";
    document.querySelector("#myresult").style.display = "block";
    imageZoom("myimage", "myresult");
  }
  function hideMag() {
    document.querySelector("#myresult").style.display = "none";
    document.querySelector("#img-zoom-lens-id").style.display = "none";
  }

  return (
    <div className={`flex ${ProductCss.productSection}`}>
      <div class={ProductCss.imgZoomContainer}>
        <div className={ProductCss.imgZoomLens} id="img-zoom-lens-id"></div>
        <img
          onMouseOver={()=>{
            let width = window.innerWidth
            if(width < 1200) return 
            showMag()
          }}
          onMouseOut={hideMag}
          id="myimage"
          src={product.ImageUrl}
        />
        <div id="myresult" class={ProductCss.imgZoomResult}></div>
      </div>
      <div className={ProductCss.productDetails}>
        <div className={ProductCss.description}>
          <h3 className="active">{product.Title}</h3>
          <p>{product.Description}</p>

          <h3 className="active">Specifications:</h3>
          <ul>
            {extraDetails.specifications &&
              extraDetails.specifications.map((specification) => (
                <li>{specification.value}</li>
              ))}
          </ul>
          <h3 className="active">Additional Features:</h3>
          <ul>
            {extraDetails.additionalFeatures &&
              extraDetails.additionalFeatures.map((feature) => (
                <li>{feature.value}</li>
              ))}
          </ul>
          <p>Availability: TRUE</p>

          <form className={ProductCss.form}>
            <div className={ProductCss.formBtn}>
              <div
                className={`${ProductCss.valueButton}  ${ProductCss.decrease}`}
                id="decrease"
                onClick={() => {
                  if(quantity===0){
                    return
                  }
                  setQuantity(quantity - 1);
                }}
              >
                -
              </div>
              <input className={ProductCss.number} value={quantity} />
              <div
                className={`${ProductCss.valueButton}  ${ProductCss.increase}`}
                id="increase"
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                +
              </div>
            </div>
            <button>Add To Cart</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
