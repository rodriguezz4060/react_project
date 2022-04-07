import React from "react";
import stl from "./Users.module.css";

let Users = (props) =>{
    return  <div className={stl.profileWrapper}>
        {
            props.usersData.map (u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.profileImg} className={stl.profileImg}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick = { () => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick = { () => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>
            )
        }
        </div>

}

export default Users;