import React, { useEffect, useState } from "react";
import SigninComponentCss from "./Css/SigninComponent.module.css";
import { useDispatch } from "react-redux";
import { fetchAuth } from "../../ReduxStore/Reducers/authSlice";

function SigninComponent(e) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchAuth({ username: email, password: password }));
  };


  return (
    <div className="flex">
      <div className={SigninComponentCss.left}></div>
      <div className={SigninComponentCss.right}>
        <div>
          <h3 className="active">Signin</h3>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
              placeholder="Password"
            />
            <button>Signin</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SigninComponent;
