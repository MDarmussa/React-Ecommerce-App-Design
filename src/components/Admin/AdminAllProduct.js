import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'

function AdminAllProduct({products}) {
  return (
     <div>
          <div className='admin-content-text'>Manage All Products</div>
          <Row className='justify-content-start'>
               {
                    products ? (
                         products.map((item, index) => <AdminAllProductsCard key={index} item={item} />)
                    ) : <h4>There Are No Products</h4>
               }
          </Row>  
     </div>
    
  )
}

export default AdminAllProduct