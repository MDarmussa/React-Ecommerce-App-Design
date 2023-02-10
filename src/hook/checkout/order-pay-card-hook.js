import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createOrderCard, createOrderCash } from '../../redux/actions/checkoutAction'
import { getOneUserAddress } from '../../redux/actions/userAddressesAction'
import GetAllUserCartHook from '../cart/get-all-user-cart-hook'
import notify from '../useNotifaction'

function OrderPayCardHook(addressDetails) { //addressDetails is param coming from ChoosePayMethod
     
     const [, , , , , cartID] = GetAllUserCartHook()
     const dispatch = useDispatch()
     const [loading, setLoading] = useState(true)
  

     //complete payment when user click
     const HandlcreateOrderCard = async () => {
          if(cartID === "0") {
               notify('Please add items in your cart', 'warn')
               return
          }
          if(addressDetails.length <= 0) {
               notify('Please Choose Address First', 'warn')
               return
          }
          setLoading(true)
          await dispatch(createOrderCard(cartID, {
               shippingAddress:{
                    details: addressDetails.alias,
                    phone: addressDetails.phone,
                    city: "",
                    postalCode: ""
               }
          }))
          setLoading(false)
     }

          // //get response for create order card
          const resOrderCard = useSelector(state => state.checkoutReducer.createOrderCard)
          useEffect(() => {
               if(loading === false) {
                    if(resOrderCard && resOrderCard.status === "success") {
                         console.log(resOrderCard.session.url)
                         if(resOrderCard.session.url){
                              window.open(resOrderCard.session.url)
                         }

                    } else {
                         notify('Plz try again', 'error')
                    }
               }
          }, [loading])

     return [HandlcreateOrderCard]
}

export default OrderPayCardHook