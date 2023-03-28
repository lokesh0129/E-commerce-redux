import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);
   
  const renderList = products.map(product =>{
    const {id,title,image,price, category}=product;
  return (
    <div className='four wide column ' key={id}>
         <a href={`./product/${id}`}>
            <div id="container" className='ui link card '>
                  <div className='card'>
                    <div className='image'>
                      <img src={image} alt={title} />
                    </div>

                        <div className='content'>
                          <div className='header' style={{color:'black', fontWeight:'bold'}}>{title}</div>
                          <div className='meta '>$ {price}</div>
                          {/* price */}
                          <div className='meta '>{category}</div>
                          {/* category */}
                        </div>
                    
                  </div>
            </div>
         </a>
    </div>
  )
})

return <>{renderList}</>;
}

export default ProductComponents