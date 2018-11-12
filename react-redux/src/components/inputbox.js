import React, { Component } from 'react'

export class InputBox extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        {this.props.label}
        <input type={this.props.type} value={this.props.state} placeholder={this.props.placeholder} onChange={this.props.onChange} />
      </div>
    )
  }
}

export default InputBox
