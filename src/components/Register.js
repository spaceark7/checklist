import { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import axios from 'axios'

const Register = () => {
  const [data, setdata] = useState({})
  const [email, setEmail] = useState()
  const [uname, setuname] = useState()
  const [password, setpassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setdata({
      email: email,
      password: password,
      username: uname,
    })

    console.log(data)
    axios
      .post('http://18.139.50.74:8080/register', {
        email: email,
        password: password,
        username: uname,
      })
      .then((res) => {
        console.log(res)
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Daftar</h2>
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
        <Form.Label>Masukan Email</Form.Label>
        <Form.Control
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          type='email'
          placeholder='masukan email'
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
