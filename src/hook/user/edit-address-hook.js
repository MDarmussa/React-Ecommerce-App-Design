import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAddress, getOneUserAddress, updateUserAddress } from '../../redux/actions/userAddressesAction';
import notify from '../../hook/useNotifaction'
import { useNavigate } from 'react-router-dom';


function EditAddressHook(id) {
     const navigate = useNavigate()

     const dispatch = useDispatch()
     const [loading, setLoading] = useState(true) //for rendering the data
     const [alias, setAlias] = useState('')
     const [details, setDetails] = useState('')
     const [phone, setPhone] = useState('')
     const [loadingEdit, setLoadingEdit] = useState(true) //for edit

     const onChangeAlias = (event) => {
          event.persist();
          setAlias(event.target.value)
       }
       const onChangeDetails = (event) => {
          event.persist();
          setDetails(event.target.value)
       }
       const onChangePhone = (event) => {
          event.persist();
          setPhone(event.target.value)
       }

     useEffect(() => {
          const get = async () => {
               setLoading(true)
               await dispatch(getOneUserAddress(id))
               setLoading(false)
          }
          get();
     }, [])

     const resAddress = useSelector(state => state.userAddressesReducer.oneAddress)
     useEffect(() => {
          if(loading === false) {
               if(resAddress && resAddress.status === "success") {
                    setAlias(resAddress.data.alias)
                    setDetails(resAddress.data.details)
                    setPhone(resAddress.data.phone)
               }
          }
     }, [loading])




     const handleEdit = async () => {
          setLoadingEdit(true)
          await dispatch(updateUserAddress(id, { //if the object and the state characters match, you can just add the state with no key obj.
               alias,
               details: details,
               phone
          }))
          setLoadingEdit(false)
     }



     const resEditAddress = useSelector(state => state.userAddressesReducer.updateAddress)

     useEffect(() => {
       if(loadingEdit === false){
          if(resEditAddress && resEditAddress.status === 200) {
               notify("Address Updated Successfully", "success")
               setTimeout(() => {
                    navigate('/user/addresses')
               }, 1000)
          } else {
               notify("Update Failed", "error")
            }
       }   
     }, [loadingEdit])
     

     return [handleEdit, alias, details, phone, onChangeAlias, onChangeDetails, onChangePhone]
}

export default EditAddressHook