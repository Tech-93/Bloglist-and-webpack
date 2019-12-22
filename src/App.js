import React, { useEffect } from 'react'
import  { useField } from './hooks'
import blogService from './services/blogs'
import loginService from './services/login'
import LoggedInPage from './components/LoggedInPage'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import './index.css'
import { connect } from 'react-redux'
import {  setLoginError } from './reducers/notificationReducer'
import { initialBlogs } from './reducers/blogReducer'
import { setUser } from './reducers/userReducer'
import { initialUsers } from './reducers/allUsersReducer'
import { setMessage } from './reducers/notificationReducer'




const App = ({ setLoginError, initialBlogs, setUser, user, initialUsers, setMessage }) => {

  const username = useField('text')
  const password = useField('password')



  useEffect(() => {
    initialBlogs()
  }, [initialBlogs])

  useEffect(() => {
    initialUsers()
  }, [initialUsers] )






  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [setUser])




  const handleLogin = async (event) => {
    event.preventDefault()

    const userCredentials = {
      username: username.value,
      password: password.value
    }

    try {
      const user = await loginService.login(userCredentials)
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setMessage(`welcome ${user.name}`)

      console.log(username.value)
    } catch (exception) {
      setLoginError()
    }
  }

  console.log(user)


  const loginPage = () => < LoginForm
    handleLogin = {handleLogin}
    username = {username}
    password = {password}

  />

  const pageOnLogin = () => <LoggedInPage  />


  return(
    <div>
      <Notification  />
      {user === null && loginPage()}
      {user !== null && pageOnLogin()}
    </div>
  )

}







const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  setLoginError,
  initialBlogs,
  setUser,
  initialUsers,
  setMessage
}


export default connect(mapStateToProps, mapDispatchToProps)(App)