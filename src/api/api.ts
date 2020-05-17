import axios from "axios";
import {PhotosType, ProfileType, UserType} from "../types";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://test-api.mokeev1995.ru/api/1.0/",
    headers: {
        "API-KEY": "4531d9e2-5896-44a2-8434-2e6848972af0"
    }
});

type GetUsersType = {
    items: UserType[];
    totalCount: number;
}

export type ResultType<T = any, K = ResultCodes> = {
    resultCode: K | ResultCodes;
    messages: string[];
    data: T;
}

export type SavePhotoType = {
    data: {
        photos: PhotosType
    };
    resultCode: ResultCodes;
    messages: string;
}

export type AuthType = {
    id: number;
    email: string;
    login: string;
}

export enum ResultCodes {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
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

export const profileAPI = {
    getProfile(id: number): Promise<ProfileType> {
        return instance.get(`profile/${id}`).then(res => res.data);
    },
    getStatus(id: number): Promise<string> {
        return instance.get(`profile/status/${id}`).then(res => res.data);
    },
    updateStatus(status: string): Promise<ResultType> {
        return instance.put('profile/status', {status}).then(res => res.data);
    },
    savePhoto(file: File): Promise<SavePhotoType> {
        const formData = new FormData();
        formData.append('image', file);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data);
    },
    saveProfile(data: ProfileType): Promise<ResultType> {
        return instance.put('profile', data).then(res => res.data);
    }
};

export const authAPI = {
    getAuth(): Promise<ResultType<AuthType>> {
        return instance.get("auth/me").then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean = false,
          captcha: string | null = null): Promise<ResultType<{ userId: number }, ResultCodeForCaptcha>> {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(res => res.data);
    },
    logout(): Promise<ResultType> {
        return instance.delete(`auth/login`).then(res => res.data);
    }
}

export const securityAPI = {
    getCaptchaURL(): Promise<{ url: string }> {
        return instance.get("security/get-captcha-url").then(res => res.data);
    }
}

