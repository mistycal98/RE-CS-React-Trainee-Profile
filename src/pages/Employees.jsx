// Package import
import { Component } from "react";
import { Link } from "react-router-dom";

// Api url import
import { employeeUrl } from "../api/EmployeeApi";
class Companies extends Component {
	state = {
		employees: [],
	};

	componentDidMount = async () => {
		try {
			let result = await fetch(`${employeeUrl}/employee`);
			let employee = await result.json();
			// console.log(employee.data);
			this.setState({ employees: [...employee.data] });
			console.log(this.state.employees);
		} catch (error) {
			console.warn(error);
		}
	};
	render() {
		return (
			<div>
				{this.state.employees.map((employee) => (
					<Link to={`/employees/${employee.employeeId}`}>
						<div className="card">
							<p>{employee.employeeId}</p>
							<h1>
								{employee.firstName} {employee.lastName}
							</h1>
							<img src={employee.cloudinaryImage} alt={employee.firstName} />
							<h3>{employee.companyName}</h3>
						</div>
					</Link>
				))}
			</div>
		);
	}
}
export default Companies;
