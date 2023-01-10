import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from '../Category/CategoryCard'
import SubTitle from '../Utilities/SubTitle'

import cloth from '../../images/cloth.png'
import cat2 from '../../images/cat2.png'
import labtop from '../../images/labtop.png'
import sale from '../../images/sale.png'
import pic from '../../images/pic.png'


function HomeCategory() {
  return (
    <Container>
          <SubTitle title="Categories" btntitle="See More" />
          <Row className='my-2 d-flex justify-content-between'>
               <CategoryCard title="Dress" img={cloth} background='#F4DB33' />
               <CategoryCard title="Beauty" img={cat2} background='#F4DBA4' />
               <CategoryCard title="Computer" img={labtop} background='#0034FF' />
               <CategoryCard title="Sales" img={sale} background='#F4DBA4' />
               <CategoryCard title="Home Devices" img={cloth} background='#FF5' />
               <CategoryCard title="Kitchen" img={pic} background='#F4DBA4' />
          </Row>
    </Container>
  )
}

export default HomeCategory