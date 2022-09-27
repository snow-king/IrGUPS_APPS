import {User, UserLogin, UserRegister} from "../DTO";
import {openApi} from "./instance";

export const authenticate = async (user: UserLogin): Promise<User> => {
    return await openApi
        .post(`/api/login `, {
            email: user.email,
            password: user.password,
        })
        .then((response: { data: any; }) => response.data)
        .catch((error: { response: any; }) => {
            switch (error.response.status) {
                case 500 :
                    return "неправильный логин или пароль";
                case 403:
                    return "Нет доступа"
                default:
                    return error.response.data.message;
            }
        });
};
export const register = async (user: UserRegister) => {
    return await openApi
        .post(`/api/register`, user)
        .then((response: { data: { user: any; }; }) => response.data.user)
        .catch((error: { response: any; }) => {
            console.log(error.response);
        });
};
export const show = async (user: User) => {
    return await openApi.post(`/api/login `, user).catch((error: { response: { status: number; }; }) => {
        if (error.response.status === 404) {
            return "Not Found";
        }
        if (error.response.status === 401) {
            return "Unauthorized";
        }
    });
};
export const confirm = async (userID: Number, code: String) => {
    let content = {user: userID, code: code};
    return await openApi.post(`/api/user/confirm`, content).catch((error: { response: any; }) => {
        console.log(error.response);
    });
};
