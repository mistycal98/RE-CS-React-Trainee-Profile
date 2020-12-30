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
			let result = await fetch(`${employeeUrl}/employees`);
			let employee = await result.json();
			this.setState({ employees: [...employee] });
		} catch (error) {
			console.warn(error);
		}
	};
	render() {
		return (
			<div>
				<select>
					<option>Raw Engineering</option>
					<option>Contentstack</option>
					<option>Surfboard Ventures</option>
				</select>
				{this.state.employees.map((employee) => (
					<Link to={`/employees/${employee.id}`}>
						<div className="card">
							<p>{employee.id}</p>
							<h1>
								{employee.firstName} {employee.lastName}
							</h1>
							<img src={employee.imageUrl} alt={employee.firstName} />
							<h3>{employee.company}</h3>
						</div>
					</Link>
				))}
			</div>
		);
	}
}
export default Companies;
