import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    //debugger;
    let pages = [];
    for(let i=1; i<=pagesCount; i++)
    {
        pages.push(i);
    }

    return <div>
        <div>
            {
                pages.map( p => {
                        return(
                            <span
                                className={props.currentPage === p ? styles.selectedPage : ""}
                                onClick={ (e) => {props.onPageChanged(p);}}
                            > {p} </span>
                        )
                    }
                )
            }
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button disabled={props.followingInProgress} onClick = { () => {
                                    props.toggleFollowingProgress(true);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "9dcd6ae7-eb21-4615-b06c-cd2848b04266"
                                            }
                                        })
                                        .then(response => {
                                            //debugger;
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                            props.toggleFollowingProgress(false);
                                        });

                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress} onClick = { () => {
                                    props.toggleFollowingProgress(true);

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "9dcd6ae7-eb21-4615-b06c-cd2848b04266"
                                            }
                                        })
                                        .then(response => {
                                            //debugger;
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                            props.toggleFollowingProgress(false);
                                        });

                                }}>Follow</button>
                        }
                    </div>
                </span>

                <span>
                     <span>
                         <div>{u.name}</div>
                         <div>{u.status}</div>
                    </span>
                     <span>
                         <div>{"u.location.country"}</div>
                         <div>{"u.location.city"}</div>
                    </span>
                </span>

            </div>)
        }
    </div>

}

export default Users;