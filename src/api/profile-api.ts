import {PhotosType, ProfileType} from "../types";
import {instance, ResultCodes, ResultType} from "./api";

export type SavePhotoType = {
    data: {
        photos: PhotosType
    };
    resultCode: ResultCodes;
    messages: string;
}

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
