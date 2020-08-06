import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9dcd6ae7-eb21-4615-b06c-cd2848b04266"
    }
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true,
                headers: {
                    "API-KEY": "9dcd6ae7-eb21-4615-b06c-cd2848b04266"
                }
            }
        ).then(response => {
            return response.data
        });
}

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return axios.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then (response => {
                    return response.data;
                }
            )
    }
}


export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return axios.get(`follow?page=${currentPage}&count=${pageSize}`,)
        .then (response => {
                return response.data;
            }
        )
}