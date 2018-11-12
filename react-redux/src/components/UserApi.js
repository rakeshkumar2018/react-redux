import React, { Component } from 'react'

class UserApi extends Component {
  constructor(props) {
    super(props)

  }
  getUser = () => {
    this.props.actions.getUser()
  }
  render() {
    console.log("this prop = ", this.props)
    return (
      <div>
        <h2> Welcome to user details. </h2>
        <button onClick={this.getUser}>
          User detail
        </button>
        {this.props.user.users.map((data, index) => (
          <div key={index}>

            {data.id}&nbsp;&nbsp;&nbsp;
            {data.email}
          </div>
        ))}

      </div>
    )
  }
}
export default UserApi;