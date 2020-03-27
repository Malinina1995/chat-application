import React  from "react";
import { NavLink } from "react-router-dom";

import "./Users.css";

export let User = ({user, followInProgress, unfollow, follow}) => {
        return (
          <div key={user.id * Math.random()} className="userItem">
            <div className="userItem-mainContainer">
              <NavLink to={"/profile/" + user.id} className="userItem_link">
                <div className="userItem-leftContainer">
                  <img
                    src={
                      user.photos.small
                        ? user.photos.small
                        : "https://avatars.mds.yandex.net/get-pdb/1732371/78b3b128-3813-4d35-8b87-b3c911581ca0/s1200?webp=false"
                    }
                    alt=''
                    className="userItem_avatarka"
                  />
                  <div className="userItem_info">
                    <span className="userItem_fullName">{user.name}</span>
                    <span className="userItem_status">{user.status}</span>
                  </div>
                </div>
              </NavLink>
              <div className="userItem_buttons">
                {user.followed ? (
                  <button
                    type="button"
                    disabled={followInProgress.some(id => id === user.id)}
                    className="btn btn-danger"
                    onClick={() => {
                        unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={followInProgress.some(id => id === user.id)}
                    className="btn btn-success"
                    onClick={() => {
                      follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          </div>
        );
};
