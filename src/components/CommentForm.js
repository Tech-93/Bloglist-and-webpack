import React from 'react'
import  { useField } from '../hooks'
import { connect } from 'react-redux'
import { comment } from '../reducers/commentReducer'

import { Form, Button } from 'react-bootstrap'



const CommentForm = (props) => {

  const newComment = useField('text')


  const addComment = async (event) => {
    event.preventDefault()

    const commentObject = {
      content: newComment.value,
      blog: props.blog.id
    }

    props.comment(props.blog.id, commentObject)
    newComment.reset()
  }


  return (
    <div>
      <h2> comments </h2>

      <Form onSubmit={addComment} >
        <Form.Group>
          <Form.Control type="text" {...newComment.omitreset} />
          <Button type="submit" > add comment </Button>
        </Form.Group>

      </Form>
    </div>
  )
}


const mapDispatchToProps = {
  comment
}

export default connect(null, mapDispatchToProps)(CommentForm)