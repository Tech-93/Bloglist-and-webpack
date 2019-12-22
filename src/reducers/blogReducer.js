/* eslint-disable no-case-declarations */
import blogService from '../services/blogs'


const blogReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action ', action)

  switch(action.type) {
  case 'INIT_BLOGS':
    return action.data

  case 'NEW_BLOG':
    return state.concat(action.data)

  case 'LIKE':
    const id = action.data
    const blogToChange = state.find(blog => blog.id === id)
    const changedBlog = {
      ...blogToChange,
      likes: blogToChange.likes + 1
    }
    return state.map(blog =>
      blog.id !== id ? blog : changedBlog
    )

  case 'REMOVE':
    return state = state.filter(blog => blog.id !== action.data)




       // no default
  }

  return state
}


export const initialBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs,
    })
  }
}


export const createBlog = object => {
  return async dispatch => {
    const newBlog = await blogService.create(object)
    dispatch({
      type: 'NEW_BLOG',
      data: newBlog
    })
  }
}

export const Like = (id) => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    const blogToUpdate = blogs.find(blog => blog.id === id)
    const updatedBlog = {
      ...blogToUpdate,
      likes: blogToUpdate.likes + 1
    }
    await blogService.update(id, updatedBlog)
    dispatch({
      type: 'LIKE',
      data: id
    })
  }
}




export const Remove = (id) => {
  return async dispatch => {
    await blogService.remove(id)
    dispatch({
      type: 'REMOVE',
      data: id
    })
  }
}



export default blogReducer