import React from 'react';
import {connect} from 'react-redux';
import {follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching} from "../../redux/usersReducer";
import * as axios from 'axios';
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                {
                    withCredentials: true,
                    headers: {
                        "API-KEY": "9dcd6ae7-eb21-4615-b06c-cd2848b04266"
                    }
                }
            )
            .then(response => {
                this.props.toggleIsFetching(false);
                //debugger;
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
                {
                    withCredentials: true,
                    headers: {
                        "API-KEY": "9dcd6ae7-eb21-4615-b06c-cd2848b04266"
                    }
                }
            )
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
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
        isFetching: state.usersPage.isFetching
    }
}


//passing data and callbacks to Users component
export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);
