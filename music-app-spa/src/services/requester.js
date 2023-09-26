import * as authService from "./authService.js";


async function request(method, url, data) {

    let options = {};

    if (method != "GET") {
        options.method = method;
        options.headers = {
            "Content-Type": "application/json"
        };
        const userToken = authService.getToken();
        if (userToken) {
            options.headers["X-Authorization"] = userToken;
        }
        options.body = JSON.stringify(data)
    }
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
}

export const get = request.bind({}, "GET");
export const post = request.bind({}, "POST");
export const put = request.bind({}, "PUT");
export const patch = request.bind({}, "PATCH");
export const del = request.bind({}, "DELETE");

