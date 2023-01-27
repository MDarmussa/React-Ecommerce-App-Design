import React from 'react'
import Pagination from '../../components/Utilities/Pagination'
import CategoryContainer from '../../components/Category/CategoryContainer'
import AllCategoryHook from '../../hook/category/all-category-page-hook'




function AllCategoryPage() {

 const[category, loading, pageCount, getPage] = AllCategoryHook();


  return (
    <div style={{minHeight: '670px'}}>
     <CategoryContainer data={category.data} loading={loading} />
     {
        pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={getPage} />) : null
     }

    </div>
  )
}

export default AllCategoryPage