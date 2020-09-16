import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";

class HeaderRenderContainer extends React.PureComponent {


    render() {
        return (
            <div>
                <Header {...this.props}/>
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        user: state.authentication.user,
        isAuth: state.authentication.isAuth
    };
}

const HeaderContainer = connect(mapStateToProps, {logout, login})(HeaderRenderContainer);

export default HeaderContainer;