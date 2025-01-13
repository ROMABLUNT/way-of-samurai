import axios from "axios"

const  instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7bd7c172-61e1-4aff-9096-bb394cf0f0c7"
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
    authMe() {
        return instance.get('auth/me')
    },
    getProfile (resolvedUserId) {
        return instance.get(`profile/${resolvedUserId}`)
    },


}
