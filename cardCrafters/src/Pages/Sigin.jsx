import React from 'react'
import SigninComponent from './Components/SigninComponent'
import { Navigate } from "react-router-dom";

function Sigin() {
  const accessToken = localStorage.getItem("accessToken");

  //navigating if token does not exist
  if (accessToken && JSON.parse(accessToken).access !== undefined) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
        <SigninComponent/>
    </div>
  )
}

export default Sigin
