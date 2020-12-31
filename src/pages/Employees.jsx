// Package import
import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Emp.css"
// import "../styles/Employees.css"
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
									<br/>
									<h3>{employee.company}</h3>
								</div>

							</div>


							{/* <p>{employee.id}</p> */}
							
						</div>
					</Link>
				))}
			</div>
		);
	}
}
export default Companies;
