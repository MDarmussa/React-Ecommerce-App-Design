import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsByBrand, getAllProductsByCategory } from '../../redux/actions/productsAction';

function ViewAllProductsBrandHook(brandID) {
     let limit = 4
     const dispatch = useDispatch();

     const getProduct = async () => {
          await dispatch(getAllProductsByBrand('', limit, brandID))
     }

     useEffect(() => {
          getProduct()
     }, [])

     //when user click pagination
     const onPress = async (page) => {
          await dispatch(getAllProductsByBrand(page, limit, brandID))
     }

     const allBrands = useSelector((state) => state.allproducts.allProductsBrand) //allproducts is from rootreducer. 

     
     let items = []; let pagination = [];

     try {
          if(allBrands.data)
               items = allBrands.data
          else
          items = []
     } catch(e) { }

     try {
          if(allBrands.paginationResult)
               pagination = allBrands.paginationResult.numberOfPages;
          else
               pagination = []
     } catch(e) { }


     return [items, pagination, onPress]
}

export default ViewAllProductsBrandHook