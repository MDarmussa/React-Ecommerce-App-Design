import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../redux/actions/cartAction';
import notify from '../useNotifaction'


function AddToCartHook(prodID, item) {
  
     const dispatch = useDispatch();

     const [indexColor, setIndexColor] = useState('')
     const [colorText, setColorText] = useState('')
     const [loading, setLoading] = useState(true)


     const colorClick = (index, color) => {
          setIndexColor(index)
          setColorText(color)
      }

      //add product to cart
     const addToCartHandle = async () => {
          if (item.availableColors.length >= 1) {
               if (colorText === ""){
                    notify('Please Enter a Color', 'warn')
                    return
               }
          } else {
               setColorText('')
          }
          setLoading(true)
          await dispatch(addProductToCart({
               productId: prodID,
               color: colorText
          }))
          setLoading(false)
     }

     const res = useSelector(state => state.cartReducer.addToCart)

     useEffect(() => {
          if(loading === false) {
               if(res && res.status === 200) {
                    notify('Product Added to cart successfuly', 'success')
                    // setTimeout(() => {
                    //      window.location.reload(false)
                    // }, 1000)
               } else{
                    notify('Please Sign in first', 'warn')
               }
          }
     }, [loading])





      return [colorClick, indexColor, addToCartHandle]
}

export default AddToCartHook