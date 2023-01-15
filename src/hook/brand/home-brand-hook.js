import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllBrand } from '../../redux/actions/brandAction'





const HomeBrandHook = () => {

  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getAllBrand())
  }, [])

  //get last brand state
  const brand = useSelector(state => state.allBrand.brand) //allBrand: from rootReducer, category: from brandReducer
  //get last loading state from redux
  const loading = useSelector(state => state.allBrand.loading)
  console.log(loading)

  return [brand, loading]
}

export default HomeBrandHook