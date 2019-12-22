import React from 'react'
import User from './User'
import { Route, Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'


const Users = (props) => {

  const userById = (id) => props.users.find(u => u.id === id)

  const Render = ( { user }) => {
    return (
      <Table.Row key={user.id}>
        <Table.Cell> <Link to={`/users/${user.id}`}  > {user.name} </Link> </Table.Cell>
        <Table.Cell> {user.blogs.length} </Table.Cell>
      </Table.Row>
    )
  }

  const Renderer = ({ users }) => {

    const renderUsers = () => users.map(user =>
      <Render key={user.id} user={user} />
    )

    return (

      <div>
        <h1> Users </h1>
        <Table striped celled >
          <Table.Body>
            <Table.Row> <Table.Cell> </Table.Cell> <Table.Cell> Blogs created </Table.Cell> </Table.Row>
            {renderUsers()}
          </Table.Body>
        </Table>
      </div>
    )
  }


  return (
    <div>

      <div>
        <Route path="/users" render={() => <Renderer users={props.users} />} />
        <Route path="/users/:id" render={({ match }) => <User user={userById(match.params.id)} />} />
      </div>

    </div>
  )
}

export default Users