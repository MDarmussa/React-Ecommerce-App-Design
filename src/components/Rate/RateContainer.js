import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ViewAllReviewsHook from '../../hook/review/view-all-reviews-hook'
import rate from '../../images/rate.png'
import Pagination from '../Utilities/Pagination'
import RateItem from './RateItem'
import RatePost from './RatePost'

function RateContainer({rateAvg, rateQty}) {

     const { id } = useParams()
     const [allReviews, onPress] = ViewAllReviewsHook(id)

  return (
     <Container className='rate-container'>
          <Row>
               <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">Reviews</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}</div>
                    <div className="rate-count d-inline p-1 pt-2">({`${rateQty} Review`})</div>
               </Col>
          </Row>

          <RatePost />

          {
               allReviews.data ? (allReviews.data.map((review, index) => {
                    return (<RateItem key={index} review={review} />)
                })) : <h6>لا يوجد تقيمات الان</h6>
          }
          
          {
               allReviews.paginationResult &&  allReviews.paginationResult.numberOfPages >= 2 ? (
                    <Pagination pageCount={allReviews.paginationResult ? allReviews.paginationResult.numberOfPages : 0} onPress={onPress} />
               ) : null
          }
          
     </Container>
  )
}

export default RateContainer
