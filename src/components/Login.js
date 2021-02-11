import { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import axios from 'axios'

const Register = () => {
  const [data, setdata] = useState({})

  const [uname, setuname] = useState()
  const [password, setpassword] = useState()

  const handleSubmit = (e) => {
    console.log(data)
    e.preventDefault()
    axios
      .post('http://18.139.50.74:8080/login', {
        password: password,
        username: uname,
      })
      .then((res) => {
        localStorage.setItem('authToken', res.data.data.token)
        console.log(res.data)
      })
      .catch(console.log)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <Form.Group>
        <Form.Label>Masukan username</Form.Label>
        <Form.Control
          onChange={(e) => {
            setuname(e.target.value)
          }}
          type='text'
          placeholder='masukan username'
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Masukan password</Form.Label>
        <Form.Control
          onChange={(e) => {
            setpassword(e.target.value)
          }}
          type='password'
          placeholder='masukan password'
        />
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default Register
