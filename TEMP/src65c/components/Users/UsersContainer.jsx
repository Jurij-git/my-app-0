import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress, getUsers
} from "../../redux/usersReducer";
//import * as axios from 'axios';
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
//import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component{

    componentDidMount() {
        // this.props.toggleIsFetching(true);
        //
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //     });
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        //
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //     });
        debugger;
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                toggleFollowingProgress = {this.props.toggleFollowingProgress}
                followingInProgress = {this.props.followingInProgress}
            />
            </>
    }
}



//using react-redux library
//set data/state from store for component Users
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


//passing data and callbacks to Users component
export default connect(mapStateToProps,
    {
        follow, unfollow,
        setCurrentPage,
        toggleFollowingProgress, getUsers})(UsersContainer);
