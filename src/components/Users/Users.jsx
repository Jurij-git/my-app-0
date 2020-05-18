import React from 'react';
import styles from './users.module.css'

let Users = (props) => {

    props.setUsers(
        [
            {id: 1, photoUrl:'https://zombietar.framiq.com/assets/moreAvatars/flagtar00.png', followed: true, fullname: 'Christine', status: 'walking', location: {city: 'New York', country:'US'}},
            {id: 2, photoUrl:'https://zombietar.framiq.com/assets/moreAvatars/piratetar04.png', followed: false, fullname: 'Alex', status: 'busy', location: {city: 'Minsk', country:'Belarus'}},
            {id: 3, photoUrl:'https://zombietar.framiq.com/assets/moreAvatars/trekkietar04.png', followed: false, fullname: 'Andrew', status: 'working', location: {city: 'Jacksonville', country:'US'}},
        ]
    );

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                       <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick = { () => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick = { () => {props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                </span>

                <span>
                     <span>
                         <div>{u.fullname}</div>
                         <div>{u.status}</div>
                    </span>
                     <span>
                         <div>{u.location.country}</div>
                         <div>{u.location.city}</div>
                    </span>
                </span>

            </div>)
        }
    </div>
}

export default Users;