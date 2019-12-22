const userReducer = (state = null, action) => {
  console.log('state now: ', state)
  console.log('action ', action)

  switch(action.type) {

  case 'SET_USER':
    return state = action.data

    // no default
  }
  return state
}

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    data: user
  }
}



export default userReducer