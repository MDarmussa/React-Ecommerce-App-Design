import React, { useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import rate from '../../images/rate.png'
import favon from '../../images/fav-on.png'
import favoff from '../../images/fav-off.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToWishList, removeProductToWishList } from '../../redux/actions/wishListAction'
import { ToastContainer } from 'react-toastify'
import notify from "../../hook/useNotifaction"
import productCardHook from '../../hook/products/product-card-hook'

function ProductCardHook(item, favProd) {
  
     const dispatch = useDispatch()
     const [favImg, setFavImg] = useState(favoff)
     const [loadingAdd, setLoadingAdd] = useState(true)
     const [loadingRemove, setLoadingRemove] = useState(true)
     let fav = favProd.some(fitem => fitem === item._id) //return true or false when clicking on the fav icon. it compared the favorite product id if it's in the array or not
     const [isFav, setIsFav] = useState(fav)


     useEffect(() => {
          setIsFav(favProd.some(fitem => fitem === item._id))
     }, [favProd])


     const handleFav = () => { // function to click on the fav icone
          if(isFav) { //some is a method like a map but returns true or false
               removeToWishListData()
          } else {
               addToWishListData();
          }
     }

     useEffect(() => {
          if(isFav === true) {
               setFavImg(favon)
          }
          else{
               setFavImg(favoff)
          }        
     }, [isFav])

     //addToWishListReducer is registered in the rootReducer //addWishList is the array that is registered in the reducer file
     const resAdd = useSelector(state => state.addToWishListReducer.addWishList) 
     const resRemove = useSelector(state => state.addToWishListReducer.removeWishList)

     const addToWishListData = async () => {
          setIsFav(true)
          setFavImg(favon)
          setLoadingAdd(true)
          await dispatch(addProductToWishList({
               productId: item._id,
          }))
          setLoadingAdd(false)   
     }

     const removeToWishListData = async () => {
          setIsFav(false)
          setFavImg(favoff)
          setLoadingRemove(true)
          await dispatch(removeProductToWishList(item._id))
          setLoadingRemove(false)
     }

     useEffect(() => {
          if(loadingAdd === false) {
               if(resAdd && resAdd.status === 200){  //status is from inspect // to get it, console.log(res) inside useInsertData.js (hooks)
                    notify("Your Favourite Product was added successfully", "success")
               } else if(resAdd && resAdd.status === 401) {
                    notify("Please Login First", "error")
               }
          }
     }, [loadingAdd])

     useEffect(() => {
          if(loadingRemove === false) {
               if(resRemove && resRemove.status === "success"){ 
                    notify("Your Favourite Product was deleted successfully", "warn")
               } else if(resAdd && resAdd.status === 401) {
                    notify("Please Login First", "error")
               }
          }
     }, [loadingRemove])

     return [addToWishListData, removeToWishListData, handleFav, favImg]
}

export default ProductCardHook