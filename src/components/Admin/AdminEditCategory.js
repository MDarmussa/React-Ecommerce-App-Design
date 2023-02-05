import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import EditCategoryHook from '../../hook/category/edit-category-hook'


function AdminEditCategory() {
     const { id } = useParams() 
     // const [img, name, loading, isPress, onChangeName, onChangeImage, onSubmit] = EditCategoryHook(id)
     const [img, name, loading, isPress, handleSubmit, onImageChange, onChangeName] = EditCategoryHook(id)

  return (
     <div>
          <Row className="justify-content-start ">
          <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
          <Col sm="8">
               <div className="text-form pb-2">صوره التصنيف</div>
               
               <div>
                    <label for="upload-photo">
                         <img
                         src={img}                              
                              alt="fzx"
                              height="100px"
                              width="120px"
                              style={{ cursor: "pointer" }}
                         />
                    </label>
                    <input
                         onChange={onImageChange}
                         type="file"
                         name="photo"
                         id="upload-photo"
                    />
               </div>
          

               <input
                    value={name}
                    onChange={onChangeName}
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder="اسم التصنيف"

               />
          </Col>
          </Row>
          <Row>
          <Col sm="8" className="d-flex justify-content-end ">
               <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
          </Col>
          </Row>
          {
               isPress ? loading ? <Spinner animation="border" variant="primary" /> : <h4>Uploading Completed</h4>: null
          }
          <ToastContainer />
     </div>
  )
}

export default AdminEditCategory