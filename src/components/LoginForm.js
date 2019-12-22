import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'





const LoginForm = (props) => {




  return (
    <div className="container" >

      <h1> Login to application </h1>
      <Form onSubmit={props.handleLogin}>
        <Form.Group>
          <Form.Label>username:</Form.Label>
          <Form.Control
            type="text"
            name="username"
            {...props.username.omitreset}
          />
          <Form.Label>password:</Form.Label>
          <Form.Control
            type="password"
            {...props.password.omitreset}
          />
          <Button variant="primary" type="submit">
            login
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

LoginForm.propTypes = {
  username: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired,
  handleLogin: PropTypes.func.isRequired
}


export default LoginForm

// {...props.username.omitreset}
// {...props.password.omitreset}