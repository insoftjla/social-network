import React from 'react';
import style from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import Status from "./ProfileStatus"

const Profile = ({userProfile}) => {
    if (!userProfile) return <Preloader/>;
    return (
        <div>
            <ProfileInfo user={userProfile}/>
            <MyPostsContainer/>
        </div>
    );
}

const ProfileInfo = ({user}) => {
    return (
        <div>
            <div className={style.descriptionBlock}>
                <div>Last updated: {user.updated}</div>
                <img src={user.photoUrl}/>
                <div>
                    <Status status={'MyStatus'}/>
                </div>
                <div>{user.firstName} {user.lastName}</div>
                <div>{user.location}</div>
                <div>{user.status}</div>

                <div>
                    description
                </div>
            </div>
        </div>
    );
}

export default Profile;