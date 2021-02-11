import axios from 'axios'
import { Row, Col, Form, Button, Card } from 'react-bootstrap'
import CheckListCard from './CheckListCard'
import InputCard from './inputCard'
import { useEffect, useState } from 'react'

const HomePage = () => {
  const config = {
    headers: {
      authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  }

  const [array, setArray] = useState([])
  useEffect(() => {
    axios
      .get('http://18.139.50.74:8080/checklist', config)
      .then((res) => {
        setArray(res.data.data)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [])

  return (
    <Row className='d-flex flex-wrap align-items-center my-5'>
      <Col>
        <InputCard />
      </Col>
      <Col>
        {array.map((item) => {
          return <CheckListCard data={array} />
        })}
      </Col>
    </Row>
  )
}

export default HomePage
