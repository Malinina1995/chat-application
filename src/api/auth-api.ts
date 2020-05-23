import {instance, ResultCodeForCaptcha, ResultType} from "./api";

export type AuthType = {
    id: number;
    email: string;
    login: string;
}

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
