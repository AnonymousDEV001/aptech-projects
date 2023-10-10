import React, { useEffect, useState } from "react";
import ImagesCss from "./Components/Css/Images.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams,useNavigate,Navigate  } from "react-router-dom";
import {
  addSpecifications,
  removeSpecifications,
  updateSpecifications,
  addAdditionalFeature,
  updateAdditionalFeature,
  removeAdditionalFeature,
  cleanSpecifications,
  cleanAdditionalFeatures,
  addAndUpdateSpecifications,
  addAndUpdateAdditionalFeatures,
} from "../ReduxStore/Reducers/addProductSlice";

import { productAdd } from "../ReduxStore/Reducers/productSlice";
import Loading from "./Components/Loading";

export default function AddingImage() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //for adding product
  const state = useSelector((state) => state.addProduct);

  //for updating product
  const products = useSelector(
    (state) => state.productFetch.productDetails.products
  );
  const auth = useSelector((state)=>state.auth.user)

  // for both adding and updating products
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [catagory, setCatagory] = useState("");
  const [error, setError] = useState("");
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    //for user to updating product details
    
    if (location.pathname === `/updateproduct/${params.id}`) {
      if (products !== null) {
        //filling form fields

        let product = products.filter((product) => product.id == params.id);
        setTitle(product[0].Title);
        setDescription(product[0].Description);
        setImageUrl(product[0].ImageUrl);
        setCatagory(product[0].Catagory);
        let specifications = JSON.parse(product[0].Specifications);
        let additionalFeatures = JSON.parse(product[0].AdditionalFeatures);

        dispatch(addAndUpdateSpecifications(specifications));
        dispatch(addAndUpdateAdditionalFeatures(additionalFeatures));
      }
    }
  }, [products]);
  
  //for both adding and updating products
  const uploadProduct = async (e) => {
    setLoading(true)
    try {
      let pass = true;
      e.preventDefault();
      if (
        title === "" ||
        description === "" ||
        imageUrl === "" ||
        catagory === "Catagory" ||
        state.specifications.length === 0 ||
        state.additionalFeatures.length === 0
      ) {
        setLoading(false)
        return setError("Please fill all fields");
      }

      state.specifications.forEach((element) => {
        if (element.value === "") {
          pass = false;
        }
      });
      if (!pass) {
        setLoading(false)
        return setError("Please fill all fields");
      }
      //for adding products
      let url = "http://127.0.0.1:8000/upload/";
      let method = "POST"
      let body = JSON.stringify({
        Title: title,
        Description: description,
        ImageUrl: imageUrl,
        Catagory: catagory,
        Specifications: JSON.stringify(state.specifications),
        AdditionalFeatures: JSON.stringify(state.additionalFeatures),
      });

      //for updating products
      if (location.pathname === `/updateproduct/${params.id}`) {
        url = "http://127.0.0.1:8000/updateproduct/";
        method = "PUT"
        body = JSON.stringify({
          id: parseInt(params.id),
          Title: title,
          Description: description,
          ImageUrl: imageUrl,
          Catagory: catagory,
          Specifications: JSON.stringify(state.specifications),
          AdditionalFeatures: JSON.stringify(state.additionalFeatures),
        });
      }

      let response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer " + String(auth.access)
        },
        body: body,
      });

      setError("");
      response = await response.json();
      response = await JSON.parse(response.product);

      alert(
        `Product Sucessfully ${
          location.pathname === `/updateproduct/${params.id}`
            ? `Updated`
            : `Added`
        }`
      );
      
      setTitle("");
      setDescription("");
      setImageUrl("");
      setCatagory("Catagory");
      dispatch(cleanSpecifications([]));
      dispatch(cleanAdditionalFeatures([]));
      response[0].fields.id = response[0].pk;
      
      //for adding product for dashboard if user was adding product instead of updating product
      if(location.pathname === "/addimage"){
        dispatch(productAdd(response[0].fields));
      }
      navigate('/dashboard');
    } catch (error) {
      setError("Some error occurred");
      console.log(error.message);
    }
    setLoading(false)
  };
  
  //navigating if token does not exist
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken && JSON.parse(accessToken).access === undefined) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex center">
    <div className={ImagesCss.addingImage}>
      <h3 className="active">{location.pathname === `/updateproduct/${params.id}`?"Uodate Product":`Add Product`}</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />

        <textarea
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
        <input
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
          value={imageUrl}
          placeholder="Image Url"
        />
        <select
          value={catagory}
          onChange={(e) => {
            setCatagory(e.target.value);
          }}
        >
          <option value="Catagory">Catagory</option>
          <option value="Birthdays">Birthdays</option>
          <option value="Weaddings">Weaddings</option>
          <option value="Holidays">Holidays</option>
          <option value="Anniversaries">Anniversaries</option>
          <option value="Graduations">Graduations</option>
          <option value="Thank You">Thank You</option>
        </select>
        <div className={`flex ${ImagesCss.specifications}`}>
          {state.specifications.map((specification, index) => (
            <div key={index} className={ImagesCss.specificationInput}>
              <span
                onClick={() => {
                  dispatch(removeSpecifications(specification.id));
                }}
                className={`material-symbols-outlined ${ImagesCss.close}`}
              >
                cancel
              </span>
              <input
                value={specification.value}
                onChange={(e) => {
                  dispatch(
                    updateSpecifications({
                      id: specification.id,
                      value: e.target.value,
                    })
                  );
                }}
                placeholder="Specifications"
              />
            </div>
          ))}

          <button
            onClick={() => {
              dispatch(addSpecifications(""));
            }}
          >
            Add Specification
          </button>
        </div>

        <div className={`flex ${ImagesCss.specifications}`}>
          {state.additionalFeatures.map((feature, index) => (
            <div key={index} className={ImagesCss.specificationInput}>
              <span
                onClick={() => {
                  dispatch(removeAdditionalFeature(feature.id));
                }}
                className={`material-symbols-outlined ${ImagesCss.close}`}
              >
                cancel
              </span>
              <input
                value={feature.value}
                onChange={(e) => {
                  dispatch(
                    updateAdditionalFeature({
                      id: feature.id,
                      value: e.target.value,
                    })
                  );
                }}
                placeholder="Additional Features"
              />
            </div>
          ))}

          <button
            onClick={() => {
              dispatch(addAdditionalFeature(""));
            }}
          >
            Add Additional Features
          </button>
        </div>
        {error ? <p style={{ color: "red" }}>Error: {error}</p> : null}
        <button onClick={uploadProduct}> {loading ? <Loading/> : "Save"}</button>
      </form>
    </div>
    </div>
  );
}
