import { Component } from "react";
import "../styles/Footer.css";

class Footer extends Component {
	render() {
		return (
			<div className="site-footer">
				<div className="footer-conatiner">
					<div className="footer-row">
						<div className="col-md-8 col-sm-6 col-xs-12">
							<p className="footer-text">
								Copyright &copy; 2020 All Rights Reserved by<a href=" ">Company</a>.
							</p>
						</div>
						<ul className="footer-icons">
							<li>
								<a className="facebook" href=" ">
									<i className="fa fa-facebook"></i>
								</a>
							</li>
							<li>
								<a className="twitter" href=" ">
									<i className="fa fa-twitter"></i>
								</a>
							</li>
							<li>
								<a className="linkedin" href=" ">
									<i className="fa fa-linkedin"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
