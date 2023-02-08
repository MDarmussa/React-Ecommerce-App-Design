import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserCartItems } from '../../redux/actions/cartAction'
import notify from '../useNotifaction'


function GetAllUserCartHook() {

     const dispatch = useDispatch()
     const [loading, setLoading] = useState(true)
     const [itemsNum, setItemsNum] = useState(0)
     const [cartItems, setCartItems] = useState([])
     const [totalCartPrice, setTotalCartPrice] = useState(0)
     const [couponNameRes, setCouponName] = useState('') //couponNameRes becasue we have another one in the file that we need to export it to avoidng conflict... see CartCheckout
     const [totalCartPriceAfterDiscount, setTotalCartPriceAfterDiscount] = useState(0)
     const [cartID, setCartID] = useState('0')





     useEffect(() => {
          const get = async () => {
               setLoading(true)
               await dispatch(getAllUserCartItems())
               setLoading(false)
          }
          get()
     }, [])


     const res = useSelector(state => state.cartReducer.getAllUserCart)
     useEffect(() => {
          if(loading === false) {
               if(res && res.status === "success") {
                    setItemsNum(res.numOfCartItems)
                    setCartItems(res.data.products)
                    setTotalCartPrice(res.data.totalCartPrice) //totalCartPrice is already done by the backend / no need to do map over price and get the total
                    setCartID(res.data._id)
                    if(res.data.couponName){
                         setCouponName(res.data.couponName) //from backend
                    } else {
                         setCouponName('')
                    }
                    if(res.data.totalAfterDiscount){
                         setTotalCartPriceAfterDiscount(res.data.totalAfterDiscount)
                    } else {
                         setTotalCartPriceAfterDiscount('')
                    }
               } else{
                    setCartID('0')
                    setCouponName('')
                    setTotalCartPriceAfterDiscount('')
                    setItemsNum(0)
                    setCartItems([])
                    setTotalCartPrice(0)
               }
          }
     }, [loading])


     return [itemsNum, cartItems, totalCartPrice, couponNameRes, totalCartPriceAfterDiscount, cartID] //it will be sent to NavBarLogin (to show the badge) && CartPage to map over the actual carts..

}
export default GetAllUserCartHook