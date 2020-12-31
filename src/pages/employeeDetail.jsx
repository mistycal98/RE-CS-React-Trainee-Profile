import React, { Component } from "react";
import { employeeUrl } from "../api/EmployeeApi";

export default class Employee extends Component {
	state = {
		employee: [],
	};
	componentDidMount = async () => {
		try {
			let result = await fetch(`${employeeUrl}/employees/${this.props.match.params.id}`);
			let response = await result.json();
			this.setState({ employee: [response] });
			console.log(this.state.employee);
		} catch (error) {
			console.log(error);
		}
	};
	render() {
		return (
			<div>
				{this.state.employee.map((emp) => (
					<div>
						<p>{emp.id}</p>
						<img src={emp.imageUrl} alt={emp.firstName} />
                        <p>{emp.company}</p>
					</div>
				))}
			</div>
		);
	}
}
