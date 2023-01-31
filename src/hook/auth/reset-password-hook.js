import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgetPassword, resetPassword, verifyPassword } from '../../redux/actions/authAction';
import notify from '../useNotifaction';

function ResetPasswordHook() {

  const dispatch = useDispatch('');
  const navigate = useNavigate('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(true)


  const onChangePassword = (e) => {
     setPassword(e.target.value)
  }
  const onChangeConfirmPassword = (e) => {
     setConfirmPassword(e.target.value)
  }

  const onSubmit = async () => {
     if (password === "") {
          notify("Please Enter a New Password", "error")
          return
     }
     if (password != confirmPassword) {
          notify("The Password is not matched", "error")
          return
     }
     setLoading(true)
     await dispatch(resetPassword({
          email: localStorage.setItem('user-email'),
          newPassword: password
     }))
     setLoading(false)
  }

  const res = useSelector(state => state.authReducer.resetPassword)

  useEffect(() => {
     if(loading === false) {
          if(res) {
               console.log(res)
               if(res.data.status === "Success")
               {
                    notify("Password Changed Successfully", "success")
                    setTimeout(() => {
                         navigate('/login')
                    }, 1500)
               }
               if(res.data.status === "fail")
               {
                    notify("Please Add a New Password", "error")
               }
          }
     }
  }, [loading])

  return [password, confirmPassword, onChangePassword, onChangeConfirmPassword, onSubmit]
}

export default ResetPasswordHook