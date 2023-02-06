import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import notify from "../../hook/useNotifaction"
import { createNewUser, loginUser } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';


function LoginHook() {
     const dispatch = useDispatch('');
     const navigate = useNavigate('')

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')

     const [loading, setLoading] = useState(true)
     const [isPress, setIsPress] = useState(false)


     const onchangeEmail = (e) => {
          setEmail(e.target.value)
       }

     const onchangePassword = (e) => {
          setPassword(e.target.value)
       }

     const onSubmit = async () => {
          setIsPress(true)
          setLoading(true);
          await dispatch(loginUser(
               {
                    email,
                    password
               }
          )) //loginUser is comng from auth action file
          setIsPress(false)
          setLoading(false)
     }

     const res = useSelector(state => state.authReducer.loginUser)

     useEffect(() => {
          if(loading === false)
          {
               if(res) {
                    console.log(res)
                    if(res.data.token) {
                         localStorage.setItem("token", res.data.token)
                         localStorage.setItem("user", JSON.stringify(res.data.data)) 
                         notify("You Loggedin Successfully", "success")
                         setTimeout(() => {
                              navigate('/')
                              window.location.reload(false)
                         }, 1500)
                         // window.location.reload(false)
                    } else {
                         localStorage.removeItem("token")
                         localStorage.removeItem("user")
                    }
                    if(res.data.message === "Incorrect email or password") {
                         console.log(res.status.message)
                         localStorage.removeItem("token")
                         localStorage.removeItem("user")
                         notify("Incorrect Email or Password", "error")
                    }                       
                    {

                    }
                    setLoading(true);
               }
          }
     }, [loading])


       return [email, password, loading, onchangeEmail, onchangePassword, onSubmit, isPress]
}

export default LoginHook