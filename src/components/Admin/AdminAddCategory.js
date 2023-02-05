import React, { useEffect } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import AddCategoryHook from '../../hook/category/add-category-hook'
import { ToastContainer, toast } from 'react-toastify';
import AdminCategoryCard from './AdminCategoryCard';
import {getAllCategory} from "../../redux/actions/categoryAction"
import { useDispatch, useSelector } from 'react-redux';


function AdminAddCategory() {

const [img, name, loading, isPress, handleSubmit, onImageChange, onChangeName, categories, pagination, onPress] = AddCategoryHook();

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
                            type="file"
                            name="photo"
                            onChange={onImageChange}
                            id="upload-photo"
                        />
                    </div>
              

                    <input
                        onChange={onChangeName}
                        value={name}
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

            <Row>
                <Col>

                {
                    categories ? 
                    (categories.map((item, index) => {
                        return <AdminCategoryCard key={index} categories={item} />
                    })) 
                    : 
                    (<h6>No Categories Available</h6>)
                }
                    
                </Col>
            </Row>
            


            <ToastContainer />
     </div>
  )
}


export default AdminAddCategory