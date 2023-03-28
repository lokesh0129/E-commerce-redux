import React, { useEffect } from 'react'
import ProductComponents from './ProductComponents'
import { useDispatch } from 'react-redux'
import {fetchProducts} from '../redux/actions/productsActions'

const ProductListing = () => {
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(fetchProducts());
  }, []);
  
  return (
    <div id='product' className='ui grid container'>
         <ProductComponents />
    </div>
  )
}

export default ProductListing