import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);

  const { image, title, price, description, category } = product;
  const dispatch = useDispatch();
  console.log(product);

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui">
      {Object.keys(product).length === 0 ? (
        <div></div>
      ) : (
        // className='ui active centered inline loader'
        <div className="segment">
          {/* className='ui placeholder segment' */}
          <div>
            {/* className='ui two   stackable center aligned grid' */}

            <div className="aligned ">
              {/* className='middle aligned row' */}
              <div className="column lp">
                <img
                  className="fluid_image"
                  id="frame"
                  src={image}
                  alt={title}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>AND</div>
              {/* className='ui vertical divider' */}
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a>${price}</a>
                  {/* className='ui teal tag label' */}
                </h2>
                <h3 className="header">{category}</h3>
                {/* ui brown block  */}
                <p>{description}</p>
                <div className="animated " id="card" tabIndex="0">
                  {/* <div className='hidden content'>
                    <i className='shop icon'></i>
                   </div> */}
                  <button className="ani_button">Add to cart</button>
                  {/* <div className='visible content'>Add to cart</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
