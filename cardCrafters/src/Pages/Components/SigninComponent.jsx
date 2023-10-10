import React, { useState } from "react";
import SigninComponentCss from "./Css/SigninComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth } from "../../ReduxStore/Reducers/authSlice";
import Loading from "./Loading";

function SigninComponent(e) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useSelector((state)=>state.auth)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchAuth({ username: email, password: password }));
    console.log(auth.loading)
  };


  return (
    <div className="flex wrap">
      <div className={SigninComponentCss.left}>
        <div className={SigninComponentCss.wlcmSignin}>
        <h3>Welcome back! It's great to see you again!"</h3>
        <p>Enter your credentials below to access your account.</p>
        </div>
      </div>
      <div className={SigninComponentCss.right}>
        <div  className="flex column center w-90">
          <h3 className="active">Signin</h3>
          <form className={SigninComponentCss.form} onSubmit={handleSubmit}>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="text"
              placeholder="Email"
              required
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
              placeholder="Password"
              required
            />
            <div className={SigninComponentCss.formBtn}>
            {auth.error !== null && <p style={{color:"red"}}>Something went wrong</p>}
            <button>{auth.loading ? <Loading/> : "Signin" }</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SigninComponent;
