import React, { Component } from 'react'

export class Test extends Component {
	constructor(props) {
		super(props);
		console.log(props)
	}
	componentDidMount = () => {
	}

	getMsg = () => {
		this.props.actions.getUser()
	}

	render() {
		console.log("Test prop: ", this.props)
		return (
			<div>
				Hello Test Filess
				<button onClick={this.getMsg}>
					GET DATA
				</button>
				<div >
					{this.props.test.testMsg}
				</div>
				{this.props.test.stations.map((data, key) => (

					<div key={key}>
						{data.name}
					</div>
				))}

				<div>
					{this.props.test.errorMsg}
				</div>

			</div>
		)
	}
}

export default Test
