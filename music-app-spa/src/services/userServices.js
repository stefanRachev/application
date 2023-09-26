import * as request from "./requester.js";
import * as authService from "./authService.js";

const baseUrl = "http://localhost:3030/users";


export const login = async (email, password) => {
    try {
        const user = await request.post(`${baseUrl}/login`, { email, password });
       authService.saveUser(user);
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const register = async (email, password) => {
    try {
        const user = await request.post(`${baseUrl}/register`, { email, password });
       authService.saveUser(user);
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const logout = async () => {
    await fetch(`${baseUrl}/logout`, {
        headers: {
            "X-Authorization": authService.getToken()
        }
    })

    authService.deleteUser();
}



