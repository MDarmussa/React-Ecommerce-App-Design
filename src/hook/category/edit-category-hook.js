import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminEditCategory from '../../components/Admin/AdminEditCategory'
import { getOneCategory, updateCategory } from '../../redux/actions/categoryAction'
import notify from '../../hook/useNotifaction'
import avatar from '../../images/avatar.png'
import { useNavigate } from 'react-router-dom'



function EditCategoryHook(id) {
     const navigate = useNavigate()

     const dispatch = useDispatch();
     
     const [img, setImg] = useState(avatar)
     const [name, setName] = useState('')
     const [selectedFile, setSelectedFile] = useState([])
     const [loading, setLoading] = useState(true)
     const [isPress, setIsPress] = useState(false)
     const [loadingData, setLoadingData] = useState(true)

     //rendering one specific category card info (image & name)
     const oneCategoy = useSelector(state => state.allCategory.oneCategory)

     useEffect(() => {
          const get = async () => {
               setLoadingData(true)
               await dispatch(getOneCategory(id)) 
               setLoadingData(false)
          }
          get()
     }, [])

     useEffect(() => { //after click edit, it will render the coupon name in the new edit dialog
          if(loadingData === false) {
               if(oneCategoy.data){
                    setName(oneCategoy.data.name)
                    setImg(oneCategoy.data.image)
               }
          }
   }, [loadingData])


   ///*** update the data starts here ***///

     //to change name state
     const onChangeName = (event) => {
          event.persist();
          setName(event.target.value)
     }

     const onImageChange = (event) => {
          if(event.target.files && event.target.files[0])
               {
                    setImg(URL.createObjectURL(event.target.files[0]))
                    setSelectedFile(event.target.files[0])
               }
          }

     const updateRes = useSelector(state => state.allCategory.updateCategory)
     //allCategory: from root reducer --- updateCategory: from reducer (array)


     //save data in database
     const handleSubmit = async (event) => {
          event.preventDefault();
          if (name === "" || selectedFile === null) {
               notify('من فضلك اكمل البيانات', "warn");
               return;
          }
          const formData = new FormData();
          formData.append("name", name)
          formData.append("image", formData)
          console.log(img)
          setLoading(true)
          setIsPress(true)
          await dispatch(updateCategory(id, formData))
          setLoading(false) 

     }

     useEffect(() => {
          if(loading === false) {
               if(updateRes && updateRes.status === 200){
                    notify("Coupon Was Edited Successfully", "success")
                    // window.location.reload(false) 
                    setTimeout(() => {
                         // navigate('/admin/addcategory')
                         window.location.reload(false) 
                    }, 1000)    
               } else {
                    notify("Edit Coupon Failed", "error")
               } 
          }
       }, [loading])
     


return [img, name, loading, isPress, handleSubmit, onImageChange, onChangeName]

}

export default EditCategoryHook

