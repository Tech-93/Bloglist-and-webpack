import userService from '../services/users'

const allUsersReducer = (state = [], action) => {
  switch(action.type) {
  case 'INIT_USERS':
    return action.data
  // no default

  }




  return state
}

export const initialUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch({
      type: 'INIT_USERS',
      data: users
    })
  }
}


export default allUsersReducer