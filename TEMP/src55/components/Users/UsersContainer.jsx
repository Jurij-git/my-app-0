import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/usersReducer";

//using react-redux library
//set data/state from store for component Users
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

//set callbacks
let mapDispatchToProps = (dispatch) => {
    return{
        //pass it to presentational component Users
        follow: (userId) => {
            let action = followAC(userId); //imported callback from reducer
            dispatch(action);
        },
        //pass it to presentational component Users
        unfollow: (userId) => {
            //debugger;
            let action = unfollowAC(userId); //imported callback from reducer
            dispatch(action);
        },
        //pass it to presentational component Users
        setUsers: (users) => {
            //debugger;
            let action = setUsersAC(users); //imported callback from reducer
            dispatch(action);
            //debugger;
        },
        setCurrentPage: (pageNumber) => {
            let action = setCurrentPageAC(pageNumber);
            dispatch(action);
        },
        setTotalUsersCount: (totalCount) => {
            let action = setTotalUsersCountAC(totalCount);
            dispatch(action);
        }
    }
}

//passing data and callbacks to Users component
export default connect(mapStateToProps,mapDispatchToProps)(Users);
