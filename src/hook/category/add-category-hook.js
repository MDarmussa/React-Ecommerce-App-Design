import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import avatar from '../../images/avatar.png'
import { createCategory } from '../../redux/actions/categoryAction'
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../hook/useNotifaction'


function AddCategoryHook() {

     const dispatch = useDispatch();
     const [img, setImg] = useState(avatar)
     const [name, setName] = useState('')
     const [selectedFile, setSelectedFile] = useState(null)
     const [loading, setLoading] = useState(true)
     const [isPress, setIsPress] = useState(false)


      //to change name state
     const onChangeName = (event) => {
          event.persist();
          setName(event.target.value)
     }
 
     //when user change image, save it
     const onImageChange = (event) => {
         if(event.target.files && event.target.files[0])
         {
             setImg(URL.createObjectURL(event.target.files[0]))
             setSelectedFile(event.target.files[0])
         }
     }
 
     const res = useSelector(state => state.allCategory.category)
 
     //save data in database
     const handleSubmit = async (event) => {
         event.preventDefault();
         if(name === "" || selectedFile === null)
         {
             notify("Please Fill Up the Fields", 'warn')
             return;
         }
         const formData = new FormData();
         formData.append("name", name) //"name": from backend, name from useState
         formData.append("image", selectedFile)
 
         setLoading(true)
         setIsPress(true)
         await dispatch(createCategory(formData))
         setLoading(false)
     }
 
     useEffect(() => {
         if(loading === false)
         {
             setImg(avatar)
             setName("")
             setSelectedFile(null)
             setLoading(true)
             setTimeout(() => setIsPress(false), 1000)
             if(res.status === 201) {
                 notify('Uploading completed successfully', 'success')
             }
             else {
                 notify("Uploading Failed", 'error')
             }  
         }
     }, [loading])

     return [img, name, loading, isPress, handleSubmit, onImageChange, onChangeName] //must be organized same as in AdminCategory (array index must match)
 
}

export default AddCategoryHook