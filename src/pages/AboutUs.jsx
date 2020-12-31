import { Component } from "react";
import "../styles/About.css";
import logo1 from "../assets/raweng.jpeg";
import logo2 from "../assets/contentstack.png";
import logo3 from "../assets/surf.png";
class AboutUs extends Component {
	render() {
		return (
			<div className="grid-container">
				<div className="card">
					<div className="img-class">
						<img src={logo1} alt="img1"></img>
					</div>
					<div className="content">
						<h2>RAW ENGINEERING</h2>
						<p>
							Raw Engineering is an Innovative Digital Solutions company providing Digital
							Transformation Strategy and Custom Development Services. We partner with the world’s
							best Fortune 500 Enterprises and Startups to deliver Headless CMS Strategy &
							Implementation, Mobile Apps, Websites, SaaS Products, Cloud Strategy, DevOps and SRE
							Solutions.
						</p>
						<button className="about-button">
							<a href="https://www.raweng.com/" className="button-link">
								More Information
							</a>
						</button>
					</div>
				</div>

				<div className="card">
					<div className="img">
						<img src={logo2} alt="img1"></img>
					</div>
					<div className="content">
						<h2>CONTENTSTACK</h2>
						<p>
							Contentstack is the leading API-first content hub at the intersection of CMS and DXP
							powering modernized digital experiences. It recently received a Series-A funding of
							$31.5 million to deliver personalized, omnichannel digital experiences.
						</p>
						<button>
							<a href="https://www.contentstack.com/" className="button-link">
								More Information
							</a>
						</button>
					</div>
				</div>

				<div className="card">
					<div className="img">
						<img src={logo3} alt="img1"></img>
					</div>
					<div className="content">
						<h2>SURFBOARD VENTURES</h2>
						<p>
							Organize several events all year-round, ranging from online sessions for students and
							classroom activities to innovation-driven development competitions.
						</p>
						<button>
							<a href="https://www.surfboardventures.com/" className="button-link">
								More Information
							</a>
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default AboutUs;
