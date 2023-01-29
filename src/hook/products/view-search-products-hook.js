import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getAllProductsPage, getAllProductsSearch } from '../../redux/actions/productsAction';


function ViewSearchProductHook() {
     let limit = 4
     const dispatch = useDispatch();

     const getProduct = async () => {
          getStorage();
          sortData();

          await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${brandCat}${priceFromString}${priceToString}`))
     }

     useEffect(() => {
          getProduct()
     }, [])

     const allProducts = useSelector((state) => state.allproducts.allProducts)

     
     let items = []; let pagination = []; let results = 0;

     try {
          if(allProducts.data)
               items = allProducts.data
          else
          items = []
     } catch(e) { }

     try {
          if(allProducts.paginationResult)
               pagination = allProducts.paginationResult.numberOfPages;
          else
               pagination = []
     } catch(e) { }

     try {
          if(allProducts.results) // results from backend
               results = allProducts.results;
          else
               results = 0
     } catch(e) { }


     //when user click pagination
     const onPress = async (page) => {
          getStorage();
          sortData();

          await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${brandCat}${priceFromString}${priceToString}`))
     }

     let priceFromString = "", priceToString = "";
     let word = "", queryCat="", brandCat="", priceFrom=0, priceTo=0;
     const getStorage = () => {
          if(localStorage.getItem("searchWord") != null)
               word = localStorage.getItem("searchWord")
          if(localStorage.getItem("catChecked") != null)
               queryCat = localStorage.getItem("catCecked")
          if(localStorage.getItem("brandCecked") != null)
               brandCat = localStorage.getItem("brandCecked")
          if(localStorage.getItem("priceFrom") != null)
               priceFrom = localStorage.getItem("priceFrom")
          if(localStorage.getItem("priceTo") != null)
               priceTo = localStorage.getItem("priceTo")

          if(priceFrom === "" || priceFrom <= 0){
               priceFromString = ""
          } else {
               priceFromString = `&price[gt]=${priceFrom}`
          }

          if(priceTo === "" || priceTo <= 0){
               priceToString = ""
          } else {
               priceToString = `&price[lt]=${priceTo}`
          }
     }


     let sortType = "", sort;
     //when user choose sort type
     const sortData = () => {
          if(localStorage.getItem("sortType") !== null)
          {
              sortType = localStorage.getItem("sortType") 
          } else {
               sortType = "";
          }

          if(sortType === "Price Low to high")
               sort = "+price"
          else if(sortType === "Price high to low")
               sort = "-price"
          else if(sortType === "")
               sort = ""
          else if(sortType === "Most Sold")
               sort = "-sold"
          else if(sortType === "Highest Review<")
               sort = "-ratingsQuantity"
          else if(sortType === "Most Availability")
               sort = "-quantity"
               
     }

     return [items, pagination, onPress, getProduct, results]
}

export default ViewSearchProductHook