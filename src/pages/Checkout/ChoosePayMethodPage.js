import React from 'react'
import { Container } from 'react-bootstrap'
import ChoosePayMethod from '../../components/Checkout/ChoosePayMethod'

function ChoosePayMethodPage() {
  return (
    <Container style={{minHeight: '670px'}}>
          <ChoosePayMethod />
    </Container>
  )
}

export default ChoosePayMethodPage