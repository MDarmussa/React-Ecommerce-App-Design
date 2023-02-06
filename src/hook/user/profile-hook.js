import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserPasswordData, updateUserProfileData } from '../../redux/actions/authAction';
import notify from '../useNotifaction';

function ProfileHook() {

     //event.target.value: is the value that the user add


     //using this step, we don't have to userSelector and dispatch and create action and routes to bring the data. That's because we already have the data available in our storage. :) -- Easy ha
     let user = []
     if(localStorage.getItem("user") != null)
         user = JSON.parse(localStorage.getItem("user"))
     
     const dispatch = useDispatch()
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     const [loading, setLoading] = useState(true)
     const [name, setName] = useState(user.name);
     const [email, setEmail] = useState(user.email);
     const [phone, setPhone] = useState(user.phone);

     const onChangeName = (event) => {
          event.persist()
          setName(event.target.value)
     }
     const onChangeEmail = (event) => {
          event.persist()
          setEmail(event.target.value)
     }
     const onChangePhone = (event) => {
          event.persist()
          setPhone(event.target.value)
     }
 
     const handleSubmit = async () => {

          let body
          if(user.email === email) {
               body = {
                    name,
                    phone
               }
          } else {
               body = { 
                    name,
                    email,
                    phone
               }
          }

         setLoading(true)
         await dispatch(updateUserProfileData(body))
         setLoading(false)
         setShow(false);
     //     window.location.reload(false)
    }

    const res = useSelector(state => state.authReducer.userProfile)

    useEffect(() => {
     if(loading === false) {
          if(res && res.status === 200) {
               notify("Update Profile Successfully", "success")
               localStorage.setItem("user", JSON.stringify(res.data.data.user)) 
               setTimeout(() => {
                    window.location.reload(false)
               }, 1000)
          } else {
               notify("Bad Request", "warn")
          }   
     }

    }, [loading])

    //Above: retrieve the data in the card and dialog. And Also to edit the user data (name, phone, email)

    //Below; is to change the user password
    const navigate = useNavigate()
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loadingPass, setLoadingPass] = useState(true)

    const onChangeOldPass = (event) => {
          event.persist()
          setOldPassword(event.target.value)
     }
     const onChangeNewPass= (event) => {
          event.persist()
          setNewPassword(event.target.value)
     }
     const onChangeConfirmPass = (event) => {
          event.persist()
          setConfirmPassword(event.target.value)
     }



    const changePassword = async () => {
          if(confirmPassword != newPassword) {
               notify("The New Password Are Not Matched", "warn")
               return
          }
          setLoadingPass(true)
          await dispatch(updateUserPasswordData({
               currentPassword: oldPassword,
               password: newPassword,
               passwordConfirm: confirmPassword
          }))
          setLoadingPass(false)
    }

    const resPass = useSelector(state => state.authReducer.useChangePassword)

    useEffect(() => {
     if(loadingPass === false) {
          console.log(resPass)
          if(resPass && resPass.status === 200) {
               console.log(resPass.data.token)
               console.log(resPass.data.data)
               notify("Update Password Successfully", "success")
               setTimeout(() => {
                    localStorage.removeItem("user")
                    localStorage.removeItem("token")
                    navigate('/login')
                    window.location.reload(false)
               }, 1500)
          } else {
               notify("Bad Request", "warn")
          }   
     }

    }, [loadingPass])

    return [user, show, handleClose, handleShow, handleSubmit, name, email, phone, onChangeName, onChangeEmail, onChangePhone, oldPassword, newPassword, confirmPassword, onChangeOldPass, onChangeNewPass, onChangeConfirmPass, changePassword]
  
}

export default ProfileHook