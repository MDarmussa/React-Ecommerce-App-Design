import React, { useEffect } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from '../Category/CategoryCard'
import SubTitle from '../Utilities/SubTitle'

import cloth from '../../images/cloth.png'
import cat2 from '../../images/cat2.png'
import labtop from '../../images/labtop.png'
import sale from '../../images/sale.png'
import pic from '../../images/pic.png'

import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'


function HomeCategory() {

  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getAllCategory())
  }, [])

  const category = useSelector(state => state.allCategory.category) //allCategory: from rootReducer, category: from categoryReducer
  const loading = useSelector(state => state.allCategory.loading)
  console.log(loading)
  
  const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF"]

  return (
    <Container>
          <SubTitle title="Categories" btntitle="See More" pathText="/allcategory" />
          <Row className='my-2 d-flex justify-content-between'>
          {
            loading === false ? (
            category.data ? (
              category.data.slice(0, 5).map((item, index) => {
                return (<CategoryCard key={index} title={item.name} img={item.image} background={colors[index]} />)
              })
              ) : <h4>No Categories Found</h4>
              ) : <Spinner animation="border" variant="primary" />
          }
               
          </Row>
    </Container>
  )
}

export default HomeCategory