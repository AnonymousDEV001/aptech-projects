import React, { useEffect,useRef } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProductSection from './Components/ProductSection'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts } from '../ReduxStore/Reducers/productSlice'


function Product() {

  let fade = useRef();
  useEffect(() => {
    scrollTo(0,0)
    // Using setTimeout to apply opacity change after a short delay
    setTimeout(() => {
      fade.current.style.opacity = "1";
    }, 100); // Adjust the delay as needed
  }, []);

  const dispatch = useDispatch()
  const productDetails = useSelector((state)=> state.productFetch.productDetails)

  useEffect(()=>{
    if(productDetails.products === null){
      dispatch(fetchProducts())
      
    }
  },[])
  return (
    <div style={{ opacity: "0", transition: "all 1.5s" }} ref={fade}>
      <Navbar/>
      <ProductSection/>
      <Footer/>
    </div>
  )
}

export default Product
