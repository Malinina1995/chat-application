import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://test-api.mokeev1995.ru/api/1.0/",
  headers: {
    "API-KEY": "4531d9e2-5896-44a2-8434-2e6848972af0"
  }
});

export const usersAPI = {
  getUsers(pageSize, currentPage) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then(res => res.data);
  },
  followUsers(id) {
    return instance.post(`follow/${id}`, {}).then(res => res.data);
  },
  unfollowUsers(id) {
    return instance.delete(`follow/${id}`).then(res => res.data);
  }
};

export const profileAPI = {
  getProfile(id) {
    return instance.get(`profile/${id}`).then(res => res.data);
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`).then(res => res.data);
  },
  updateStatus(status) {
    return instance.put('profile/status', {status}).then(res => res.data);
  },
  savePhoto(file) {
    const formData = new FormData();
    formData.append('image', file);
    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => res.data);
  },
  saveProfile(data) {
    return instance.put('profile', data).then(res => res.data);
  }
};

export const authAPI = {
  getAuth(){
    return instance.get("auth/me").then(res => res.data);
  },
  login(email, password, rememberMe = false, captcha= null) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(res => res.data);
  },
  logout() {
    return instance.delete(`auth/login`).then(res => res.data);
  }
}

export const securityAPI = {
  getCaptchaURL(){
    return instance.get("security/get-captcha-url").then(res => res.data);
  }
}

