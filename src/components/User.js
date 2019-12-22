import React from 'react'


const User = ( { user } ) => {

  if ( user === undefined) {
    return <div>Loading...</div>
  }

  const renderUsersBlogs = () => (
    <div>
      <ul>
        {user.blogs.map(blog => <li key={blog.id} > {blog.title} </li>)}
      </ul>
    </div>
  )


  return (
    <div>
      <h2> {user.name} </h2>
      <h3> added blogs </h3>
      {renderUsersBlogs()}
    </div>
  )
}

export default User