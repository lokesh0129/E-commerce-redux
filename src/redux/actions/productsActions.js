import { ActionTypes } from '../constants/action-types';
import ShopApi from '../../apis/ShopApi';


export const fetchProducts = () =>{
    
    return async function (dispatch){
        try{
            const response = await ShopApi.get('/products');
            dispatch  ({
                type: ActionTypes.FETCH_PRODUCTS,
                payload: response.data
            })
        }catch(err){
            console.log(err);
        }
    }
     
}


export const fetchProduct = (id) =>{
    
    return async function (dispatch){
        try{
            const response = await ShopApi.get(`/products/${id}`);
            dispatch  ({
                type: ActionTypes.SELECTED_PRODUCT,
                payload: response.data
            })
        }catch(err){
            console.log(err);
        }
    }
     
}


export const setProducts =products => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
}
}
export const selectedProduct = product =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}


export const removeSelectedProduct =() =>{
    return { type: ActionTypes.REMOVE_SELECTED_PRODUCT}
}

