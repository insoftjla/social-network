import React from 'react';
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import FormLoginContainer from "./FormLoginContainer";
import {Redirect} from "react-router-dom";

export class AuthenticationApiContainer extends React.Component {

    render() {
        return this.props.isAuth
            ? <Redirect to={'/profile'}/>
            : (
                <div>
                    <FormLoginContainer login={this.props.login}/>
                </div>
            );
    }
}

let mapStateToProps = state => {

    return {
        user: state.authentication.user,
        isAuth: state.authentication.isAuth
    }
};

const AuthenticationContainer = connect(mapStateToProps, {login})(AuthenticationApiContainer);

export default AuthenticationContainer;
