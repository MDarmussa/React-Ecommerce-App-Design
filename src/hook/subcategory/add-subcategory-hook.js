import { useEffect, useState } from 'react'
import notify from '../../hook/useNotifaction'
import { getAllCategory } from '../../redux/actions/categoryAction'
import { createSubCategory } from '../../redux/actions/subCategoryAction'
import { useDispatch, useSelector } from 'react-redux'


function addSubcategoryHook() {

     const dispatch = useDispatch()
     useEffect(() => {
          if(!navigator.onLine)
          {
               notify('No Internet Connection', "warn")
          }
          dispatch(getAllCategory())
     }, [])

     const [id, setID] = useState('0')
     const[name, setName] = useState('')
     const[loading, setLoading] = useState(true)

     //get last category state from redux
     const category = useSelector(state => state.allCategory.category)


     //get last subcategory state from redux
     const subcategory = useSelector(state => state.subCategory.subcategory)



     //on change dropdown menu (addsubcategory - admin page)
     const handleChange = (e) => {
     console.log(e.target.value)
     setID(e.target.value)
     }

     //we can't export setName in the return below, so we need to create a method
     const onChangeName = (e) => {
          e.persist();
          setName(e.target.value)
     }

     //on save data
     const handelSubmit = async (e) => {
     e.preventDefault();
     if(!navigator.onLine)
     {
          notify('No Internet Connection', "warn")
     }
     if(id === "0")
     {
          notify("Please Choose Main Category", "warn")
          return;
     }
     if(name === "")
     {
          notify("Please Enter Name of sub Category", "warn")
          return;
     }
          setLoading(true)
          await dispatch(createSubCategory({ // the object similar to the data object in create subcategory // see postman
                    name,
                    category: id  
          }))
          setLoading(false)       
     }

     useEffect(() => {
     if (loading === false) {
          setName("")
          setID("0")
          if (subcategory)
               console.log(subcategory)
          if (subcategory.status === 201) {
               notify("تمت الاضافة بنجاح", "success")
          }
          else if (subcategory === "Error Error: Request failed with status code 400") {
               notify("هذا الاسم مكرر من فضلك اختر اسم اخر", "warn")
          }
          else {
               notify("هناك مشكله فى عملية الاضافة", "warn")
          }
          setLoading(true)
     }
     }, [loading])

     return [id, name, loading, category, subcategory, handleChange, handelSubmit, onChangeName]


}

export default addSubcategoryHook