import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createOrderCash } from '../../redux/actions/checkoutAction'
import { getOneUserAddress } from '../../redux/actions/userAddressesAction'
import GetAllUserCartHook from '../cart/get-all-user-cart-hook'
import notify from '../useNotifaction'

function OrderPayCashHook() {
     const navigat = useNavigate()
     const [, , , , , cartID] = GetAllUserCartHook()
     console.log(cartID)

     const dispatch = useDispatch()
     const [loading, setLoading] = useState(true)
     const [loadingCreate, setLoadingCreate] = useState(true)
     const [addressDetails, setAddressDetails] = useState([])
  
     //when change addresses from drop menu by user
     const handleChooseAddress = (e) => {
          setAddressDetails([]) //when click the button, it will clear the old data in the array and fill it up with new data.
          if(e.target.value != '0') {
               get(e.target.value);
          } 
     }

     const get = async (id) => {
          setLoading(true)
          await dispatch(getOneUserAddress(id))
          setLoading(false)
     }
     
     //get address details for user
     const resAddress = useSelector(state => state.userAddressesReducer.oneAddress)
     useEffect(() => {
          if(loading === false) {
               if(resAddress && resAddress.status === "success") {
                    setAddressDetails(resAddress.data)
               } else {
                    setAddressDetails([])
               }
          }
     }, [loading])

     //complete payment
     const HandlcreateOrderCash = async () => {
          if(cartID === "0") {
               notify('Please add items in your cart', 'warn')
               return
          }
          if(addressDetails.length <= 0) {
               notify('Please Choose Address First', 'warn')
               return
          }
          setLoadingCreate(true)
          await dispatch(createOrderCash(cartID, {
               shippingAddress:{
                    details: addressDetails.alias,
                    phone: addressDetails.phone,
                    city: "",
                    postalCode: ""
               }
          }))
          setLoadingCreate(false)
     }

          //get response when creating an order
          const resOrderCash = useSelector(state => state.checkoutReducer.createOrderCash)
          useEffect(() => {
               if(loadingCreate === false) {
                    if(resOrderCash && resOrderCash.status === 201) {
                         notify("Order Completed Successfully", "success")
                         setTimeout(() => {
                              navigat('/user/allorders')
                         }, 1500)
                    } else {
                         notify("Order Fail, Try Again", "warn")
                    }
               }
          }, [loadingCreate])



     return [handleChooseAddress, addressDetails, HandlcreateOrderCash]
}

export default OrderPayCashHook