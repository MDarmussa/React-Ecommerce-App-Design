import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeOrderDeliver, changeOrderPay } from '../../redux/actions/orderAction'
import notify from '../useNotifaction'

function ChangeOrdeStatusHook(id) {

     const navigat = useNavigate()
     const dispatch = useDispatch()

     const [loading, setLoading] = useState(true)
     const [pay, setPay] = useState(0) 


     const handleSubmitPayOrder = async () => {
          if(pay === 'true') {
               setLoading(true)
               await dispatch(changeOrderPay(id)) 
               setLoading(false)
          } else if (pay === '0') {
               console.log('Please choose a value')
          }
     }
     

     const resOrderPay = useSelector(state => state.orderReducer.changePay)
     useEffect(() => {
          if(loading === false) {
              if(resOrderPay && resOrderPay.status === 200) {
                    notify('Status changes successfully', 'success')
                    setTimeout(() => {
                    window.location.reload(false)  
                    }, 1000)
              } else {
               notify('Problem changing the status', 'error')
              }
          }
     }, [loading])


     const onChangePaid = (e) => {
          setPay(e.target.value)
     }



///delivery section

     const [deliver, setDeliver] = useState(0)
     const [loadingDeliver, setLoadingDeliver] = useState(true)


     const handleSubmitDeliverOrder = async () => {
          if(deliver === 'true') {
               setLoadingDeliver(true)
               await dispatch(changeOrderDeliver(id)) 
               setLoadingDeliver(false)
          } else if (deliver === '0') {
               console.log('Please choose a value')
          }
     }

     const resOrderDeliver = useSelector(state => state.orderReducer.changeDeliver)
     useEffect(() => {
          if(loadingDeliver === false) {
              if(resOrderDeliver && resOrderDeliver.status === 200) {
               notify('Status changes successfully', 'success')
               setTimeout(() => {
                  window.location.reload(false)  
               }, 1000)
              } else {
               notify('Problem changing the status', 'error')
              }
          }
     }, [loadingDeliver])


     const onChangeDeliver = (e) => {
          setDeliver(e.target.value)
     }

     return [handleSubmitPayOrder, onChangePaid, handleSubmitDeliverOrder, onChangeDeliver]
  
}

export default ChangeOrdeStatusHook