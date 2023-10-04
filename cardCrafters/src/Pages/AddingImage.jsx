import React, { useState } from "react";
import ImagesCss from "./Components/Css/Images.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addSpecifications,
  removeSpecifications,
  updateSpecifications,
  addAdditionalFeature,
  updateAdditionalFeature,
  removeAdditionalFeature,
} from "../ReduxStore/Reducers/addProductSlice";

export default function AddingImage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.addProduct);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [catagory, setCatagory] = useState("");

  const uploadProduct = async (e) => {
    try {
      e.preventDefault();
      if (
        title === "" ||
        description === "" ||
        imageUrl === "" ||
        catagory === "Catagory" ||
        state.specifications.lenght === 0 ||
        state.additionalFeatures.length === 0
      ) {
        return;
      }
      let url = "http://127.0.0.1:8000/upload/";
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Title: title,
          Description: description,
          ImageUrl: imageUrl,
          Catagory: catagory,
          Specifications: JSON.stringify(state.specifications),
          AdditionalFeatures: JSON.stringify(state.additionalFeatures),
        }),
      });
      console.log(await response.json());
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={ImagesCss.addingImage}>
      <h3 className="active">Add Product</h3>

      <form onSubmit={uploadProduct}>
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
          {state.specifications.map((specification) => (
            <div className={ImagesCss.specificationInput}>
              <span
                onClick={() => {
                  dispatch(removeSpecifications(specification.id));
                }}
                class={`material-symbols-outlined ${ImagesCss.close}`}
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
          {state.additionalFeatures.map((feature) => (
            <div className={ImagesCss.specificationInput}>
              <span
                onClick={() => {
                  dispatch(removeAdditionalFeature(feature.id));
                }}
                class={`material-symbols-outlined ${ImagesCss.close}`}
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
        <button>Save</button>
      </form>
    </div>
  );
}
