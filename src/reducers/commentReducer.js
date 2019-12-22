import blogService from '../services/blogs'


const commentReducer = (state = [], action) => {
  switch(action.type) {

  case 'EMPTY':
    return action.data

  case 'INIT_COMMENTS':
    return action.data

  case 'COMMENT':
    return state.concat(action.data)
  // no default
  }

  return state
}

export const emptyComments = () => {
  return {
    type: 'EMPTY',
    data: []
  }
}

export const initialComments = (id) => {
  return async dispatch =>  {

    const blogs = await blogService.getAll()
    const blog = blogs.find(blog => blog.id === id)
    console.log('KOMMENTARER')
    console.log(blog.comments)


    dispatch({
      type: 'INIT_COMMENTS',
      data: blog.comments
    })
  }

}

export const comment = (id, object) => {
  return async dispatch => {
    const newComment = await blogService.createComment(id, object)
    dispatch({
      type: 'COMMENT',
      data: newComment
    })
  }
}

export default commentReducer