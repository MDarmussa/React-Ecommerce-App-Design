import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../../redux/actions/categoryAction';

function CategoryCardHook(categories) { 


     const dispatch = useDispatch()

     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     const handleDelete = async (e) => {
          await dispatch(deleteCategory(categories._id))
          setShow(false);
          window.location.reload();
     }

     return [show, handleClose, handleShow, handleDelete]
}

export default CategoryCardHook