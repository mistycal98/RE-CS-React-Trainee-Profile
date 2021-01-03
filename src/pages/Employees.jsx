// Package import
import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Emp.css";
// import "../styles/Employees.css"
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
<<<<<<< HEAD
			<div className="emp-container">
				{this.state.employees.map((employee) => (
					<Link to={`/employees/${employee.id}`}>
						<div className="emp-class">
							<div className="emp-card">
								<div className="emp-image">
									<img src={employee.imageUrl} alt={employee.firstName} />
								</div>
								<div className="emp-detials">
									<h1>
										{employee.firstName} {employee.lastName}
									</h1>
									<br />
									<h3>{employee.company}</h3>
								</div>
							</div>
=======
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
>>>>>>> tushar.mistry
						</div>
					</Link>
				))}
			</div>
		);
	}
}
export default Companies;
