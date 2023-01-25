import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getAllProductsPage } from '../../redux/actions/productsAction';


function ViewhProductAdminHook() {

     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(getAllProducts(2)) //only show 10 products in admin page (Products Management)
     }, [])

     const onPress = async (page) => {
          await dispatch(getAllProductsPage(page, 2))
     }

     let items = [];
     let pagination = [];

     const allProducts = useSelector((state) => state.allproducts.allProducts)
     
     try {
          if(allProducts.data)
               items = allProducts.data;
          else
               items = []

          
          if(allProducts.paginationResult)
               pagination = allProducts.paginationResult.numberOfPages;
          else
               pagination = []
     } catch (e) {}

     return [items, pagination, onPress] 
}

export default ViewhProductAdminHook