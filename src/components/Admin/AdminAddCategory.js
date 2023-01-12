import React, { useEffect, useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import avatar from '../../images/avatar.png'
import { createCategory } from '../../redux/actions/categoryAction'
import { ToastContainer, toast } from 'react-toastify';
import { warning } from '@remix-run/router'


function AdminAddCategory() {

    const dispatch = useDispatch();
    const [img, setImg] = useState(avatar)
    const [name, setName] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isPress, setIsPress] = useState(false)
    //to get loading state from redux
    // const loading = useSelector(state => state.allCategory.loading)


    // //to change name state
    // const onChangeName = (event) => {
    //     event.persist();
    //     setName(event.target.value)
    // }

    //when user change image, save it
    const onImageChange = (event) => {
        if(event.target.files && event.target.files[0])
        {
            setImg(URL.createObjectURL(event.target.files[0]))
            setSelectedFile(event.target.files[0])
        }
    }

    const res = useSelector(state => state.allCategory.category)

    //save data in database
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(name === "" || selectedFile === "")
        {
            notify("Please Fill Up the Fields", 'warning')
            return;
        }
        const formData = new FormData();
        formData.append("name", name) //"name": from backend, name from useState
        formData.append("image", selectedFile)

        setLoading(true)
        setIsPress(true)
        await dispatch(createCategory(formData))
        setLoading(false)
    }

    useEffect(() => {
        if(loading === false)
        {
            setImg(avatar)
            setName("")
            setSelectedFile(null)
            setLoading(true)
            setTimeout(() => setIsPress(false), 1000)
            if(res.status === 201) {
                notify('Uploading completed successfully', 'sucess')
            }
            else {
                notify("Uploading Failed", 'error')
            }  
        }
    }, [loading])


    const notify = (msg, type) => {
        if(type === "warm")
            toast.error(msg);
        else if(type === "sucess")
            toast.success(msg)
        else if(type === "error")
            toast.error(msg)
    } 


      //to change name state
      const onChangeName = (event) => {
        event.persist();
        setName(event.target.value)
    }

    


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
                        onChange={(e) => setName(e.target.value)}
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
            <ToastContainer />
     </div>
  )
}



export default AdminAddCategory