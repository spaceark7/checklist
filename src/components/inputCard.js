import { useState } from 'react'
import { Row, Col, Form, Button, Card } from 'react-bootstrap'
import axios from 'axios'
const InputCard = () => {
  const [task, setTask] = useState('')
  const config = {
    headers: {
      authorization: `Bearer ${JSON.parse(localStorage.getItem('authToken'))}`,
    },
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      axios
        .post(
          'http://18.139.50.74:8080/item',
          {
            id: 4,
            itemName: task,
          },
          config
        )
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <Card>
      <h2 className='mx-2 my-2'>Tambah Checklist</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Col>Nama Tugas</Col>
          <Col>
            <Form.Control
              onChange={(e) => {
                setTask(e.target.value)
                console.log(task)
              }}
              type='text'
              placeholder='Masukan Nama tugas'
            />
          </Col>
        </Form.Group>
        <Form.Group className='mx-2 align-items-center'>
          <Button as='button'>Submit</Button>
        </Form.Group>
      </Form>
    </Card>
  )
}

export default InputCard
