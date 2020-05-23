import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://test-api.mokeev1995.ru/api/1.0/",
    headers: {
        "API-KEY": "4531d9e2-5896-44a2-8434-2e6848972af0"
    }
});

export type ResultType<T = any, K = ResultCodes> = {
    resultCode: K | ResultCodes;
    messages: string[];
    data: T;
}

export enum ResultCodes {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}
