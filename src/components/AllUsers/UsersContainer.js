import React from "react";
import {follow, loadUsers, unfollow} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hok/withAuthRedirect";
import {compose} from "redux";
import {getCurrentPage, getIsFetching, getPageSize, getTotalPages, getUsers} from "../../redux/selectors/usersSelector";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";


class UsersContainer extends React.PureComponent {


    componentDidMount() {
        const {currentPage, pageSize, loadUsers} = this.props;
        loadUsers(currentPage, pageSize);
    }

    onPageChanged = (page) => {
        const {loadUsers, pageSize} = this.props;
        loadUsers(page, pageSize)
    }

    render() {
        const {
            isFetching, totalPages, currentPage,
            onPageChanged, users, follow, unfollow
        } = this.props

        return (
            <>
                {isFetching ? <Preloader/> : undefined}
                <div>
                    <Paginator
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}/>
                    {users.map(user => {
                        return (
                            <User
                                user={user}
                                follow={follow}
                                unfollow={unfollow}/>
                        );
                    })}
                </div>
            </>
        );
    }
}

let mapStateToProps = state => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalPages: getTotalPages(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state)
    }
};

export default compose(
    connect(mapStateToProps, {follow, unfollow, loadUsers}),
    withAuthRedirect
)(UsersContainer);
