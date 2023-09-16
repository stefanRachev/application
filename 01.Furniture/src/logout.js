import page from "../node_modules/page/page.mjs";
//import { updateNav } from "./utils";


const btnLogout = document.getElementById("logoutBtn");
btnLogout.addEventListener("click", logout);

export async function logout() {

    console.log("tets");

    const url = "http://localhost:3030/users/logout";

    const user = JSON.parse(sessionStorage.getItem('user'));

    const options = {
        method: "GET",
        headers: { "X-Authorization": user.accessToken }
    }
    try {
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error("Failed to logout");
        }
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('accessToken');

    } catch (err) {
        alert(err)

    }
    //updateNav();
    page.redirect("/");
}