import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminAddCategory from '../../components/Admin/AdminAddCategory'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import Pagination from '../../components/Utilities/Pagination'
import AddCategoryHook from '../../hook/category/add-category-hook'


function AdminAddcategoryPage() {

     const [img, name, loading, isPress, handleSubmit, onImageChange, onChangeName, categories, pagination, onPress] = AddCategoryHook()

     if(pagination)
          var pageCount = pagination
     else
          pageCount = 0

  return (
     <Container >
          <Row className='py-3'>
               <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
               </Col>

               <Col sm="9" xs="10" md="10">
                    <AdminAddCategory />


                    {
                         pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={onPress} />) : null
                    }
               </Col>

          </Row>
     </Container>
  )
}

export default AdminAddcategoryPage