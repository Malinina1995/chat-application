import {instance, ResultType} from "./api";
import {UserType} from "../types";

type GetUsersType = {
    items: UserType[];
    totalCount: number;
}

export const usersAPI = {
    getUsers(pageSize: number, currentPage: number): Promise<GetUsersType> {
        return instance
            .get(`users?count=${pageSize}&page=${currentPage}`)
            .then(res => res.data);
    },
    followUsers(id: number): Promise<ResultType> {
        return instance.post(`follow/${id}`, {}).then(res => res.data);
    },
    unfollowUsers(id: number): Promise<ResultType> {
        return instance.delete(`follow/${id}`).then(res => res.data);
    }
};
