import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgetPassword } from '../../redux/actions/authAction';
import notify from '../useNotifaction';

function ForgetPasswordHook() {
  const dispatch = useDispatch('');
  const navigate = useNavigate('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(true)


  const onChangeEmail = (e) => {
     setEmail(e.target.value)
  }

  const onSubmit = async () => {
     if (email === "") {
          notify("Please Enter Your Email", "error")
          return
     }
     localStorage.setItem('user-email', email)

     setLoading(true)
     await dispatch(forgetPassword({
          email
     }))
     setLoading(false)
  }

  const res = useSelector(state => state.authReducer.forgetPassword) //forgetPassword is from authReducer.js

  useEffect(() => {
     if(loading === false) {
          if(res) {
               console.log(res)
               if(res.data.status === "Success")
               {
                    notify("Code Sent Successfully to Your Email", "success")
                    setTimeout(() => {
                         navigate('/user/verify-code')
                    }, 1500)
               }
               if(res.data.status === "fail")
               {
                    notify("Code Sent Unsuccessfully, Check Your Email", "error")
               }
          }
     }
  }, [loading])

  return [onChangeEmail, email, onSubmit]
}

export default ForgetPasswordHook