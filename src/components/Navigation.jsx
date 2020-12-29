import { Component } from "react";
import { Link } from "react-router-dom";
class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
              <Link to="/companies">Companies</Link>
           </li> 
          <li>
            <Link to="/aboutus"> About Us </Link>
          </li>
          <li>
            <Link to="/login"> Login </Link>
          </li>

        </ul>
      </div>
    );
  }
}

export default Navigation;