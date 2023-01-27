import React, { useEffect, useState } from 'react'
import ViewSearchProductHook from '../products/view-search-products-hook'

function NavbarSearchHook() {


  const[items, pagination, onPress, getProduct] = ViewSearchProductHook();  
  
  const [searchWord, setSearchWord] = useState('')
 
  //when user type words in the search in the navbar
  const onChangeSearch = (e) => {
     localStorage.setItem("searchWord", e.target.value)
     setSearchWord(e.target.value)
  }

  useEffect(() => {
     setTimeout(() => {
          getProduct();
     }, 1000);
  }, [searchWord])

  return [onChangeSearch, searchWord]
}

export default NavbarSearchHook