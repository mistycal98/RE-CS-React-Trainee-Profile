import { Component } from "react";
import "../styles/Footer.css";

class Footer extends Component {
	render() {
		return (
			<div className="footer-row">
				<p>
					Copyright &copy; 2020 All Rights Reserved by
					<a href=" ">Company</a>.
				</p>
				<ul className="footer-icons">
					<li>
						<a href=" ">
							<i className="fa fa-facebook"></i>
						</a>
					</li>
					<li>
						<a href=" ">
							<i className="fa fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href=" ">
							<i className="fa fa-linkedin"></i>
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Footer;
