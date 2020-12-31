import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css"

import logo from "../assets/logo512.png";
class Navigation extends Component {
	render() {
		return (
			<div className="navbar">
				<img className="logo" src={logo} alt="logo" srcset="" />
				<ul className = "links">
					<li>
						<Link to="/">Home </Link>
					</li>
					<li>
						<Link to="/employees">Employees</Link>
					</li>
					<li>
						<Link to="/aboutus"> About Us </Link>
					</li>
					{/* <li>
						<Link to="/login"> Login </Link>
					</li> */}
				</ul>
			</div>
		);
	}
}

export default Navigation;
