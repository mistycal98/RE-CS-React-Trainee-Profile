// Package import
import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Emp.css";
// import "../styles/Employees.css"
// Api url import
import { employeeUrl } from "../api/EmployeeApi";
class Employees extends Component {
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
			<div className="emp-container">
				{this.state.employees.map((employee) => (
					<Link to={`/employees/${employee.employeeId}`}>
						<div className="emp-class" key = {employee.employeeId}>
							<div className="emp-card">
								<div className="emp-image">
									<img src={employee.cloudinaryImage} alt={employee.firstName} />
								</div>
								<div className="emp-detials">
									<h1>
										{employee.firstName} {employee.lastName}
									</h1>
									<br />
									<h3>{employee.companyName}</h3>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		);
	}
}
export default Employees;
