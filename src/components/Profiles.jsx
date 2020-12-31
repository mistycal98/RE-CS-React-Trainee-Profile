import { Component } from "react";
import "../styles/Profiles.css";
import image1 from "../assets/man1.jpeg"

class Profiles extends Component{
    render() {
        return (
            <div className="profile">
                <img src={image1} className="image1" alt="image1"></img>
                {/* <div className="check">
                    <i class="fas fa-check"></i>
                </div> */}
                <h3 className="name">Mark </h3>
                <p className="title">Web Developer</p>
                <p className="description">A Web Developer at Raw Engineering</p>
                <button className="button">Profile</button>
            </div>
        )
    }
}

export default Profiles;