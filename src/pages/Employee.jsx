import React, { Component } from "react";
import { employeeUrl } from "../api/EmployeeApi";

export default class Employee extends Component {
	state = {
		employee: [],
	};
	componentDidMount = async () => {
		try {
			let result = await fetch(`${employeeUrl}/employee/${this.props.match.params.id}`);
			let response = await result.json();
			console.log(response.data);
			this.setState({ employee: [response.data] });
			// console.log(this.state.employee);
		} catch (error) {
			console.log(error);
		}
	};
	render() {
		return (
			<div>
				{this.state.employee.map((emp) => (
					<div key={emp.employeeId}>
						<p>{emp.employeeId}</p>
						<img src={emp.cloudinaryImage} alt={emp.firstName} />
						<p>{emp.companyName}</p>
						<button><a href={emp.profile_url}>Learn More</a></button>
					</div>
				))}
			</div>
		);
	}
}
