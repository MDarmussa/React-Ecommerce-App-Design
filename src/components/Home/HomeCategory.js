import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from '../Category/CategoryCard'
import SubTitle from '../Utilities/SubTitle'
import homeCategoryHook from '../../hook/category/home-category-hook'


function HomeCategory() {

  const [category, loading, colors] = homeCategoryHook();

 
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