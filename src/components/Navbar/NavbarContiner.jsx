import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
        stateData: state.sideBar
    }
}

const NavbarContiner = connect(mapStateToProps, '')(Navbar);

export default NavbarContiner;