import React, { useEffect } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from './CategoryCard'

import cloth from '../../images/cloth.png'
import cat2 from '../../images/cat2.png'
import labtop from '../../images/labtop.png'
import sale from '../../images/sale.png'
import pic from '../../images/pic.png'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'


function CategoryContainer({ data, loading }) {


     const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
     

  return (
     <Container>
          <div className='admin-content-text'>All Categories</div>
          <Row className='my-2 d-flex justify-content-between'>
               {
                    loading === false ? (
                    data ? (
                      data.map((item, index) => {
                        return (<CategoryCard key={index} id={item._id} title={item.name} img={item.image} background={colors[Math.floor(Math.random() * 5) + 1]} />)
                      })
                      ) : <h4>No Categories Found</h4>
                      ) : <Spinner animation="border" variant="primary" />
               }
          
          </Row>
     </Container>
  )
}

export default CategoryContainer

// <CategoryCard title="Dress" img={cloth} background='#F4DB33' />
