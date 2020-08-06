import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress, requestUsers
} from "../../redux/usersReducer";
//import * as axios from 'axios';
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/usersSelectors";
//import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component{

    componentDidMount() {
        // this.props.toggleIsFetching(true);
        //
        // usersAPI.requestUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //     });
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        // this.props.setCurrentPage(pageNumber);//defect - propustil stroku
        // this.props.toggleIsFetching(true);
        //
        // usersAPI.requestUsers(pageNumber, this.props.pageSize).then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //     });
        //debugger; tut defect
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render(){

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                onPageChanged = {this.onPageChanged}
                users = {this.props.users}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
                //toggleFollowingProgress = {this.props.toggleFollowingProgress}
                followingInProgress = {this.props.followingInProgress}
            />
            </>
    }
}



//using react-redux library
//set data/state from store for component Users
// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

//passing data and callbacks to Users component
// export default connect(mapStateToProps,
//     {
//         follow, unfollow,
//         setCurrentPage,
//         toggleFollowingProgress, requestUsers})(UsersContainer);

export default compose(
    //withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow,setCurrentPage,toggleFollowingProgress,requestUsers})
)(UsersContainer);