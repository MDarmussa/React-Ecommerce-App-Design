import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getAllProductsPage, getAllProductsSearch } from '../../redux/actions/productsAction';


function ViewSearchProductHook() {
     let limit = 4
     const dispatch = useDispatch();

     const getProduct = async () => {
          let word = "";
          if(localStorage.getItem("searchWord") != null)
               word = localStorage.getItem("searchWord")
          sortData();
          await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&keyword=${word}`))
     }

     useEffect(() => {
          getProduct()
     }, [])

     const allProducts = useSelector((state) => state.allproducts.allProducts)

     let items = [];
     try {
          if(allProducts.data)
               items = allProducts.data
          else
          items = []
     } catch(e) { }


     let pagination = [];
     try {
          if(allProducts.paginationResult)
               pagination = allProducts.paginationResult.numberOfPages;
          else
               pagination = []
     } catch(e) { }

     let results = 0;
     try {
          if(allProducts.results) // results from backend
               results = allProducts.results;
          else
               results = 0
     } catch(e) { }


     //when user click pagination
     const onPress = async (page) => {
          let word = "";
          if(localStorage.getItem("searchWord") != null)
               word = localStorage.getItem("searchWord")
          sortData();
          await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}`))
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