import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProducts } from '../../redux/actions/productsAction';
import mobile from '../../images/mobile.png'
import { getOneCategory } from '../../redux/actions/categoryAction';


function viewProductsDetailsHook(prodID) {

     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(getOneProducts(prodID))

     }, [])

     const oneProducts = useSelector((state) => state.allproducts.oneProduct)
     const oneCategory = useSelector((state) => state.allCategory.oneCategory) //allCategory is coming from the rootReducer.js //oneCategory is coming from categoryReducer.js

     //to show products item
     let item = [];
     if(oneProducts.data)
          item = oneProducts.data
     else
          item = []

     useEffect(() => {
          if(item.category)
               dispatch(getOneCategory(item.category))
     }, [item])

     //to view images galary
     let images = []
     if(item.images)
          images = item.images.map((img) =>{return {original: img}}) 
     else 
     {
          images = [{original: `${mobile}`}]
     }

     //to show category item
     let cat = [];
     if(oneCategory.data)
          cat = oneCategory.data
     else
          cat = []

     return [item, images, cat]
     
}

export default viewProductsDetailsHook