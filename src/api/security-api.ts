import {instance} from "./api";

export const securityAPI = {
    getCaptchaURL(): Promise<{ url: string }> {
        return instance.get("security/get-captcha-url").then(res => res.data);
    }
}
