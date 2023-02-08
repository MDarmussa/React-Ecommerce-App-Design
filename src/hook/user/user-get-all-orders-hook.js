import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllOrders } from '../../redux/actions/orderAction'

function UserGetAllOrdersHook() {

     const navigat = useNavigate()
     const dispatch = useDispatch()

     const [loading, setLoading] = useState(true)
     const [results, setResults] = useState(true) //to store number of orders in the cart
     const [paginate, setPaginate] = useState({}) //to store pagination
     const [orderData, setOrderData] = useState([]) //to store all ordera


     const user = JSON.parse(localStorage.getItem('user'))
     let userName = ''
     if(user != null)
          userName = user.name

     const get = async () => {
          setLoading(true)
          await dispatch(getAllOrders('', 5)) //'' is the page, 5 is how many orders in one page
          setLoading(false)
     }
     
     useEffect(() => [
          get()
     ], [])

     //for paginaion
     const onPress = async (page) => { 
          setLoading(true)
          await dispatch(getAllOrders(page, 5)) 
          setLoading(false)
     }

     console.log('date test', get)
     const resAllOrders = useSelector(state => state.orderReducer.getAllOrders)
     useEffect(() => {
          if(loading === false) {
               if(resAllOrders.results)
                    setResults(resAllOrders.results)
               if(resAllOrders.paginationResult)  
                    setPaginate(resAllOrders.paginationResult)
               if(resAllOrders.data)
                    setOrderData(resAllOrders.data)


               console.log(resAllOrders)
          }
     }, [loading])


     return [userName, results, paginate, orderData, onPress]

}

export default UserGetAllOrdersHook