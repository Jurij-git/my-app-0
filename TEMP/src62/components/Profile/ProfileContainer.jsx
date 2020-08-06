import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount() {
        //axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            .then(response => {
                debugger;
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile
    })

let withUrlDataContainerComponent = withRouter(ProfileContainer);

//passing data and callbacks to Profile component
export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);
