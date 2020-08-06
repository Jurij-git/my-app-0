import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";



class UsersContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                //debugger;
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                //debugger;
                this.props.setUsers(response.data.items);
            });
    }

    render(){

        return <Users
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            users = {this.props.users}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
        />
    }
}



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
export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);
