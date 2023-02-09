import React from 'react'
import { Row } from 'react-bootstrap'
import UserGetAllOrdersHook from '../../hook/user/user-get-all-orders-hook'
import Pagination from '../Utilities/Pagination'
import AdminAllOrdersItem from './AdminAllOrdersItem'

function AdminAllOrders() {

     const [userName, results, paginate, orderData, onPress] = UserGetAllOrdersHook()



  return (
     <div>

          <div className='admin-content-text'>Manage All Orders</div>
          <Row className='justify-content-start'>
               {
                    orderData.length >= 1 ? (orderData.map((orderItem, index) => {
                         return <AdminAllOrdersItem key={index} orderItem={orderItem} />
                    })) : <h6>You Don't Have Orders in Your Cart</h6>
               }


               {
                    paginate.numberOfPages >= 2 ? (
                         <Pagination onPress={onPress} pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0} />
                    ) : null
               }
              
          </Row>  
     </div>
  )
}

export default AdminAllOrders