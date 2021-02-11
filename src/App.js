import { Container, Row, Col } from 'react-bootstrap'
import HomePage from './components/HomePage'
import Register from './components/Register'
import Login from './components/Login'
import { useState, useEffect } from 'react'

function App() {
  const [userState, setUserState] = useState('')
  useEffect(() => {
    const data = localStorage.getItem('authToken')
    setUserState(data)
  }, [])

  return (
    <div className='App'>
      <div className='Header'>
        <h2>Checklist App</h2>
      </div>
      <Container>
        <Row>
          <Col lg={6} md={6}>
            <Register />
          </Col>

          <Col lg={6} md={6}>
            <Login />
          </Col>
        </Row>
        {userState ? (
          <HomePage />
        ) : (
          <Row
            className='text-center d-flex align-items-center'
            style={{ height: '50vh' }}
          >
            <h2>Silahkan Login atau daftar</h2>
          </Row>
        )}
      </Container>
    </div>
  )
}

export default App
