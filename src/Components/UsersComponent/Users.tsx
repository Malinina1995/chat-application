import React from "react";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";
import "./Users.css";
import {User} from "./User";
import {UserType} from "../../types";
import {FollowHandler, UnfollowHandler} from "./usersConnector";

type Props = {
    totalUsersCount: number;
    users: UserType[];
    followInProgress: number[];
    unfollow: UnfollowHandler;
    follow: FollowHandler;
    currentPage: number;
    onCurrentPageChanged: (page: number) => void
}

export const Users: React.FC<Props> = (props) => {
    const {
        totalUsersCount,
        users,
        followInProgress,
        unfollow, follow,
        currentPage,
        onCurrentPageChanged
    } = props;
    return (
        <div className="findUsers">
            {users.map(user => {
                return (
                    <User
                        user={user}
                        followInProgress={followInProgress}
                        unfollow={unfollow}
                        follow={follow}
                        key={user.id * Math.random()}
                    />
                );
            })}
            <div className='pagination'>
                <Pagination
                    currentPage={currentPage}
                    totalSize={totalUsersCount}
                    changeCurrentPage={onCurrentPageChanged}
                    theme="border-bottom"
                />
            </div>
        </div>
    );
};
