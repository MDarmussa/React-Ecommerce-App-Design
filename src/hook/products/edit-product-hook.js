import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../hook/useNotifaction'
import { getOneProducts, updateProducts } from '../../redux/actions/productsAction';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/brandAction';
import { getOneCategory } from '../../redux/actions/subCategoryAction';

function AdminEditProductsHook(id) {

     const dispatch = useDispatch()
     useEffect(() => { 
          const run = async () => {
               await dispatch(getOneProducts(id))
               await dispatch(getAllCategory()) 
               await dispatch(getAllBrand()) 
          }
          run();
     }, [])

     //get one product details
     const item = useSelector((state) => state.allproducts.oneProduct)
     //get last sub category state from redux
     const category = useSelector(state => state.allCategory.category) 
     const brand = useSelector(state => state.allBrand.brand) 
     const subCat = useSelector(state => state.subCategory.subcategory) 

     const onSelect = (selectedList) => {
          setSelectedSubID(selectedList)
     }
     const onRemove = (selectedList) => {
          setSelectedSubID(selectedList)
     }


     const [options, setOptions] = useState([]); //values images products
     const [images, setImages] = useState([]); //values images products
     const [prodDescription, setProdDescription] = useState('');
     const [prodName, setProdName] = useState(''); //value state
     const [priceBefore, setPriceBefore] = useState();
     const [priceAfter, setPriceAfter] = useState();
     const [qty, setQty] = useState();
     const [catID, setCatID] = useState('');
     const [brandID, setBrandID] = useState('');
     const [subCatID, setSubCatID] = useState([]);
     const [selectedSubID, setSelectedSubID] = useState([]);
     const [loading, setLoading] = useState(true);
     const [showColor, setShowColor] = useState(false) // //to show/hide color picker
     const[colors, setColors] = useState([])//create aan array to save the chosen color

     useEffect(() => {
          if(item.data) {
               setImages(item.data.images)
               setProdName(item.data.title)
               setProdDescription(item.data.description)
               setPriceBefore(item.data.price)
               setQty(item.data.quantity)
               setCatID(item.data.category)
               setBrandID(item.data.brand)
               setColors(item.data.availableColors)
          }
     }, [item])

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
          setCatID(e.target.value)
     }

     useEffect(() => {
          if(catID != 0)
          {
               const run = async () => {
                    await dispatch(getOneCategory(catID))
               }
               run();
          }
     }, [catID])

     useEffect(() => {
          if(subCat) {
               setOptions(subCat.data)
          }
     }, [subCat])


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
  
          while (n--) {
              u8arr[n] = bstr.charCodeAt(n);
          }
  
          return new File([u8arr], filename, { type: mime });
      }


     //convert url to file
     const convertURLtoFile = async (url) => {
          const response = await fetch(url, { mode: "cors" });
          const data = await response.blob();
          const ext = url.split(".").pop();
          const filename = url.split("/").pop();
          const metadata = { type: `image/${ext}` };
          return new File([data], Math.random(), metadata);
     };
     
      //to save data
     const handleSubmit = async (e) => {
          e.preventDefault(); // prevent browser to reload
          if(catID === 0 || prodName === "" || prodDescription === "" || images.length <= 0 || priceBefore <= 0) {
               notify("Please fill the info", "warn")
               return;
          }

          let imgCover = []
          if(images[0].length <= 1000)
          {
               convertURLtoFile(images[0]).then(val => imgCover = val)
          } else {
               imgCover = dataURLtoFile(images[0], Math.random() + ".png")
          }

          let itemImages = []
          //convert array of base 64 image to file 
          Array.from(Array(Object.keys(images).length).keys()).map(
              (item, index) => {
                  if (images[index].length <= 1000) {
                      convertURLtoFile(images[index]).then(val => itemImages.push(val))
                  }
                  else {
                      itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"))
                  }
              })


          const formData = new FormData()
          formData.append("title", prodName)
          formData.append("description", prodDescription)
          formData.append("quantity", qty)
          formData.append("price", priceBefore)
          formData.append("imageCover", imgCover)
          formData.append("category", catID)
          formData.append("brand", brandID)

          setTimeout(() => {
               formData.append('imageCover', imgCover)
               itemImages.map((item) => formData.append("images", item)) 
          }, 1000)
          
          colors.map((color) => formData.append("availableColors", color)) //to save choosen colors in one array
          selectedSubID.map((item) => formData.append("subcategory", item._id))
          setTimeout(async () => {
               setLoading(true)
               await dispatch(updateProducts(id, formData))
               setLoading(false)
          }, 1000)
     }

     //get create message 
     const product = useSelector(state => state.allproducts.updateProducts) //updateProducts from productsReducer.js

     //to make the input empty after loading
     useEffect(() => {
          if(loading === false) {
               setCatID(0)
               setColors([])
               setImages([])
               setProdName('')
               setProdDescription('')
               setPriceBefore('السعر قبل الخصم')
               setPriceAfter('السعر بعد الخصم')
               setQty('الكمية المتاحة')
               setBrandID(0)
               setSelectedSubID([])
               setTimeout(() => setLoading(true), 1500)

               if (product) {
                if (product.status === 200) {
                    notify("Edit Successfully Completed", "success")
                } else {
                    notify("There is a Problem", "error")
                }
            }
        }
    }, [loading])
     


  return [brandID, catID, onChangeProdName, onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefor, showColor, category, brand, priceAfter, images, setImages, onSelect, onRemove, options, handleChangeComplete, removeColor, onSelectCategory, handleSubmit, onSelectBrand, colors, priceBefore, qty, prodDescription, prodName]
}

export default AdminEditProductsHook