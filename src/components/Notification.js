import React from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap'



const Notification = ( props ) => {


  if(props.notification===''){
    return null
  } else if (props.notification.includes('wrong username')) {
    return <div > <Alert variant="danger" > {props.notification} </Alert> </div>
  } else {
    return <div > <Alert variant="success" > {props.notification} </Alert> </div>
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    notification: state.notification
  }
}

const connectedNotification = connect(mapStateToProps)(Notification)


export default connectedNotification