import React, { Component } from "react";
import { render } from "react-dom";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import { NavLink } from "react-router-dom";

import "./FindUsers.css";
import { followUsers } from "../../api/api";
import { usersAPI } from "../../api/api";

export let Users = props => {
  let buttonCount = Math.ceil(props.totalUsersCount / props.pageSize);

  return (
    <div className="findUsers">
      {props.users.map(user => {
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
                    disabled={props.followInProgress.some(id => id === user.id)}
                    className="btn btn-danger"
                    onClick={() => {
                        props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={props.followInProgress.some(id => id === user.id)}
                    className="btn btn-success"
                    onClick={() => {
                      props.follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
      <Pagination
        currentPage={props.currentPage}
        totalPages={buttonCount}
        changeCurrentPage={props.onCurrentPageCnanged}
        theme="bottom-border"
      />
    </div>
  );
};
