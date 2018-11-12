import React, { Component } from 'react'

class Student extends Component {
  constructor(props) {
    super(props)
  }
  getStudent = () => {
    this.props.actions.getStud()
  }
  render() {
    console.log("Student=  ", this.props)
    return (
      <div>
        <h2>Student Records:</h2>
        <button onClick={this.getStudent}>
          Student
        </button>
        {this.props.stud.stud.map((data, key) => (

          <div key={key}>
            {data.id}
          </div>
        ))}
      </div>
    )
  }
}
export default Student;