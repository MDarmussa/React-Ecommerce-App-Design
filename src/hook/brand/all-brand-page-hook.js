import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux' //useDispatch: to fire the method in actions file (ex: getAllBrand)
import { getAllBrandPage, getAllBrand } from '../../redux/actions/brandAction'


function AllBrandHook() {

  const dispatch=useDispatch()
  //when first load
  useEffect(() => {
    dispatch(getAllBrand(4)) //should be similar to # of limit in getAllBrandPage method in brandAction.js
  }, [])

  const brand = useSelector(state => state.allBrand.brand) //allBrand: from rootReducer, brand: from brandReducer
  const loading = useSelector(state => state.allBrand.loading)

  //to get page count
  let pageCount = 0;
  if(brand.paginationResult)
    pageCount = brand.paginationResult.numberOfPages

    //when press pagination
  const getPage=(page)=> {
    dispatch(getAllBrandPage(page))
    console.log(page)
  }
       //paginationResult.numberOfPages: both are from backend //see postman in Get All Brand test


  return [brand, loading, pageCount, getPage]
};

export default AllBrandHook;