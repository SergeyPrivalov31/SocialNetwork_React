import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.ava_description}>
            <div className={s.ava}>
                <img src={props.profile.data} alt={' '}/>
            </div>
            <div className={s.description}>
                <ul>{props.profile.fullName}
                    <li>
                        {props.profile.data}
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default ProfileInfo;