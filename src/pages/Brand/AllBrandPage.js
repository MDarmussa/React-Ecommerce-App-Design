import React from 'react'
import BrandContainer from '../../components/Brand/BrandContainer'
import Pagination from '../../components/Utilities/Pagination'


function AllBrandPage() {
  return (
    <div style={{minHeight: '670px'}}>
      <BrandContainer />
      <Pagination />
    </div>
  )
}

export default AllBrandPage