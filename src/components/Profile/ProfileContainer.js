import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserById, setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hok/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.PureComponent {

    componentDidMount() {
        if (this.props.match.params.userId !== undefined) {
            this.props.getUserById(this.props.match.params.userId);
        } else if (this.props.authUser !== null) {
            this.props.setUserProfile(this.props.authUser)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId === undefined) {
            this.props.setUserProfile(this.props.authUser)
        }
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
}

let mapStateToProps = state => {

    return {
        userProfile: state.profilePage.userProfile,
        isFetching: state.usersPage.isFetching,
        token: state.authentication.token,
        authUser: state.authentication.user,
    }
};

export default compose(
    connect(mapStateToProps,
        {setUserProfile, getUserById}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
