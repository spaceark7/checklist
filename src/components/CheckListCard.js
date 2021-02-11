import { Card, Row, Col } from 'react-bootstrap'

import { FiEdit, FaTrash } from 'react-icons/all'

const CheckListCard = ({ data }) => {
  console.log(data)
  return (
    <Card className='my-3'>
      <Card.Body>
        <h2>{data.name}</h2>
        <div className='container button-container'>
          <Row>
            <Col>
              <FiEdit />
            </Col>

            <Col className='text-end' style={{ textAlign: 'end' }}>
              <FaTrash />
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CheckListCard
