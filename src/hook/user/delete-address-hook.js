import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAddress } from '../../redux/actions/userAddressesAction';
import notify from '../../hook/useNotifaction'


function DeleteAddressHook(id) {

     const dispatch = useDispatch()

     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     const [loading, setLoading] = useState(true)

     const handleDelete = async () => {
          setLoading(true)
          await dispatch(deleteUserAddress(id))
          setLoading(false)
          setShow(false);
     }

     // ### Code above is to delete address. ###
     // ### Code below is to create notification and load the page then refresh it using reload() method. Through the res, we can get the status and compare the values ###
     const res = useSelector(state => state.userAddressesReducer.deleteAddress)

     useEffect(() => {
       if(loading === false){
          if(res && res.status === "success") {
               notify("Address Deleted Successfully", "success")
               setTimeout(() => {
                    window.location.reload();
               }, 1000)
          } else {
               notify("Delete Failed", "warn")
            }
       }   
     }, [loading])
     

     return [show, handleClose, handleShow, handleDelete]
}

export default DeleteAddressHook