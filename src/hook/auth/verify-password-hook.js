import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgetPassword, verifyPassword } from '../../redux/actions/authAction';
import notify from '../useNotifaction';

function VerifyPasswordHook() {
  const dispatch = useDispatch('');
  const navigate = useNavigate('')
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(true)


  const onChangeCode = (e) => {
     setCode(e.target.value)
  }

  const onSubmit = async () => {
     if (code === "") {
          notify("Please Enter the Code", "error")
          return
     }
     setLoading(true)
     await dispatch(verifyPassword({
          resetCode: code,
     }))
     setLoading(false)
  }

  const res = useSelector(state => state.authReducer.verifyPassword) //verifyPassword authReducer inside the case

  useEffect(() => {
     if(loading === false) {
          if(res) {
               console.log(res)
               if(res.data.status === "Success")
               {
                    notify("Activation Code is Correct", "success")
                    setTimeout(() => {
                         navigate('/user/reset-password')
                    }, 1500)
               }
               if(res.data.status === "fail")
               {
                    notify("Code is Wrong or Expired", "error")
               }
          }
     }
  }, [loading])

  return [code, onChangeCode, onSubmit]
}

export default VerifyPasswordHook