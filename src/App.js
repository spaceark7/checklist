import { Container, Row, Col } from 'react-bootstrap'
import HomePage from './components/HomePage'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <div className='App'>
      <div className='Header'>
        <h2>Checklist App</h2>
      </div>
      <Container>
        <Row>
          <Col lg={3} md={3}>
            <Register />
          </Col>

          <Col lg={3} md={3}>
            <Login />
          </Col>
        </Row>
        <HomePage />
      </Container>
    </div>
  )
}

export default App
