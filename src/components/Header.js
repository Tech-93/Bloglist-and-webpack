import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


const Header = (props) => {

  const Logout = () => {
    var conf = window.confirm('Do you want to log out?')
    if(conf) {
      window.localStorage.clear()
      window.location.reload()
    }
  }

  const padding = {
    paddingRight: 5
  }



  return (
    <div>
      <Menu inverted>
        <Menu.Item link> <Link style={padding} to="/" > blogs </Link> </Menu.Item>
        <Menu.Item link> <Link style={padding} to="/users" > users </Link> </Menu.Item>
        <Menu.Item > <Link onClick={Logout} > logout </Link> </Menu.Item>
      </Menu>

      {props.user.name} has logged in

    </div>
  )
}

export default Header
