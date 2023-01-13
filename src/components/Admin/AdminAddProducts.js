import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../images/avatar.png'
import add from '../../images/add.png'
import MultiImageInput from 'react-multiple-image-input';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/brandAction';



function AdminAddProducts() {

     const dispatch = useDispatch()
     useEffect(() => {  //useEffect fires the the method in action (both useEffect and useSelector) - must be matched in **action**
          dispatch(getAllCategory()) // getAllCategory: categoryAction.js
          dispatch(getAllBrand()) //getAllBrand: brandAction.js
     }, [])

     //get last category state from redux
     const category = useSelector(state => state.allCategory.category) // allCategory: rootReducer.js, category: categoryReducer.js
     const brand = useSelector(state => state.allBrand.brand) // allBrand: rootReducer.js, brand: brandReducer.js


     
     const [images, setImages] = useState([]); //values images products
     const [prodName, setProdName] = useState(''); //value state
     const [prodDescription, setProdDescription] = useState('');
     const [priceBefore, setPriceBefore] = useState('Price Before Discount');
     const [priceAfter, setPriceAfter] = useState('Price After Discount');
     const [qty, setQty] = useState('Quantity Available');
     const [catID, setCatID] = useState('');
     const [brandID, setBrandID] = useState('');
     const [subCatID, setSubCatID] = useState([]);
     const [selectedSubCatID, setSelectedSubCatID] = useState([]);

     //When Select Category, store id
     const onSelectCategory = (e) => {
          setCatID(e.target.value)
     }
          console.log(onSelectCategory)

     const onSelectBrand = (e) => {
          setBrandID(e.target.value)
     }
          console.log(brandID)

     const onSelect = () => {

     }
     const onRemove = () => {
 
     }
 
     const options = [
         { name: "التصنيف الاول", id: 1 },
         { name: "التصنيف الثاني", id: 2 },
     ];
     
  return (
     <div>
          <Row className="justify-content-start ">
               <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
               <Col sm="8">
               <div className="text-form pb-2"> صور للمنتج</div>
               
               <MultiImageInput
                    images={images}
                    setImages={setImages}
                    theme={"light"}
                    allowCrop={false}
                    max={4}
               />

               <input
                    value={prodName}
                    onChange={(e) => setProdName(e.target.value)}
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder="اسم المنتج"
               />
               <textarea
                    className="input-form-area p-2 mt-3"
                    rows="4"
                    cols="50"
                    placeholder="وصف المنتج"
                    value={prodDescription}
                    onChange={(e) => setProdDescription(e.target.value)}
               />
               <input
                    type="number"
                    className="input-form d-block mt-3 px-3"
                    placeholder="price Before Discount"
                    value={priceBefore}
                    onChange={(e) => setPriceBefore(e.target.value)}
               />
               <input
                    type="number"
                    className="input-form d-block mt-3 px-3"
                    placeholder="price After Discount"
                    value={priceAfter}
                    onChange={(e) => setPriceAfter(e.target.value)}
               />
               <input
                    type="number"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Quantity Available"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
               />
               <select
                    name="cat"
                    onChange={onSelectCategory}
                    className="select input-form-area mt-3 px-2 ">
                    <option value="0">Main Category</option>
                    {
                         category.data ? (category.data.map((item,index) => {
                             return (
                                 <option key={index} value={item._id}>{item.name}</option>
                             )
                         })) : null

                     }
             
               </select>

               <Multiselect
                    className="mt-2 text-end"
                    placeholder="التصنيف الفرعي"
                    options={options}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue="name"
                    style={{ color: "red" }}
               />
               <select
                    name="brand"
                    onChange={onSelectBrand}
                    className="select input-form-area mt-3 px-2 ">
                    <option value="val">Choose a Brand</option>
                    {
                         brand.data ? (brand.data.map((item,index) => {
                             return (
                                 <option key={index} value={item._id}>{item.name}</option>
                             )
                         })) : null

                     }
               </select>
               <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
               <div className="mt-1 d-flex">
                    <div
                         className="color ms-2 border  mt-1"
                         style={{ backgroundColor: "#E52C2C" }}></div>
                    <div
                         className="color ms-2 border mt-1 "
                         style={{ backgroundColor: "white" }}></div>
                    <div
                         className="color ms-2 border  mt-1"
                         style={{ backgroundColor: "black" }}></div>
                    <img src={add} alt="" width="30px" height="35px" className="" />
               </div>
               </Col>
          </Row>
          <Row>
               <Col sm="8" className="d-flex justify-content-end ">
               <button className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
               </Col>
          </Row>
     </div>
  )
}

export default AdminAddProducts