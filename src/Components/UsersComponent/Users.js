import React, { Component } from "react";
import { render } from "react-dom";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import { NavLink } from "react-router-dom";

import "./Users.css";
import { followUsers } from "../../api/api";
import { usersAPI } from "../../api/api";
import { User } from "./User";

export let Users = props => {
  let buttonCount = Math.ceil(props.totalUsersCount / props.pageSize);

  return (
    <div className="findUsers">
      {props.users.map(user => {
        return (
          <User
            user={user}
            followInProgress={props.followInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
            key={user.id * Math.random()}
          />
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
