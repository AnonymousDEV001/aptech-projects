import React,{useRef,useEffect} from 'react'
import SigninComponent from './Components/SigninComponent'
import { Navigate } from "react-router-dom";

function Sigin() {
  const accessToken = localStorage.getItem("accessToken");

  //navigating if token does not exist
  if (accessToken && JSON.parse(accessToken).access !== undefined) {
    return <Navigate to="/dashboard" />;
  }
  
  let fade = useRef();
  useEffect(() => {
    scrollTo(0,0)
    // Using setTimeout to apply opacity change after a short delay
    setTimeout(() => {
      fade.current.style.opacity = "1";
    }, 100); // Adjust the delay as needed
  }, []);

  return (
    <div style={{ opacity: "0", transition: "all 1.5s" }} ref={fade}>
        <SigninComponent/>
    </div>
  )
}

export default Sigin
