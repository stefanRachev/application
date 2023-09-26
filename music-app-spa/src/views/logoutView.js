import * as userServices from "../services/userServices.js";

export const logoutView = async (ctx) => {
    await userServices.logout();

    ctx.page.redirect("/");


}