import React from 'react'
import Pagination from '../../components/Utilities/Pagination'
import CategoryContainer from '../../components/Category/CategoryContainer'

function AllCategoryPage() {
  return (
    <div style={{minHeight: '670px'}}>
     <CategoryContainer />
     <Pagination />
    </div>
  )
}

export default AllCategoryPage