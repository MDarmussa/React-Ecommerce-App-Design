import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux' //useDispatch: to fire the method in actions file (ex: getAllCategory)
import { getAllCategory, getAllCategoryPage } from '../../redux/actions/categoryAction'


function AllCategoryHook() {

  const dispatch=useDispatch()
  //when first load
  useEffect(() => {
  dispatch(getAllCategory(6)) //should be similar to # of limit in getAllCategoryPage method in categoryAction.js
  }, [])

  const category = useSelector(state => state.allCategory.category) //allCategory: from rootReducer, category: from categoryReducer
  const loading = useSelector(state => state.allCategory.loading)

  //to get page count
  let pageCount = 0;
  if(category.paginationResult)
    pageCount = category.paginationResult.numberOfPages

    //when press pagination
  const getPage=(page)=> {
    dispatch(getAllCategoryPage(page))
    console.log(page)
  }
       //paginationResult.numberOfPages: both are from backend //see postman in Get All Category test


  return [category, loading, pageCount, getPage]
};

export default AllCategoryHook;