const notificationReducer = (state = '', action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {

  case 'MESSAGE':
    return state = action.data.content

  case 'LOGIN_ERROR':
    return state = 'wrong username or password'

  case 'RESET':
    return state = ''

      // no default

  }
  return state
}

export const loginError = () => {
  return {
    type: 'LOGIN_ERROR'
  }
}

export const Reset = () => {
  return {
    type: 'RESET'
  }
}

export const setMessage = (content) => {
  return async dispatch => {
    dispatch({
      type: 'MESSAGE',
      data: { content }
    })

    setTimeout(() => {
      dispatch({
        type: 'RESET'
      })
    }, 5000)
  }
}

export const setLoginError = () => {
  return async dispatch => {

    dispatch({
      type: 'LOGIN_ERROR'
    })

    setTimeout(() => {
      dispatch({
        type: 'RESET'
      })
    }, 5000 )
  }
}




export default notificationReducer