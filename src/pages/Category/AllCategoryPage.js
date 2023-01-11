import React, { useEffect } from 'react'
import Pagination from '../../components/Utilities/Pagination'
import CategoryContainer from '../../components/Category/CategoryContainer'

import { useSelector, useDispatch } from 'react-redux' //useDispatch: to fire the method in actions file (ex: getAllCategory)
import { getAllCategory } from '../../redux/actions/categoryAction'


function AllCategoryPage() {

  const dispatch=useDispatch()
  
  useEffect(() => {
    dispatch(getAllCategory())
  })

  const data = useSelector(state => state.allCategory.category) //allCategory: from rootReducer, category: from categoryReducer
  const loading = useSelector(state => state.allCategory.loading)

  console.log(data)
  console.log(loading)

  return (
    <div style={{minHeight: '670px'}}>
     <CategoryContainer />
     <Pagination />
    </div>
  )
}

export default AllCategoryPage