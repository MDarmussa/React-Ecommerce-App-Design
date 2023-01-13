import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'



function HomeCategoryHook() {

  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getAllCategory())
  }, [])

  //get last category state
  const category = useSelector(state => state.allCategory.category) //allCategory: from rootReducer, category: from categoryReducer
  //get last loading state from redux
  const loading = useSelector(state => state.allCategory.loading)
  console.log(loading)
  
  const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF"]


  return [category, loading, colors]
}

export default HomeCategoryHook