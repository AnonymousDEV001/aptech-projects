import React, { useState } from "react";
import ImagesCss from "./Components/Css/Images.module.css";

export default function AddingImage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [catagory, setCatagory] = useState("");

  const uploadProduct = async (e) => {
    try {
      e.preventDefault();
      let url = "http://127.0.0.1:8000/upload/";
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Title: title,
          Description: description,
          ImageUrl: imageUrl,
          Catagory: catagory,
        }),
      });
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
        <div>
          <input placeholder="Specifications" />
        </div>
        <div>
          <input placeholder="Additional Features" />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
}
