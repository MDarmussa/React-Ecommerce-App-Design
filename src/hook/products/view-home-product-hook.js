import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/actions/productsAction';


function ViewHomeProductHook() {

     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(getAllProducts)
     }, [])

     //allProducts will store all the data. it will be sent as a hook or prop to HomePage.js
     const allProducts = useSelector((state) => state.allproducts.allProducts) //1's allProducts: is the array in productReducer in line 5 allProducts:[], the 2'd allProduct is inside case GET_All_PRODUCTS.
     let items = [];
     if(allProducts.data)
          items = allProducts.data.slice(0, 4) //bring the first 4 items from the index 'items=[]'
     else
          items = []
     return [items]
     
}

export default ViewHomeProductHook