import React from 'react'
import  { useField } from '../hooks'
import { connect } from 'react-redux'
import { setMessage } from '../reducers/notificationReducer'
import { createBlog } from '../reducers/blogReducer'

import { Form, Button } from 'react-bootstrap'
// import { Button } from 'semantic-ui-react'



const BlogForm = (props) => {
  const newTitle = useField('text')
  const newAuthor = useField('text')
  const newUrl = useField('text')




  const addBlog = async (event) => {
    event.preventDefault()

    const blogObject = {
      title: newTitle.value,
      author: newAuthor.value,
      url: newUrl.value
    }

    props.createBlog(blogObject)

    newTitle.reset()
    newAuthor.reset()
    newUrl.reset()

    props.setMessage (
      'a new blog ' + newTitle.value + ' by ' + newAuthor.value + ' added'
    )


  }


  return (
    <div>
      <Form onSubmit={addBlog}>
        <Form.Group>
          <Form.Label> title: </Form.Label>
          <Form.Control type="text" {...newTitle.omitreset} />
          <Form.Label> author: </Form.Label>
          <Form.Control type="text" {...newAuthor.omitreset} />
          <Form.Label> url: </Form.Label>
          <Form.Control type="text" {...newUrl.omitreset} />
          <Button type="submit"> create </Button>
        </Form.Group>

      </Form>


    </div>
  )
}

const mapDispatchToProps = {
  setMessage,
  createBlog
}



export default connect(null, mapDispatchToProps)(BlogForm)


/*
<form onSubmit={addBlog}>
        <div> title: <input {...newTitle.omitreset} /> </div>
        <div> author: <input {...newAuthor.omitreset} /> </div>
        <div> url: <input { ...newUrl.omitreset} /> </div>
        <Button type="submit"> create </Button>
      </form>
*/