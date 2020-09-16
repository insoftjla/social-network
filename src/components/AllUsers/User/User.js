import React from "react";
import style from "./Users.module.css";
import UserDefaultAvatar from "../../../assets/images/blank-avatar.jpg"
import {NavLink} from "react-router-dom";

const User = ({user, follow, unfollow}) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={style.avatar}
                             src={user.photoUrl != null
                                 ? user.photoUrl
                                 : UserDefaultAvatar}/>
                    </NavLink>
                </div>
                <div>
                    {user.id}
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {
                            unfollow(user.id)
                        }}>Follow</button>
                        : <button onClick={() => {
                            follow(user.id)
                        }}>Unfollow</button>
                    }
                </div>
            </span>
            <span>
                <div>
                    {user.fullName}
                </div>
                <div>
                    {user.status}
                </div>
            </span>
            <span>
                <div>
                    {user.location}
                </div>
            </span>
        </div>
    );
}

export default User;