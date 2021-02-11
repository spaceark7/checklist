import { Card, Row, Col } from 'react-bootstrap'

import { FiEdit, FaTrash } from 'react-icons/all'
import { useEffect } from 'react'

const CheckListCard = ({ data }) => {
  useEffect(() => {
    console.log(data.name)
  }, [data])
  return (
    <Card className='my-3' style={{ height: '150px' }}>
      <Card.Body>
        <h4>{data.name}</h4>
        <div className='container button-container'></div>
      </Card.Body>
      <Row>
        <Col
          className='p-2 my-2'
          style={{ textAlign: 'center', cursor: 'pointer' }}
        >
          <FiEdit />
        </Col>

        <Col
          className='p-2 my-2'
          style={{ textAlign: 'center', cursor: 'pointer' }}
        >
          <FaTrash />
        </Col>
      </Row>
    </Card>
  )
}

export default CheckListCard
