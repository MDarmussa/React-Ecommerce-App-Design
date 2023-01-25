import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getAllProductsPage } from '../../redux/actions/productsAction';


function ViewSearchProductHook() {

     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(getAllProducts(12))
     }, [])

     const allProducts = useSelector((state) => state.allproducts.allProducts)
     let items = [];
     if(allProducts.data)
          items = allProducts.data.slice(0, 4) 
     else
          items = []

     let pagination = [];
     if(allProducts.paginationResult)
          pagination = allProducts.paginationResult.numberOfPages;
     else
          pagination = []

     const onPress = async (page) => {
          await dispatch(getAllProductsPage(page, 2))
     }

     return [items, pagination, onPress]
}

export default ViewSearchProductHook