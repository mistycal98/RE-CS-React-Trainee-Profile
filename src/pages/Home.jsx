import {Component} from "react";
import Profiles from "../components/Profiles"

class Home extends Component{
    render(){
        return(
        <div>
                <h1>Home Page</h1>
                <Profiles />
        </div>
        );
    }
}
export default Home;