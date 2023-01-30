import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import notify from "../../hook/useNotifaction"
import { createNewUser } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';


function RegisterHook() {
     const dispatch = useDispatch('');
     const navigate = useNavigate('')
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [phone, setPhone] = useState('')
     const [password, setPassword] = useState('')
     const [confirmPassword, setConfirmPassword] = useState('')
     const [loading, setLoading] = useState(true)

  const onchangeName = (e) => {
     setName(e.target.value)
  }
  const onchangeEmail = (e) => {
     setEmail(e.target.value)
  }
  const onchangePhone = (e) => {
     setPhone(e.target.value)
  }
  const onchangePassword = (e) => {
     setPassword(e.target.value)
  }
  const onchangeConfirmPassword= (e) => {
     setConfirmPassword(e.target.value)
  }

  const validationValues = () => {
     if(name === "")
     {
          notify("Name is Required", "error")
     }
     if(phone.length <= 10)
     {
          notify("Phone Number is Invalid", "error")
     }
     if(password != confirmPassword)
     {
          notify("Password is not Matched", "error")
     }
  }

  const res = useSelector(state => state.authReducer.createUser)

  //save data
  const onSubmit = async () => {
     validationValues();
     setLoading(true) //true because the request is still loading
     await dispatch(createNewUser( //createNewUser is comng from auth action file
          {
               name,
               email,
               password,
               passwordConfirm: confirmPassword,
               phone
           }
     ));
     setLoading(false) //when the request complete, the load will stop
  }

  useEffect(() => {
     if(loading === false) {
          if(res)
          {
               console.log(res)
               if(res.data.token) {
                    localStorage.setItem("token", res.data.token)
                    notify("You Registered Successully", "success")
                    setTimeout(() => {
                         navigate('/login')
                    }, 2000);
               }
               if(res.data.errors) //it's in the browser console //this condition was made by the backend
               {
                    if(res.data.errors[0].msg === "E-mail already in use")
                         notify("Email is Already Registered", "error")
               }
               if(res.data.errors) //it's in the browser console //this condition was made by the backend
               {
                    if(res.data.errors[0].msg === "accept only egypt phone numbers")
                         notify("Phone Number Must be Egyption Number with 11 digits", "error")
               }
               if(res.data.errors) //it's in the browser console //this condition was made by the backend
               {
                    if(res.data.errors[0].msg === "must be at least 6 chars")
                         notify("Password Must Be at Least 6 Characters", "error")
               }

          }
     }
  }, [loading])

  return [name, email, phone, password, confirmPassword, loading, onchangeName, onchangeEmail, onchangePhone, onchangePassword, onchangeConfirmPassword, onSubmit]

}
export default RegisterHook