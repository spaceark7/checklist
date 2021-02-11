import { Card, Row, Col } from 'react-bootstrap'

import { FiEdit, FaTrash } from 'react-icons/all'
import { useEffect } from 'react'
import axios from 'axios'

const CheckListCard = ({ data }) => {
  const config = {
    headers: {
      authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  }
  const handleDelete = () => {
    axios
      .delete(`http://18.139.50.74:8080/checklist/${data.id}`, config)
      .then((res) => {
        console.log(res)
        window.location.reload()
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  useEffect(() => {
    console.log(data.name)
  }, [data])
  return (
    <Card text='light' className='my-3 bg-primary' style={{ height: '150px' }}>
      <Card.Body>
        <h4>{data.name}</h4>
        <div className='container button-container'></div>
      </Card.Body>
      <Row>
        <Col
          className='delete-icon p-2 my-2'
          style={{ textAlign: 'center', cursor: 'pointer' }}
        >
          <FaTrash onClick={handleDelete} />
        </Col>
      </Row>
    </Card>
  )
}

export default CheckListCard
