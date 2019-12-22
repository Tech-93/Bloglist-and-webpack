import React, { useState } from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'
import { Table, Button } from 'semantic-ui-react'


const Blogs = (props) => {

  const [blogFormVisible, setBlogFormVisible] = useState(false)
  const hideWhenVisible = { display: blogFormVisible ? 'none' : '' }
  const showWhenVisible = { display: blogFormVisible ? '' : 'none' }




  const renderBlogs = () => (
    <Table striped celled>
      <Table.Body>
        {props.blogs.map(blog =>
          <Blog key={blog.id} blog = {blog} emptyComments={props.emptyComments}  />
        )}
      </Table.Body>
    </Table>
  )


  return (
    <div>

      <h1> Blogs </h1>

      <h2> create new </h2>


      <div style={hideWhenVisible}>
        <Button onClick={() => setBlogFormVisible(true)}>new blog</Button>
      </div>
      <div style={showWhenVisible}>
        <BlogForm />
        <Button onClick={() => setBlogFormVisible(false)}>cancel </Button>
      </div>

      {renderBlogs()}
    </div>
  )
}


export default Blogs
