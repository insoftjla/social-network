import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToProps = state => {
    return {
        isAuth: state.authentication.isAuth
    };
}

export const withAuthRedirect = (Component) => {
    class authRedirect extends React.Component{
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>;

            return <Component {...this.props}/>;
        }
    }

    let ConnectAuthRedirect = connect(mapStateToProps)(authRedirect)

    return ConnectAuthRedirect;
}