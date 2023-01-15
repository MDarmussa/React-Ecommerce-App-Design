import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../hook/useNotifaction'
import { createProduct } from '../../redux/actions/productsAction';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/brandAction';
import { getOneCategory } from '../../redux/actions/subCategoryAction';

function AddProductsHook() {

     const dispatch = useDispatch()
     useEffect(() => {  //useEffect fires the the method in action (both useEffect and useSelector) - must be matched in **action**
          dispatch(getAllCategory()) // getAllCategory: categoryAction.js
          dispatch(getAllBrand()) //getAllBrand: brandAction.js
     }, [])

     //get last sub category state from redux
     const category = useSelector(state => state.allCategory.category) // allCategory: rootReducer.js, category: categoryReducer.js
     const brand = useSelector(state => state.allBrand.brand) // allBrand: rootReducer.js, brand: brandReducer.js
     const subCat = useSelector(state => state.subCategory.subcategory) // get last sub set

     const onSelect = (selectedList) => {
          setSelectedSubID(selectedList)
     }
     const onRemove = (selectedList) => {
          setSelectedSubID(selectedList)
     }


     const [options, setOptions] = useState([]); //values images products
     const [images, setImages] = useState([]); //values images products
     const [prodName, setProdName] = useState(''); //value state
     const [prodDescription, setProdDescription] = useState('');
     const [priceBefore, setPriceBefore] = useState('Price Before Discount');
     const [priceAfter, setPriceAfter] = useState('Price After Discount');
     const [qty, setQty] = useState('Quantity Available');
     const [catID, setCatID] = useState('');
     const [brandID, setBrandID] = useState('');
     const [subCatID, setSubCatID] = useState([]);
     const [selectedSubID, setSelectedSubID] = useState([]);
     const [loading, setLoading] = useState(true);
     const [showColor, setShowColor] = useState(false) // //to show/hide color picker
     const[colors, setColors] = useState([])//create aan array to save the chosen color


     //to change name state
     const onChangeProdName = (event) => {
          event.persist();
          setProdName(event.target.value)
     }
     //to change name state
     const onChangeDesName = (event) => {
          event.persist();
          setProdDescription(event.target.value)
     }
     //to change name state
     const onChangePriceBefor = (event) => {
          event.persist();
          setPriceBefore(event.target.value)
     }
     //to change name state
     const onChangePriceAfter = (event) => {
          event.persist();
          setPriceAfter(event.target.value)
     }  //to change name state
     const onChangeQty = (event) => {
          event.persist();
          setQty(event.target.value)
     }
     const onChangeColor = (event) => {
          event.persist();
          setShowColor(!showColor)
     }



     //when choose a new color
     const handleChangeComplete = (color) => { 
          setColors([...colors, color.hex])
          setShowColor(!showColor)
     }

     const removeColor = (color) => {
          const newColor = colors.filter((e) => e !== color)
          setColors(newColor)
     }

     //When Select Category, store id
     const onSelectCategory = async (e) => {
          if(e.target.value !== 0)
          {
               await dispatch(getOneCategory(e.target.value))
          }
          setCatID(e.target.value)
     }

     useEffect(() => {
          if(catID !== 0)
          {
               if(subCat.data)
               {
                    setOptions(subCat.data)
               }
          }
     }, [catID])


     const onSelectBrand = (e) => {
          setBrandID(e.target.value)
     }

     //to convert base 64 to file
     function dataURLtoFile(dataurl, filename) {
 
          var arr = dataurl.split(','),
              mime = arr[0].match(/:(.*?);/)[1],
              bstr = atob(arr[1]), 
              n = bstr.length, 
              u8arr = new Uint8Array(n);
              
          while(n--){
              u8arr[n] = bstr.charCodeAt(n);
          }
          
          return new File([u8arr], filename, {type:mime});
      }

     
     const handleSubmit = async (e) => {
          e.preventDefault(); // prevent browser to reload
          if(catID === 0 || prodName === "" || prodDescription === "" || images.length <= 0 || priceBefore <= 0) {
               notify("Please fill the info", "warn")
               return;
          }
          //for practicing: add a condition (if priceAfter < priceBefore) {get a warn notify error} ***

          //convert base 64 to files
          const imgCover = dataURLtoFile(images[0], Math.random() + ".png")
          //convert array of base 64 image to file
          const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
               (item, index) => {
                    return dataURLtoFile(images[index], Math.random() + ".png")
               }
          )

          const formData = new FormData()
          formData.append("title", prodName)
          formData.append("description", prodDescription)
          formData.append("quantity", qty)
          formData.append("price", priceBefore)
          formData.append("imageCover", imgCover)
          formData.append("category", catID)
          formData.append("brand", brandID)
          
          colors.map((item) => formData.append("images", item)) 
          colors.map((color) => formData.append("availableColors", color)) //to save choosen colors in one array
          selectedSubID.map((item) => formData.append("subcategory", item._id))

          setLoading(true)
          await dispatch(createProduct(formData))
          setLoading(false)
     }

     //get create message 
     const product = useSelector(state => state.allproducts.products)

     //to make the input empty after loading
     useEffect(() => {
          if(loading === false) {
               setCatID(0)
               setColors([])
               setImages([])
               setProdName('')
               setProdDescription('')
               setPriceBefore('Price Before Discount')
               setPriceAfter('Price After Discount')
               setQty('Quantity Available')
               setBrandID(0)
               setSelectedSubID([])
               setTimeout(() => setLoading(true), 1500)

               if(product) {
                    if(product.status === 201) {
                         notify('Added successfully', 'success')
                    } else {
                         notify('Added unsuccessfully', 'warn')
                    }
               }
          }
     }, [loading])
     


  return [onChangeProdName, onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefor, showColor, category, brand, priceAfter, images, setImages, onSelect, onRemove, options, handleChangeComplete, removeColor, onSelectCategory, handleSubmit, onSelectBrand, colors, priceBefore, qty, prodDescription, prodName]
}

export default AddProductsHook