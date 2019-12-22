import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Like, Remove } from '../reducers/blogReducer'
import {
  BrowserRouter as Router,
  Route, Redirect
} from 'react-router-dom'

import Header from './Header'
import Blogs from './Blogs'
import BlogFullInfo from './BlogFullInfo'
import Users from './Users'

import { emptyComments } from '../reducers/commentReducer'




const LoggedInPage = ({ blogs, Like, Remove, user, users, emptyComments }) => {

  const [redirecter, setRedirecter] = useState(false)



  const blogById = (id) => blogs.find(b => b.id === id)

  const handleLikes = id => {
    console.log('like', id)
    Like(id)

  }

  const handleRemove = id => {

    const blog = blogs.find(blog => blog.id === id)
    if(user.username === blog.user.username){
      var conf = window.confirm('remove ' + blog.title + '' + blog.author)
      if(conf){
        Remove(id)
        setRedirecter(true)

        setTimeout(() => {
          setRedirecter(false)
        }, 1000)

      }
    }
  }


  console.log('HERE')
  console.log(blogs)

  return (
    <div className="container" >

      <Router>

        <Header user={user}  />

        <Route exact path="/" render={() => <Blogs blogs={blogs} user={user} emptyComments={emptyComments} />} />
        <Route path="/blogs/:id" render={({ match }) =>
          !redirecter ? <BlogFullInfo blog={blogById(match.params.id)} handleLikes={handleLikes} user={user} handleRemove={handleRemove} />
            : <Redirect to="/" /> } />
        <Route path="/users" render={() =>  <Users users={users} /> } />

      </Router>

    </div>
  )
}




const sortedUsers = ( { allUsers } ) => {
  const sorted = allUsers.sort((a,b) => b.blogs - a.blogs)
  return sorted
}

const sortedBlogs = ( { blogs } ) => {
  const justBlogs = blogs.sort((a,b) => b.likes - a.likes)
  return justBlogs
}




const mapStateToProps = (state) => {
  return {
    blogs: sortedBlogs(state),
    user: state.user,
    users: sortedUsers(state),

  }
}

const mapDispatchToProps = {
  Like,
  Remove,
  emptyComments
}



const connectedLoggedInPage = connect(mapStateToProps, mapDispatchToProps)(LoggedInPage)
export default connectedLoggedInPage