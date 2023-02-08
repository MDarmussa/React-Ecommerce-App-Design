import React from 'react'
import { Row } from 'react-bootstrap'
import UserGetAllOrdersHook from '../../hook/user/user-get-all-orders-hook'
import UserAllOrderItem from './UserAllOrderItem'
import Pagination from '../Utilities/Pagination'

function UserAllOrder() {


     const [userName, results, paginate, orderData, onPress] = UserGetAllOrdersHook()

     console.log(paginate)

  return (
     <div>
          <div className="admin-content-text pb-4"> Number of Orders: {results}</div>
               <Row className='justify-content-between'>

               {
                    orderData.length >= 1 ? (orderData.map((orderItem, index) => {
                         return <UserAllOrderItem key={index} orderItem={orderItem} />
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

export default UserAllOrder