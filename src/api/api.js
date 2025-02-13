import axios from "axios"

const  instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8ed93921-06d6-4c17-877f-2da5a24a86e0"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data;
        })
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
        .then(response => {
            return response.data;
        })
    },
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status:status })
    }
}



export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}
