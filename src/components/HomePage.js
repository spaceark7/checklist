import { Row, Col, Form, Button, Card } from 'react-bootstrap'
import CheckListCard from './CheckListCard'
import InputCard from './inputCard'

const HomePage = () => {
  return (
    <Row className='d-flex flex-wrap align-items-center my-5'>
      <Col>
        <InputCard />
      </Col>
      <Col>
        <CheckListCard />
      </Col>
    </Row>
  )
}

export default HomePage
