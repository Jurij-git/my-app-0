import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

//create HOC on ProfileContainer
//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});
// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// //passing data and callbacks to Profile component
// export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}), //3
    withRouter, //2
    withAuthRedirect    //1
)(ProfileContainer);