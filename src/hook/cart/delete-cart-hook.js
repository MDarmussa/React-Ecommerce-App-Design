import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearAllCartItem, clearOneCartItem, updateCartItem } from '../../redux/actions/cartAction';
import notify from '../useNotifaction'


function DeleteCartHook(item) { //itemID: parameter is coming from CartItem
     
     const dispatch = useDispatch()

     // 1) Clear basket - all items

     const [loading, setLoading] = useState(true)

     const handleDeleteCart = async () => {
          setLoading(true)
          await dispatch(clearAllCartItem())
          setLoading(false)
     }
   
     const res = useSelector(state => state.cartReducer.clearCart)

     useEffect(() => {
          if(loading === false) {
               if(res === "") {
                    notify("Basket Cleared Successfully", "success")
                    setTimeout(() => {
                         window.location.reload(false)
                    }, 1000)
               } else {
                    notify("failed deleting", "error")
               }
          }
     }, [loading])


     // 2) delete one item in the basket ---below---

     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     const handleDeleteItem = async () => {
          await dispatch(clearOneCartItem(item._id))
          setShow(false);
          window.location.reload(false);
     }

     useEffect(() => {
          if(loading === false) {
               if(res === "") {
                    notify("Basket Cleared Successfully", "success")
                    setTimeout(() => {
                         window.location.reload(false)
                    }, 1000)
               } else {
                    notify("failed deleting", "error")
               }
          }
     }, [loading])


     // 3) count items - basket - to add items from the same product
     const [itemCount, setItemCount] = useState(0)

     const onChangeCount = (e) => {
          setItemCount(e.target.value)
     }

     useEffect(() => {
          if(item) {
               setItemCount(item.count)
          }
     }, [])


     const handleUpdateCart = async () => {
          await dispatch(updateCartItem(item._id, {
               count: itemCount
          }))
          window.location.reload(false);
     }


     return[handleDeleteCart, show, handleClose, handleShow, handleDeleteItem, itemCount, onChangeCount, handleUpdateCart]
}

export default DeleteCartHook