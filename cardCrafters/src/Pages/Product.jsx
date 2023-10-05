import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProductSection from './Components/ProductSection'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts } from '../ReduxStore/Reducers/productSlice'


function Product() {
  const dispatch = useDispatch()
  const productDetails = useSelector((state)=> state.productFetch.productDetails)

  useEffect(()=>{
    if(productDetails.products === null){
      dispatch(fetchProducts())
      
    }
  },[])
  return (
    <div>
      <Navbar/>
      <ProductSection/>
      <Footer/>
    </div>
  )
}

export default Product
