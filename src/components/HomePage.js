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
        console.log('mainpage', res.data.data.id)
        setArray(res.data.data)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [])

  return (
    <Row className='d-flex flex-wrap align-items-center my-5'>
      <Col lg={12} md={12}>
        <InputCard />
      </Col>

      {array.map((item) => {
        console.log(item.id)
        return (
          <Col className='mh-20 min-vh-20' key={item.id} md={3} sm={3} lg={3}>
            <CheckListCard data={item} />
          </Col>
        )
      })}
    </Row>
  )
}

export default HomePage
