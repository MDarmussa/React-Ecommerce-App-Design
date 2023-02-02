import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import ProductCard from './../Products/ProductCard';
import Pagination from '../Utilities/Pagination'
import CardProductsContainer from '../Products/CardProductsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getProductToWishList } from '../../redux/actions/wishListAction';

const UserFavoriteProduct = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])


    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getProductToWishList())
            setLoading(false)
        }
        get();
    }, [])

    const res = useSelector(state => state.addToWishListReducer.allWishList)

    useEffect(() => {
        if(loading === false) {
            if(res) {
                setItems(res.data)
            }
        }
    }, [loading])

    return (
        <div>
            <div className="admin-content-text pb-4">قائمة المفضلة</div>
            <Row className='justify-content-start'>
            {
                items.length <= 0 ?
                (<h6>No don't have favorite products</h6>) 
                : 
                (<CardProductsContainer products={items} title="" btnTitle="" />)
            }
            </Row>
        </div>
    )
}

export default UserFavoriteProduct