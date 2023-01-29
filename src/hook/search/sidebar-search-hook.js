import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBrand } from '../../redux/actions/brandAction'
import { getAllCategory } from '../../redux/actions/categoryAction';
import ViewSearchProductHook from '../products/view-search-products-hook'

function SidebarSearchHook() {
     const [items, pagination, onPress, getProduct, results] = ViewSearchProductHook();
     const dispatch=useDispatch()
     useEffect(() => {
          const get = async () => {
               await dispatch(getAllCategory());
               await dispatch(getAllBrand());
          }
          get();  
     }, [])
   
     //useSelector: to get state from redux
     const allCat = useSelector(state => state.allCategory.category)
     const allBrand = useSelector(state => state.allBrand.brand) //allBrand: from rootReducer, brand: from brandReducer

     //to get all category
     let category = [];
     if (allCat.data)
         category = allCat.data

     //to get all category
     let brand = [];
     if (allBrand.data)
         brand = allBrand.data

     var queryCat = "", queryBrand="";

     const [catChecked, setCatChecked] = useState([])
     //when user press any category
     const clickCategory = (e) => {
          let value = e.target.value
          if(value === "0"){
               setCatChecked([])
          } else {
               if (e.target.checked === true) { //checked from console after consoling e.target.value
                    setCatChecked([...catChecked, value])
               } else if(e.target.checked === false){
                    const newArray = catChecked.filter((e) => e !== value)
                    setCatChecked(newArray)
               }
          }
     }

     useEffect(() => {
          queryCat = catChecked.map(val => "category[in][]=" + val).join("&")
          localStorage.setItem("catCecked", queryCat)
          setTimeout(() => {
              getProduct();
          }, 1000);
      }, [catChecked])
     


     const [brandChecked, setBrandChecked] = useState([])
     //when user press any category
     const clickBrand= (e) => {
          let value = e.target.value
          if(value === "0"){
               setBrandChecked([])
          } 
          else {
               if (e.target.checked === true) { //checked from console after consoling e.target.value
                    setBrandChecked([...brandChecked, value])
               } else if(e.target.checked === false){
                    const newArray = brandChecked.filter((e) => e !== value)
                    setBrandChecked(newArray)
               }
          }
     }
     
     useEffect(() => {
          queryBrand = brandChecked.map(val => "brand[in][]=" + val).join("&")
          localStorage.setItem("brandCecked", queryBrand)
          setTimeout(() => {
              getProduct();
          }, 1000);
      }, [brandChecked])


     const [From, setPriceFrom] = useState(0)
     const [To, setPriceTo] = useState(0)

     const priceFrom = (e) => {
          localStorage.setItem("priceFrom", e.target.value)
          setPriceFrom(e.target.value)
     }

     const priceTo = (e) => {
          localStorage.setItem("priceTo", e.target.value)
          setPriceTo(e.target.value)
     }

     useEffect(() => {
          setTimeout(() => {
              getProduct();
          }, 1000);
      }, [From, To])

     return [category, brand, clickCategory, clickBrand, priceFrom, priceTo]
   

}

export default SidebarSearchHook