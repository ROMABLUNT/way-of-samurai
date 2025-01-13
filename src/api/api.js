import axios from "axios"

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        }
    )
    .then(response => {
        return response.data;
    });
}

export const unfollowUser = (id) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "7bd7c172-61e1-4aff-9096-bb394cf0f0c7"
        }
    })
    .then(response => {
        return response.data;
    })
}
export const followUser = (id) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            "API-KEY": "7bd7c172-61e1-4aff-9096-bb394cf0f0c7"
        }
    })
    .then(response => {
        return response.data;
    })
}

export const authMe = () => {
    return axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true
    })
}

export const getProfile = (resolvedUserId) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${resolvedUserId}`)
}